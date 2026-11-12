import type { ReactNode } from "react";

import Header from "~/components/common/Header/Header";
import Footer from "~/components/common/Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
