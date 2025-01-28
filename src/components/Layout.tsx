import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

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
