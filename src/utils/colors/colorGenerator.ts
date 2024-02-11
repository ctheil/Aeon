import chroma from "chroma-js";
import { Err } from "../errors/Err";

type RGB = [number, number, number];

const calcCompliment = (color: RGB): RGB => {
  const r = 255 - color[0];
  const g = 255 - color[1];
  const b = 255 - color[2];

  return [r, g, b];
};

export const generatePrimaryPalette = (
  color: string,
  neutralPalette: NeutralPalette,
  type: "light" | "dark",
) => {
  const primary = chroma(
    getAccessibleContrast(
      neutralPalette.backgroundAccent,
      color,
      type === "light" ? "darken" : "brighten",
    ),
  );
  const primaryBg = chroma(
    getAccessibleContrast(
      primary.hex(),
      color,
      type === "light" ? "brighten" : "darken",
    ),
  );
  const _secondary = chroma(calcCompliment(primary.rgb()));
  const secondary = chroma(
    getAccessibleContrast(
      neutralPalette.backgroundAccent,
      _secondary.hex(),
      type === "light" ? "darken" : "brighten",
    ),
  );
  const secondaryBg = chroma(
    getAccessibleContrast(
      secondary.hex(),
      _secondary.hex(),
      type === "light" ? "brighten" : "darken",
    ),
  );

  const palette = {
    primary: primary.hex(),
    pShade: chroma(primary).darken().hex(),
    pTint: chroma(primary).brighten().hex(),
    pBg: primaryBg.hex(),
    secondary: secondary.hex(),
    sShade: chroma(secondary).darken().hex(),
    sTint: chroma(secondary).brighten().hex(),
    sBg: secondaryBg.hex(),
  };

  return palette;
};
type NeutralPalette = {
  backrground: string;
  backgroundAccent: string;
  text: string;
  textAccent: string;
};

export const generateNeutralPalette = (
  color: string,
  type: "light" | "dark",
): NeutralPalette => {
  const background = chroma(color);

  if (type === "light") {
    // darken background for accent then use that for text contrast to make sure accessible
    const bShade = background.darken();
    const textAccent = getAccessibleContrast(
      bShade.hex(),
      bShade.hex(),
      "darken",
    );
    // use darkened textAccent for normal text color
    const textColor = chroma(textAccent).darken();
    return {
      backrground: background.hex(),
      backgroundAccent: bShade.hex(),
      text: textColor.hex(),
      textAccent: textAccent,
    };
  }
  const bShade = background.brighten();
  const textAccent = getAccessibleContrast(
    bShade.hex(),
    bShade.hex(),
    "brighten",
  );
  const textColor = chroma(textAccent).brighten();
  return {
    backrground: background.hex(),
    backgroundAccent: bShade.hex(),
    text: textColor.hex(),
    textAccent: textAccent,
  };
};

const fixContrast = (
  color: string,
  direction: "darken" | "brighten",
): string => {
  if (direction === "darken") {
    return chroma(color).darken().hex();
  }
  return chroma(color).brighten().hex();
};
const MAX_RECUSION_DEPTH = 10;
const getAccessibleContrast = (
  c1: string,
  c2: string,
  direction: "brighten" | "darken",
  good = false,
  depth = 0,
): string => {
  try {
    good = chroma.contrast(c1, c2) >= 4.5;
    console.log("primary:", c1, "background", c2);

    if (good || depth >= MAX_RECUSION_DEPTH) {
      return c2;
    }
    // if !good recurse by either brightening or darkening the color until contrast is accessible
    c2 = fixContrast(c2, direction);
    return getAccessibleContrast(c1, c2, direction, good, depth + 1);
  } catch (err) {
    console.error(err);
    const error = new Err("Color is not dark enough...");
    error.setStatus(422);
    throw error;
  }
};

export const generatePalette = (
  primaryColor: string,
  lightBackground: string,
  darkBackground: string,
) => {
  // BUG: not checking contrast on primary against neutrals

  const neutralPalette: {
    light: NeutralPalette | null;
    dark: NeutralPalette | null;
  } = {
    light: null,
    dark: null,
  };
  neutralPalette.light = generateNeutralPalette(lightBackground, "light");
  neutralPalette.dark = generateNeutralPalette(darkBackground, "dark");

  return {
    primaryLightPalette: generatePrimaryPalette(
      primaryColor,
      neutralPalette.light,
      "light",
    ),
    primaryDarkPalette: generatePrimaryPalette(
      primaryColor,
      neutralPalette.dark,
      "dark",
    ),
    ...neutralPalette,
  };
};

console.log(generatePalette("#cfb87d", "#eeeeee", "#232323"));
