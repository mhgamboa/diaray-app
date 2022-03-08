import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import DarkModeButton from "./darkModeButton";

const Layout = ({ children }) => {
  const [dark, toggleDark] = useState("");
  return (
    <div className={dark}>
      <Header toggleDark={toggleDark} dark={dark} />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
