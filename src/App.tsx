import React from 'react';
import { Brain, Palette, Video, ChevronDown } from 'lucide-react';
import Newsletter from './components/Newsletter';
import FeatureCard from './components/FeatureCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            Coming Soon
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            K2 AI Technologies
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Pioneering the future of enterprise AI with cutting-edge solutions in pattern recognition,
            creative design, and marketing automation.
          </p>
          <Newsletter />
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="Pattern Recognition & Analysis"
              description="Advanced LLMs for intelligent data parsing, query optimization, and automated report generation to enhance business intelligence and decision-making processes."
              image="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80"
            />
            <FeatureCard
              icon={Palette}
              title="Creative Design Discovery"
              description="Revolutionary text-to-image AI technology empowering fashion, art, and advertising industries with unlimited creative possibilities and design exploration."
              image="https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80"
            />
            <FeatureCard
              icon={Video}
              title="Dynamic Video Marketing"
              description="Cutting-edge text-to-video AI transforming marketing campaigns with automated content generation for both short-form and long-form advertising."
              image="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 K2 AI Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;