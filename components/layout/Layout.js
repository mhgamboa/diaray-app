import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [dark, toggleDark] = useState("");
  return (
    <div className={dark}>
      <Header toggledark={toggleDark} />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
