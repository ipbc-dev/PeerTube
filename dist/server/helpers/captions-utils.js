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
const path_1 = require("path");
const config_1 = require("../initializers/config");
const srt2vtt = require("srt-to-vtt");
const fs_extra_1 = require("fs-extra");
function moveAndProcessCaptionFile(physicalFile, videoCaption) {
    return __awaiter(this, void 0, void 0, function* () {
        const videoCaptionsDir = config_1.CONFIG.STORAGE.CAPTIONS_DIR;
        const destination = path_1.join(videoCaptionsDir, videoCaption.getCaptionName());
        if (physicalFile.path.endsWith('.srt')) {
            yield convertSrtToVtt(physicalFile.path, destination);
            yield fs_extra_1.remove(physicalFile.path);
        }
        else if (physicalFile.path !== destination) {
            yield fs_extra_1.move(physicalFile.path, destination, { overwrite: true });
        }
        physicalFile.filename = videoCaption.getCaptionName();
        physicalFile.path = destination;
    });
}
exports.moveAndProcessCaptionFile = moveAndProcessCaptionFile;
function convertSrtToVtt(source, destination) {
    return new Promise((res, rej) => {
        const file = fs_extra_1.createReadStream(source);
        const converter = srt2vtt();
        const writer = fs_extra_1.createWriteStream(destination);
        for (const s of [file, converter, writer]) {
            s.on('error', err => rej(err));
        }
        return file.pipe(converter)
            .pipe(writer)
            .on('finish', () => res());
    });
}
