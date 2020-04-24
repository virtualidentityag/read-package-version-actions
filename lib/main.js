"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const getPackageProperty_1 = require("./getPackageProperty");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const path = core.getInput('path');
            core.debug(`Load package.json at ${path}`);
            const result = getPackageProperty_1.getPackageProperty(path);
            core.debug(`set output: propertyValue: ${result}`);
            core.setOutput('propertyValue', result);
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
