import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
// import LoadingScreen from "./common/LoadingScreen";
// import { useUser } from "@auth0/nextjs-auth0";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  // const { isLoading } = useUser();

  // if (isLoading) {
  //   return <LoadingScreen />;
  // } else {
  //   return (
  //     <div style={{ paddingTop: 80 }}>
  //       <Navbar />
  //       <main>{children}</main>
  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div style={{ paddingTop: 80 }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
