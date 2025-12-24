import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: "Fast CRUD Operations",
      desc: "Create, Read, Update, and Delete blogs with zero latency using our optimized state management.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      title: "Markdown Support",
      desc: "Write your blogs in Markdown and see them rendered beautifully with full syntax highlighting.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    {
      title: "Real-time Analytics",
      desc: "Track your blog's performance with built-in view counters and engagement metrics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
  ];

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Subtle Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">
            Powerful Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to <br />
            <span className="text-slate-400 text-3xl md:text-4xl">manage your content.</span>
          </h3>
          <p className="text-slate-500 text-lg">
            Forget complex dashboards. Our CRUD system is built for speed and simplicity,
            letting you focus on what matters most: your writing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-indigo-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10"></div>

              <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 border border-white/5`}>
                {feature.icon}
              </div>

              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h4>

              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;