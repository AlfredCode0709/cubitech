import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { FC, ReactNode } from "react";
import { CartProvider } from "@/contexts/CartContext";
import { OrderProvider } from "@/contexts/OrderContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ paddingTop: 80 }}>
      <OrderProvider>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </OrderProvider>
    </div>
  );
};

export default Layout;
