"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = __importDefault(require("@grpc/grpc-js"));
const proto_loader_1 = __importDefault(require("@grpc/proto-loader"));
const path_1 = __importDefault(require("path"));
const PROTO_LOC = path_1.default.join(__dirname, '../Protobuf/Mumble.proto');
function utils() {
    const packageDefinition = proto_loader_1.default.loadSync(PROTO_LOC, { keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
    return grpc_js_1.default.loadPackageDefinition(packageDefinition);
}
exports.default = utils;
