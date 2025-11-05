import React from 'react';
import { Bot, Zap, BarChart3, LineChart, Repeat, Plug, Globe, Send, Twitter, Instagram, MessageCircle, Link as LinkIcon, PlayCircle } from 'lucide-react';

const SectionTitle = ({ emoji, title, subtitle, id }) => (
  <div id={id} className="text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{emoji} {title}</h2>
    {subtitle && (
      <p className="mt-3 text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const CommunityCard = ({ href, Icon, label }) => (
  <a href={href} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex items-center gap-3">
    <div className="shrink-0 w-10 h-10 inline-flex items-center justify-center rounded-lg bg-[#0b2a3a] text-[#3498DB]">
      <Icon size={20} />
    </div>
    <span className="text-white font-medium">{label}</span>
  </a>
);

const FeatureCard = ({ Icon, title, description }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 h-full">
    <div className="w-11 h-11 inline-flex items-center justify-center rounded-lg bg-[#0b2a3a] text-[#3498DB] mb-4">
      <Icon size={22} />
    </div>
    <h3 className="text-white font-semibold text-lg">{title}</h3>
    <p className="text-gray-300 mt-2 text-sm leading-relaxed">{description}</p>
  </div>
);

const StatusDot = ({ online }) => (
  <span className={`inline-block w-2.5 h-2.5 rounded-full mr-2 ${online ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
);

const MainSections = () => {
  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Community */}
        <div id="community" className="space-y-8">
          <SectionTitle
            emoji="🌐"
            title="Join Our Community"
            subtitle="Connect with us across multiple platforms. Get exclusive signals, latest news, and trading insights."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CommunityCard href="#vip" Icon={Send} label="Telegram VIP" />
            <CommunityCard href="#news" Icon={MessageCircle} label="Telegram News" />
            <CommunityCard href="https://twitter.com" Icon={Twitter} label="Twitter (X)" />
            <CommunityCard href="https://instagram.com" Icon={Instagram} label="Instagram" />
            <CommunityCard href="https://tiktok.com" Icon={PlayCircle} label="TikTok" />
            <CommunityCard href="https://linktr.ee" Icon={LinkIcon} label="LinkTree" />
          </div>
        </div>

        {/* Features */}
        <div id="features" className="space-y-8">
          <SectionTitle
            emoji="🚀"
            title="Platform Features"
            subtitle="Built with cutting-edge technology for professional traders and investors"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard Icon={Bot} title="AI-Powered Algorithms" description="Advanced machine learning models powered by GPT-4." />
            <FeatureCard Icon={Zap} title="Real-Time Monitoring" description="WebSocket price tracking across Binance, Bybit & MEXC." />
            <FeatureCard Icon={BarChart3} title="Advanced Position Tracking" description="Multi-entry and multi-target support with intelligent lifecycle management." />
            <FeatureCard Icon={LineChart} title="News Sentiment Analysis" description="Integrated AI-powered news analysis for market context." />
            <FeatureCard Icon={Repeat} title="Multi-Platform Distribution" description="Automated signal distribution via Telegram, Twitter, and Instagram." />
            <FeatureCard Icon={Plug} title="Professional RESTful API" description="Comprehensive API with full documentation and webhooks for developers." />
          </div>
        </div>

        {/* Status */}
        <div id="status" className="space-y-8">
          <SectionTitle emoji="🔧" title="System Status" subtitle="Real-time monitoring of all platform components." />
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <li className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
              <span className="text-gray-300">Database</span>
              <span className="inline-flex items-center text-emerald-400 font-medium"><StatusDot online />Online</span>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
              <span className="text-gray-300">Signal Distribution</span>
              <span className="inline-flex items-center text-emerald-400 font-medium"><StatusDot online />Online</span>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
              <span className="text-gray-300">Sociazeo Platform</span>
              <span className="inline-flex items-center text-rose-400 font-medium"><StatusDot online={false} />Offline</span>
            </li>
          </ul>
        </div>

        {/* API anchor */}
        <div id="api" className="text-center">
          <a href="#" className="inline-flex items-center justify-center rounded-md border border-[#3498DB] text-[#3498DB] px-6 py-3 text-base font-semibold hover:bg-[#0b2a3a] transition">
            View API Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSections;
