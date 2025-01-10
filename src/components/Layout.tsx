import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoadingScreen from "./LoadingScreen";

type Props = { children: ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  const { isLoading } = useUser();
  const [showLoading, setShowLoading] = useState(true); // Control loading screen visibility

  useEffect(() => {
    // Set timeout for loading screen
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timeout); // Clean up timeout
  }, []);

  // Show loading screen if either user data is still loading or timeout hasn't resolved
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
