import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import favicon from "../images/favicon.ico";
import Helmet from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
