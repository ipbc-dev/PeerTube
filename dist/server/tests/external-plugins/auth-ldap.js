"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const extra_utils_1 = require("../../../shared/extra-utils");
const servers_1 = require("../../../shared/extra-utils/server/servers");
describe('Official plugin auth-ldap', function () {
    let server;
    let accessToken;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(30000);
            server = yield servers_1.flushAndRunServer(1);
            yield extra_utils_1.setAccessTokensToServers([server]);
            yield extra_utils_1.installPlugin({
                url: server.url,
                accessToken: server.accessToken,
                npmName: 'peertube-plugin-auth-ldap'
            });
        });
    });
    it('Should not login with without LDAP settings', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield extra_utils_1.userLogin(server, { username: 'fry', password: 'fry' }, 400);
        });
    });
    it('Should not login with bad LDAP settings', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield extra_utils_1.updatePluginSettings({
                url: server.url,
                accessToken: server.accessToken,
                npmName: 'peertube-plugin-auth-ldap',
                settings: {
                    'bind-credentials': 'GoodNewsEveryone',
                    'bind-dn': 'cn=admin,dc=planetexpress,dc=com',
                    'insecure-tls': false,
                    'mail-property': 'mail',
                    'search-base': 'ou=people,dc=planetexpress,dc=com',
                    'search-filter': '(|(mail={{username}})(uid={{username}}))',
                    'url': 'ldap://ldap:390',
                    'username-property': 'uid'
                }
            });
            yield extra_utils_1.userLogin(server, { username: 'fry', password: 'fry' }, 400);
        });
    });
    it('Should not login with good LDAP settings but wrong username/password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield extra_utils_1.updatePluginSettings({
                url: server.url,
                accessToken: server.accessToken,
                npmName: 'peertube-plugin-auth-ldap',
                settings: {
                    'bind-credentials': 'GoodNewsEveryone',
                    'bind-dn': 'cn=admin,dc=planetexpress,dc=com',
                    'insecure-tls': false,
                    'mail-property': 'mail',
                    'search-base': 'ou=people,dc=planetexpress,dc=com',
                    'search-filter': '(|(mail={{username}})(uid={{username}}))',
                    'url': 'ldap://ldap:389',
                    'username-property': 'uid'
                }
            });
            yield extra_utils_1.userLogin(server, { username: 'fry', password: 'bad password' }, 400);
            yield extra_utils_1.userLogin(server, { username: 'fryr', password: 'fry' }, 400);
        });
    });
    it('Should login with the appropriate username/password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            accessToken = yield extra_utils_1.userLogin(server, { username: 'fry', password: 'fry' });
        });
    });
    it('Should login with the appropriate email/password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            accessToken = yield extra_utils_1.userLogin(server, { username: 'fry@planetexpress.com', password: 'fry' });
        });
    });
    it('Should login get my profile', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield extra_utils_1.getMyUserInformation(server.url, accessToken);
            const body = res.body;
            chai_1.expect(body.username).to.equal('fry');
            chai_1.expect(body.email).to.equal('fry@planetexpress.com');
        });
    });
    it('Should upload a video', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield extra_utils_1.uploadVideo(server.url, accessToken, { name: 'my super video' });
        });
    });
    it('Should not login if the plugin is uninstalled', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield extra_utils_1.uninstallPlugin({ url: server.url, accessToken: server.accessToken, npmName: 'peertube-plugin-auth-ldap' });
            yield extra_utils_1.userLogin(server, { username: 'fry@planetexpress.com', password: 'fry' }, 400);
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield servers_1.cleanupTests([server]);
        });
    });
});
