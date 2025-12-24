import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center ">

      {/* Background Glow Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Side: Content */}
        <div className="space-y-10 text-center lg:text-left">

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Share your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">stories</span> with the world.
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A minimalist CRUD platform designed for developers and writers.
            Create, edit, and manage your thoughts with a lightning-fast interface.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="/create"><button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:-translate-y-1">
              Start Writing It's Free
            </button></a>
            <a href="/blogs"><button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all">
              View All Posts
            </button></a>
          </div>

          {/* Stats/Social Proof */}
          <div className="pt-8 flex justify-center lg:justify-start space-x-8 border-t border-slate-800">
            <div>
              <p className="text-2xl font-bold text-white">10k+</p>
              <p className="text-slate-500 text-sm">Active Readers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-slate-500 text-sm">Daily Blogs</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Element (The "Blog Card" Preview) */}
        <div className="hidden lg:block relative">
          <div className="relative z-10 bg-slate-900 border border-slate-700 p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-[#0f172a] rounded-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /><path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
              </div>
              <div className="p-6 space-y-4">
                <div className="h-4 w-20 bg-indigo-500/20 rounded animate-pulse" />
                <div className="h-8 w-full bg-slate-800 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-slate-800 rounded" />
                  <div className="h-4 w-2/3 bg-slate-800 rounded" />
                </div>
              </div>
            </div>
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-bounce" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;