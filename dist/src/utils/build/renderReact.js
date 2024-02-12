"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderReact = void 0;
const fs_1 = __importDefault(require("fs"));
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const Err_1 = require("../errors/Err");
const path_1 = __importDefault(require("path"));
const renderReact = (req, res, next, component, componentName, props, requiredUser = false) => {
    let extendedProps = Object.assign(Object.assign({}, props), { isAuthenticated: req.session.isAuthenticated, componentName, csrfToken: res.locals.csrfToken, user: req.session.user });
    try {
        fs_1.default.readFile(path_1.default.resolve("./public/html/index.html"), "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            if (!extendedProps.user && requiredUser) {
                const error = new Err_1.Err("User is required for this view");
                error.setStatus(500);
                console.warn(error);
                throw error;
            }
            // Use React.createElement to avoid JSX syntax if TS is causing issues
            const reactAppElement = react_1.default.createElement(component, extendedProps);
            const reactAppString = server_1.default.renderToString(reactAppElement);
            const injectProps = data.replace(`window.__INITIAL_PROPS__ = "";`, `window.__INITIAL_PROPS__ = ${JSON.stringify(extendedProps)};`);
            const renderedHtml = injectProps.replace('<div id="root"></div>', `<div id="root">${reactAppString}</div>`);
            console.log("[server]: rendered html:", renderedHtml);
            return res.send(renderedHtml);
        });
    }
    catch (err) {
        console.warn(err);
        const error = new Err_1.Err(`Error rendering view: ${err}`);
        error.setStatus(500);
        return next(error);
    }
};
exports.renderReact = renderReact;
