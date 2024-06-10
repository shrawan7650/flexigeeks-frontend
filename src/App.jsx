import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ScrollTop from "./components/Main/parts/ScrollTop";

function App() {
  return (
    <>
      <Header />
      <div className="pt-20">
      <Outlet />
      <Footer />
      </div>
      <ScrollTop />
    </>
  );
}

export default App;
