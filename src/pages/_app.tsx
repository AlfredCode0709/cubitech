import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import { CartProvider } from "@/contexts/CartContext";
import { OrderProvider } from "@/contexts/OrderContext";
import { createDynamicTheme } from "@/styles/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(createDynamicTheme());

  useEffect(() => {
    /* Recreate the theme after the DOM is available */
    setTheme(createDynamicTheme());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <OrderProvider>
        <CartProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </OrderProvider>
    </ThemeProvider>
  );
}
