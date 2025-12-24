// src/Pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <div className="bg-[#020617]">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;