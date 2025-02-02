import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoadingScreen from "./common/LoadingScreen";

type Props = { children: ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  const { isLoading, user } = useUser();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading || showLoading) {
    return <LoadingScreen />;
  }

  return (
    <div style={{ paddingTop: 80 }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
