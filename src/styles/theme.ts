import { Inter, Merriweather } from "next/font/google";
import { createTheme } from "@mui/material";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const merriWeather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const getCssVariable = (variable: string, fallback: string): string => {
  if (typeof window !== "undefined") {
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue(variable)
        .trim() || fallback
    );
  }
  return fallback;
};

export const createDynamicTheme = () =>
  createTheme({
    palette: {
      primary: {
        light: getCssVariable("--primary-light", "#f0f6fe"),
        main: getCssVariable("--primary-main", "#0753b4"),
        dark: getCssVariable("--primary-dark", "#093987"),
      },
      secondary: {
        light: getCssVariable("--secondary-light", "#ba68c8"),
        main: getCssVariable("--secondary-main", "#9c27b0"),
        dark: getCssVariable("--secondary-dark", "#7b1fa2"),
      },
      error: {
        light: getCssVariable("--error-light", "#fb849a"),
        main: getCssVariable("--error-main", "#f72b51"),
        dark: getCssVariable("--error-dark", "#c5072a"),
      },
      warning: {
        light: getCssVariable("--warning-light", "#ff9800"),
        main: getCssVariable("--warning-main", "#ed6c02"),
        dark: getCssVariable("--warning-dark", "#e65100"),
      },
      info: {
        light: getCssVariable("--info-light", "#03a9f4"),
        main: getCssVariable("--info-main", "#0288d1"),
        dark: getCssVariable("--info-dark", "#01579b"),
      },
      success: {
        light: getCssVariable("--success-light", "#43d698"),
        main: getCssVariable("--success-main", "#23a26d"),
        dark: getCssVariable("--success-dark", "#176947"),
      },
    },
    typography: {
      fontFamily: `"Inter", sans-serif;`,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: "80px",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: "inherit",
            width: "100%",
          },
        },
      },
    },
  });

export default createDynamicTheme;
