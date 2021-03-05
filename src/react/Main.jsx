import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Main;
