import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 text-slate-200 m-10 rounded-lg">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Branding & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
                Let's <span className="text-indigo-500">Connect.</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Have a story idea? Or maybe you found a bug in the blog system?
                Reach out and let's build something great together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-slate-800 rounded-2xl group-hover:bg-indigo-500/20 transition-colors">
                  <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <a href="mailto:kmlamahara@gmail.com" className="text-slate-400">kmlamahara@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-slate-800 rounded-2xl group-hover:bg-indigo-500/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M4.983 3.5C4.983 4.604 4.09 5.5 2.992 5.5 1.89 5.5 1 4.604 1 3.5 1 2.398 1.89 1.5 2.992 1.5c1.098 0 1.991.898 1.991 2zm.027 3.75H1.01V22h3.999V7.25zM8.5 7.25H12v2.01h.057c.487-.923 1.676-1.894 3.449-1.894C19.34 7.366 21 9.17 21 12.558V22h-4V13.39c0-1.596-.57-2.688-1.997-2.688-1.089 0-1.738.733-2.023 1.441-.104.252-.13.602-.13.955V22h-4V7.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Linkedin</h4>
                  <a href="https://linkedin.com/in/kmla-mahara" className="text-slate-400">linkedin.com/in/kmla-mahara</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Glassmorphic Form */}
          <div className="lg:col-span-7 bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl">
            <form className="grid grid-cols-1 gap-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Dev"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Coder"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;