import React from "react";

import Approach from "../../components/Approach/Approach";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import CorteV from "../../assets/Products/corte-v.png"

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Approach />
      <Products />
      <img className="corte-v" src={CorteV} alt="" />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
