"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CsrfInput = (props) => {
    return react_1.default.createElement("input", { type: "hidden", value: props.token, name: "_csrf" });
};
exports.default = CsrfInput;
