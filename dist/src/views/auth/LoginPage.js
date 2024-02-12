"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Input_1 = __importDefault(require("../components/forms/Input"));
const CsrfInput_1 = __importDefault(require("../components/CsrfInput"));
const LoginPage = (props) => {
    console.log("[react]: page props:", props);
    return (react_1.default.createElement("div", { className: "min-h-screen bg-l-bg dark:bg-d-bg" },
        react_1.default.createElement("div", { className: "mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" },
            react_1.default.createElement("div", { className: "mx-auto max-w-lg" },
                react_1.default.createElement("h1", { className: "text-center text-2xl font-thin text-l-p-500 dark:text-d-p-500 sm:text-3xl " }, "Welcome back"),
                react_1.default.createElement("p", { className: "mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-gray-300" }, "As the initial administrator, you'll need to set up your account to enable you to customize, manage, and optimize the platform to perfectly fit your organization."),
                react_1.default.createElement("form", { action: "/v1/auth/login", method: "POST", className: "mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" },
                    react_1.default.createElement("p", { className: "text-center text-lg font-medium mb-10 text-l-p-500 dark:text-d-p-500" }, "Login"),
                    react_1.default.createElement(Input_1.default, { name: "email", friendlyName: "Email", placeholder: "Enter email", type: "email" }),
                    react_1.default.createElement(Input_1.default, { name: "password", friendlyName: "Password", placeholder: "Enter password", type: "password" }),
                    react_1.default.createElement(CsrfInput_1.default, { token: props.csrfToken }),
                    react_1.default.createElement("button", { type: "submit", className: "block w-full rounded-lg bg-l-p-bg dark:bg-d-p-bg\n            px-5 py-3 text-sm font-medium text-l-p-500 dark:text-d-p-500" }, "Log in"))))));
};
exports.default = LoginPage;
