// src/Pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CreateBlog from "./CreateBlog";


const Home = () => {
  return (
    <>
      <div className="bg-[#020617]">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <CreateBlog />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;