"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const card_1 = require("../components/ui/card");
const HomePage = (props) => {
    var _a;
    console.log("[react]: home page props:", props);
    return (react_1.default.createElement("div", { className: "min-h-screen bg-l-bg dark:bg-d-bg" },
        react_1.default.createElement("h1", null,
            "Welcome Home ", (_a = props.user) === null || _a === void 0 ? void 0 :
            _a.firstName),
        react_1.default.createElement(card_1.Card, { className: "w-[350px]" },
            react_1.default.createElement(card_1.CardHeader, null,
                react_1.default.createElement(card_1.CardTitle, null, "Create project"),
                react_1.default.createElement(card_1.CardDescription, null, "Deploy your new project in one-click.")))));
};
exports.default = HomePage;
