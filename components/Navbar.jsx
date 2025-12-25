import React from 'react'


const Navbar = () => {
  return (
    <>
      <nav className="flex h-18  justify-evenly gap-4  items-center border border-slate-700 px-10 py-2 rounded-full text-white text-md max-md:w-full  max-md:justify-between max-w-2xl mx-auto mt-2 hover:border-blue-800 bordder  ">

        <a href="/home">
          <img src="/logoE.PNG" alt="My Company Logo" className="h-18 w-auto object-contain" />
        </a>

        <span className="text-3xl font-extrabold text-white leading-tight">Bloom</span>
        <div className="hidden md:flex items-center gap-8 ml-7">
          <a href="/" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Home</span>
          </a>
          <a href="/blogs" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Blogs</span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Blogs</span>
          </a>
          <a href="/create" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Create</span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Create</span>
          </a>
          <a href="/contact" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Contact</span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Contact</span>
          </a>
        </div>


        <button id="menuToggle" className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div id="mobileMenu" className="absolute hidden top-48 text-base left-0 bg-black w-full flex-col items-center gap-4">
          <a className="hover:text-indigo-600" href="#">
            Home
          </a>
          <a className="hover:text-indigo-600" href="#">
            Blogs
          </a>
          <a className="hover:text-indigo-600" href="#">
            Create
          </a>

          <button
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
          </button>

        </div>
      </nav>


    </>
  )
}

export default Navbar