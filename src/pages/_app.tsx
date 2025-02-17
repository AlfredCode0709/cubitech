import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import { createDynamicTheme } from "@/styles/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Auth0Provider } from "@auth0/nextjs-auth0";
import { CartProvider } from "@/contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(createDynamicTheme());

  useEffect(() => {
    /* Recreate the theme after the DOM is available */
    setTheme(createDynamicTheme());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Auth0Provider>
        <CartProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </Auth0Provider>
    </ThemeProvider>
  );
}
