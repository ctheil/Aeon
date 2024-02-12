"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Input = (props) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("label", { htmlFor: props.name, className: "sr-only" }, props.friendlyName || props.name),
        react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement("input", { type: props.type, name: props.name, className: "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-gray-700", placeholder: props.placeholder }),
            props.icon && (react_1.default.createElement("span", { className: "absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-400 dark:text-gray-200" }, props.icon)))));
};
exports.default = Input;
