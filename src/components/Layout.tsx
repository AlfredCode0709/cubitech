import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = { children: ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ paddingTop: 80 }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
