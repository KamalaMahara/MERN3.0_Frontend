import React from 'react'


const Navbar = () => {
  return (
    <>
      <nav className="flex  justify-between  items-center border border-slate-700 px-10 py-2 rounded-full text-white text-md 
                max-md:w-full max-md:justify-between
                max-w-4xl mx-auto mt-6 ">

        <a href="/home">
          <img src="/logor.png" alt="My Company Logo" className="w-12  min-h-12" />
        </a>
        <div className="hidden md:flex items-center gap-6 ml-7">
          <a href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Home</span>
          </a>
          <a href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Blogs</span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Blogs</span>
          </a>
          <a href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Create</span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Create</span>
          </a>
          <a href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Contact</span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Contact</span>
          </a>
        </div>

        <div className="hidden ml-14 md:flex items-center gap-4">
          <button
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Login
          </button>
          <button
            className="bg-white hover:shadow-[0px_0px_20px_10px] shadow-[0px_0px_20px_4px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
          </button>
        </div>
        <button id="menuToggle" className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div id="mobileMenu" className="absolute hidden top-48 text-base left-0 bg-black w-full flex-col items-center gap-4">
          <a className="hover:text-indigo-600" href="#">
            Products
          </a>
          <a className="hover:text-indigo-600" href="#">
            Customer Stories
          </a>
          <a className="hover:text-indigo-600" href="#">
            Pricing
          </a>
          <a className="hover:text-indigo-600" href="#">
            Docs
          </a>
          <button
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
          </button>
          <button
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
          </button>
        </div>
      </nav>


    </>
  )
}

export default Navbar