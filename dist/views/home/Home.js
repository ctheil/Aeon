"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SideBar_1 = __importDefault(require("../nav/SideBar"));
const TopNav_1 = __importDefault(require("../nav/TopNav"));
const Home = (props) => {
    var _a;
    return (react_1.default.createElement("div", { className: "flex" },
        react_1.default.createElement(SideBar_1.default, null),
        react_1.default.createElement("div", { className: "flex flex-col ml-16 flex-grow" },
            react_1.default.createElement(TopNav_1.default, null),
            react_1.default.createElement("main", { className: "flex-grow mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-10 flex flex-col content-start justify-start" },
                react_1.default.createElement("h1", { className: "text-6xl font-thin text-l-text dark:text-d-text w-full" },
                    "Hi ", (_a = props.user) === null || _a === void 0 ? void 0 :
                    _a.firstName)))));
};
exports.default = Home;
