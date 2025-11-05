import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative bg-[#0b0b0b] text-white">
      <div className="relative min-h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[92vh]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Signalyze: AI-Powered Cryptocurrency Trading Signal Platform
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-300">
            Professional trading signals powered by advanced AI algorithms. Real-time monitoring, intelligent position management, and news sentiment analysis.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#vip" className="inline-flex items-center justify-center rounded-md bg-[#3498DB] px-6 py-3 text-base font-semibold text-white shadow hover:brightness-110 transition">
              📱 Join VIP Channel
            </a>
            <a href="#api" className="inline-flex items-center justify-center rounded-md border border-[#3498DB] text-[#3498DB] px-6 py-3 text-base font-semibold hover:bg-[#0b2a3a] hover:border-[#56b1f0] transition">
              📖 API Documentation
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full bg-black/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">591</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Signals Generated</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">3,184</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">News Analyzed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">1</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Active Trades</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">2022</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Since</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
