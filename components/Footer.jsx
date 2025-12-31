import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* Top Section: CTA / Newsletter Box */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-slate-800 p-8 md:p-12 mb-16">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Ready to start writing?</h3>
              <p className="text-slate-400">Join 10,000+ writers and share your story with the world.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-80 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-lg shadow-white/5">
                Subscribe
              </button>
            </div>
          </div>
          {/* Subtle Background Glow for CTA */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 blur-[80px]"></div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 mb-16">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-18 w-18 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <a href="/home">
                  <img src="/logoE.PNG" alt="My Company Logo" className="h-18 w-auto object-contain" />
                </a>
              </div>
              <span className="text-2xl font-extrabold text-white leading-tight">Bloom</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              The world's most intuitive CRUD management platform for modern content creators. Built with speed and security at its core.
            </p>

          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase text-xs">Links</h4>
            <ul className="space-y-4">
              <li><a href="/create" className="hover:text-indigo-400 transition-colors">Write Blog</a></li>
              <li><a href="/" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/blogs" className="hover:text-indigo-400 transition-colors">Read Blogs</a></li>
              <li><a href="/contact" className="hover:text-indigo-400 transition-colors">Contact </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase text-xs">Lets Connect</h4>
            <ul className="space-y-4">
              <li><a href="https://linkedin.com/in/kmla-mahara" className="hover:text-indigo-400 transition-colors">Linkedin</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/semicolon_9999/" className="hover:text-indigo-400 transition-colors">Instagram</a></li>

            </ul>
          </div>



        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <span>&copy; 2025  All rights reserved. made with ❤️ by KMLA</span>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;