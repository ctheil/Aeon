import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D0BCFF",
      light: "#d9c9ff",
      dark: "#9183b2",
    },
    secondary: {
      main: "#EFB8C8",
      light: "#f2c6d3",
      dark: "#a7808c",
    },
  },
});

export default theme;
