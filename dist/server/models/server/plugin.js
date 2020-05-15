"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PluginModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const utils_1 = require("../utils");
const plugins_1 = require("../../helpers/custom-validators/plugins");
const plugin_type_1 = require("../../../shared/models/plugins/plugin.type");
const sequelize_1 = require("sequelize");
let PluginModel = PluginModel_1 = class PluginModel extends sequelize_typescript_1.Model {
    static listEnabledPluginsAndThemes() {
        const query = {
            where: {
                enabled: true,
                uninstalled: false
            }
        };
        return PluginModel_1.findAll(query);
    }
    static loadByNpmName(npmName) {
        const name = this.normalizePluginName(npmName);
        const type = this.getTypeFromNpmName(npmName);
        const query = {
            where: {
                name,
                type
            }
        };
        return PluginModel_1.findOne(query);
    }
    static getSetting(pluginName, pluginType, settingName) {
        const query = {
            attributes: ['settings'],
            where: {
                name: pluginName,
                type: pluginType
            }
        };
        return PluginModel_1.findOne(query)
            .then(p => {
            if (!p || !p.settings)
                return undefined;
            return p.settings[settingName];
        });
    }
    static setSetting(pluginName, pluginType, settingName, settingValue) {
        const query = {
            where: {
                name: pluginName,
                type: pluginType
            }
        };
        const toSave = {
            [`settings.${settingName}`]: settingValue
        };
        return PluginModel_1.update(toSave, query)
            .then(() => undefined);
    }
    static getData(pluginName, pluginType, key) {
        const query = {
            raw: true,
            attributes: [[sequelize_1.json('storage.' + key), 'value']],
            where: {
                name: pluginName,
                type: pluginType
            }
        };
        return PluginModel_1.findOne(query)
            .then((c) => {
            if (!c)
                return undefined;
            const value = c.value;
            if (typeof value === 'string' && value.startsWith('{')) {
                try {
                    return JSON.parse(value);
                }
                catch (_a) {
                    return value;
                }
            }
            return c.value;
        });
    }
    static storeData(pluginName, pluginType, key, data) {
        const query = {
            where: {
                name: pluginName,
                type: pluginType
            }
        };
        const toSave = {
            [`storage.${key}`]: data
        };
        return PluginModel_1.update(toSave, query)
            .then(() => undefined);
    }
    static listForApi(options) {
        const { uninstalled = false } = options;
        const query = {
            offset: options.start,
            limit: options.count,
            order: utils_1.getSort(options.sort),
            where: {
                uninstalled
            }
        };
        if (options.pluginType)
            query.where['type'] = options.pluginType;
        return PluginModel_1
            .findAndCountAll(query)
            .then(({ rows, count }) => {
            return { total: count, data: rows };
        });
    }
    static listInstalled() {
        const query = {
            where: {
                uninstalled: false
            }
        };
        return PluginModel_1.findAll(query);
    }
    static normalizePluginName(npmName) {
        return npmName.replace(/^peertube-((theme)|(plugin))-/, '');
    }
    static getTypeFromNpmName(npmName) {
        return npmName.startsWith('peertube-plugin-')
            ? plugin_type_1.PluginType.PLUGIN
            : plugin_type_1.PluginType.THEME;
    }
    static buildNpmName(name, type) {
        if (type === plugin_type_1.PluginType.THEME)
            return 'peertube-theme-' + name;
        return 'peertube-plugin-' + name;
    }
    getPublicSettings(registeredSettings) {
        const result = {};
        const settings = this.settings || {};
        for (const r of registeredSettings) {
            if (r.private !== false)
                continue;
            result[r.name] = settings[r.name] || r.default || null;
        }
        return result;
    }
    toFormattedJSON() {
        return {
            name: this.name,
            type: this.type,
            version: this.version,
            latestVersion: this.latestVersion,
            enabled: this.enabled,
            uninstalled: this.uninstalled,
            peertubeEngine: this.peertubeEngine,
            description: this.description,
            homepage: this.homepage,
            settings: this.settings,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Is('PluginName', value => utils_1.throwIfNotValid(value, plugins_1.isPluginNameValid, 'name')),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PluginModel.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Is('PluginType', value => utils_1.throwIfNotValid(value, plugins_1.isPluginTypeValid, 'type')),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PluginModel.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Is('PluginVersion', value => utils_1.throwIfNotValid(value, plugins_1.isPluginVersionValid, 'version')),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PluginModel.prototype, "version", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(true),
    sequelize_typescript_1.Is('PluginLatestVersion', value => utils_1.throwIfNotValid(value, plugins_1.isPluginVersionValid, 'version')),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PluginModel.prototype, "latestVersion", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], PluginModel.prototype, "enabled", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], PluginModel.prototype, "uninstalled", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PluginModel.prototype, "peertubeEngine", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(true),
    sequelize_typescript_1.Is('PluginDescription', value => utils_1.throwIfNotValid(value, plugins_1.isPluginDescriptionValid, 'description')),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PluginModel.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Is('PluginHomepage', value => utils_1.throwIfNotValid(value, plugins_1.isPluginHomepage, 'homepage')),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PluginModel.prototype, "homepage", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(true),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSONB),
    __metadata("design:type", Object)
], PluginModel.prototype, "settings", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(true),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSONB),
    __metadata("design:type", Object)
], PluginModel.prototype, "storage", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], PluginModel.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], PluginModel.prototype, "updatedAt", void 0);
PluginModel = PluginModel_1 = __decorate([
    sequelize_typescript_1.DefaultScope(() => ({
        attributes: {
            exclude: ['storage']
        }
    })),
    sequelize_typescript_1.Table({
        tableName: 'plugin',
        indexes: [
            {
                fields: ['name', 'type'],
                unique: true
            }
        ]
    })
], PluginModel);
exports.PluginModel = PluginModel;
