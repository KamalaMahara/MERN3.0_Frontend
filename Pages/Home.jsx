// src/Pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="mt-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Blog Platform</h1>
        <p className="mt-4 text-lg text-gray-600">
          Read amazing blogs or create your own.
        </p>

        <a
          href="/blogs"
          className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded-full"
        >
          View Blogs
        </a>
      </section>
    </>
  );
};

export default Home;