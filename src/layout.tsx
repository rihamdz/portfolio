import { ReactNode } from "react";
import Navbar from "./components/NavBar";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen  ">
  
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;