"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePalette = exports.generateNeutralPalette = exports.generatePrimaryPalette = void 0;
const chroma_js_1 = __importDefault(require("chroma-js"));
const Err_1 = require("../errors/Err");
const calcCompliment = (color) => {
    const r = 255 - color[0];
    const g = 255 - color[1];
    const b = 255 - color[2];
    return [r, g, b];
};
const generatePrimaryPalette = (color, neutralPalette, type) => {
    const primary = (0, chroma_js_1.default)(getAccessibleContrast(neutralPalette.backgroundAccent, color, type === "light" ? "darken" : "brighten"));
    const primaryBg = (0, chroma_js_1.default)(getAccessibleContrast(primary.hex(), color, type === "light" ? "brighten" : "darken"));
    const _secondary = (0, chroma_js_1.default)(calcCompliment(primary.rgb()));
    const secondary = (0, chroma_js_1.default)(getAccessibleContrast(neutralPalette.backgroundAccent, _secondary.hex(), type === "light" ? "darken" : "brighten"));
    const secondaryBg = (0, chroma_js_1.default)(getAccessibleContrast(secondary.hex(), _secondary.hex(), type === "light" ? "brighten" : "darken"));
    const palette = {
        primary: primary.hex(),
        pShade: (0, chroma_js_1.default)(primary).darken().hex(),
        pTint: (0, chroma_js_1.default)(primary).brighten().hex(),
        pBg: primaryBg.hex(),
        secondary: secondary.hex(),
        sShade: (0, chroma_js_1.default)(secondary).darken().hex(),
        sTint: (0, chroma_js_1.default)(secondary).brighten().hex(),
        sBg: secondaryBg.hex(),
    };
    return palette;
};
exports.generatePrimaryPalette = generatePrimaryPalette;
const generateNeutralPalette = (color, type) => {
    const background = (0, chroma_js_1.default)(color);
    if (type === "light") {
        // darken background for accent then use that for text contrast to make sure accessible
        const bShade = background.darken();
        const textAccent = getAccessibleContrast(bShade.hex(), bShade.hex(), "darken");
        // use darkened textAccent for normal text color
        const textColor = (0, chroma_js_1.default)(textAccent).darken();
        return {
            backrground: background.hex(),
            backgroundAccent: bShade.hex(),
            text: textColor.hex(),
            textAccent: textAccent,
        };
    }
    const bShade = background.brighten();
    const textAccent = getAccessibleContrast(bShade.hex(), bShade.hex(), "brighten");
    const textColor = (0, chroma_js_1.default)(textAccent).brighten();
    return {
        backrground: background.hex(),
        backgroundAccent: bShade.hex(),
        text: textColor.hex(),
        textAccent: textAccent,
    };
};
exports.generateNeutralPalette = generateNeutralPalette;
const fixContrast = (color, direction) => {
    if (direction === "darken") {
        return (0, chroma_js_1.default)(color).darken().hex();
    }
    return (0, chroma_js_1.default)(color).brighten().hex();
};
const MAX_RECUSION_DEPTH = 10;
const getAccessibleContrast = (c1, c2, direction, good = false, depth = 0) => {
    try {
        good = chroma_js_1.default.contrast(c1, c2) >= 4.5;
        console.log("primary:", c1, "background", c2);
        if (good || depth >= MAX_RECUSION_DEPTH) {
            return c2;
        }
        // if !good recurse by either brightening or darkening the color until contrast is accessible
        c2 = fixContrast(c2, direction);
        return getAccessibleContrast(c1, c2, direction, good, depth + 1);
    }
    catch (err) {
        console.error(err);
        const error = new Err_1.Err("Color is not dark enough...");
        error.setStatus(422);
        throw error;
    }
};
const generatePalette = (primaryColor, lightBackground, darkBackground) => {
    // BUG: not checking contrast on primary against neutrals
    const neutralPalette = {
        light: null,
        dark: null,
    };
    neutralPalette.light = (0, exports.generateNeutralPalette)(lightBackground, "light");
    neutralPalette.dark = (0, exports.generateNeutralPalette)(darkBackground, "dark");
    return Object.assign({ primaryLightPalette: (0, exports.generatePrimaryPalette)(primaryColor, neutralPalette.light, "light"), primaryDarkPalette: (0, exports.generatePrimaryPalette)(primaryColor, neutralPalette.dark, "dark") }, neutralPalette);
};
exports.generatePalette = generatePalette;
console.log((0, exports.generatePalette)("#cfb87d", "#eeeeee", "#232323"));
