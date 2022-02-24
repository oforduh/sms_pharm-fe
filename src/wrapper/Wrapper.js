import React, { Children } from "react";
import Navbar from "../components/Navbar/Navbar.js";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PageWrapper;
