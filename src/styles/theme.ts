import { Inter, Merriweather } from "@next/font/google";
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

// Utility to get CSS variable value
const getCssVariable = (variable: string, fallback: string): string => {
  if (typeof window !== "undefined") {
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue(variable)
        .trim() || fallback
    );
  }
  return fallback; // Fallback for SSR
};

// Create theme dynamically
export const createDynamicTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: getCssVariable("--primary-main", "#0753b4"),
        light: getCssVariable("--primary-light", "#f0f6fe"),
        dark: getCssVariable("--primary-dark", "#093987"),
      },
      error: {
        main: getCssVariable("--error-main", "#f72b51"),
        light: getCssVariable("--error-light", "#fb849a"),
        dark: getCssVariable("--error-dark", "#c5072a"),
      },
      success: {
        main: getCssVariable("--success-main", "#23a26d"),
        light: getCssVariable("--success-light", "#43d698"),
        dark: getCssVariable("--success-dark", "#176947"),
      },
    },
    typography: {
      fontFamily: inter.style.fontFamily,
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
