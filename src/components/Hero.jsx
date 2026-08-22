import React, { useState } from 'react';
import { 
  Download, ShieldCheck, Monitor, Cpu, 
  CheckCircle2, Lock, Eye, Radio, Sparkles, BookOpen
} from 'lucide-react';

export default function Hero() {
  const [activeCam, setActiveCam] = useState('PC-Lab-01');

  const workstations = [
    { id: 'PC-Lab-01', user: 'Student 1', status: 'Active 45m', fps: '30 FPS' },
    { id: 'PC-Lab-02', user: 'Student 2', status: 'Active 45m', fps: '30 FPS' },
    { id: 'PC-Lab-03', user: 'Student 3', status: 'Locked', fps: '0 FPS' },
  ];

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Abstract Background Concentric Tactile Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full neo-inset opacity-40 pointer-events-none flex items-center justify-center">
        <div className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full neo-extruded opacity-60 flex items-center justify-center">
          <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full neo-inset-deep opacity-80 animate-pulse-subtle"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Headlines & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-8">
            
            {/* Soft UI Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full neo-inset-sm text-xs font-bold text-[#6C63FF] tracking-wide uppercase">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38B2AC] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38B2AC]"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#38B2AC]" />
              Official CAMS v2.5.3 Installer Portal
            </div>

            {/* Main Display Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#3D4852] tracking-tight leading-[1.1]">
              CAMS — Computer Account & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8B84FF]">Lab Monitoring System</span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed max-w-xl">
              LAN-based laboratory management, timed 45-minute lab sessions, real-time SignalR screen monitoring, and centralized workstation control.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#downloads"
                className="px-8 py-4 neo-btn-primary text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3 focus-neo shadow-lg"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                Download Executables
              </a>

              <a
                href="#guide"
                className="px-8 py-4 neo-btn text-sm font-bold text-[#3D4852] hover:text-[#6C63FF] uppercase tracking-wider flex items-center justify-center gap-3 focus-neo"
              >
                <div className="w-7 h-7 rounded-xl neo-inset-deep flex items-center justify-center text-[#6C63FF]">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                Step-by-Step Guide
              </a>
            </div>

            {/* Trust Micro Indicators */}
            <div className="pt-4 border-t border-[#A3B1C6]/30 flex flex-wrap items-center gap-6 text-xs text-[#6B7280] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38B2AC]" />
                Tracked Executables (~15 MB / ~64 MB)
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#38B2AC]" />
                AES-256 Encrypted
              </div>
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#38B2AC]" />
                UDP Auto-Discovery
              </div>
            </div>

          </div>

          {/* Right Column: Neumorphic CAMS Monitor Grid Card Visual */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-[32px] neo-extruded border border-transparent group transition-all duration-500 hover:neo-extruded-hover">
              
              {/* Top Control Bar of Card */}
              <div className="flex items-center justify-between pb-6 border-b border-[#A3B1C6]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl neo-inset-deep flex items-center justify-center text-[#6C63FF]">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#3D4852]">CAMS Teacher Grid Console</h3>
                    <p className="text-xs text-[#6B7280]">Lab Session Active • 45 Min Session</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full neo-inset-sm text-[11px] font-bold text-[#38B2AC] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#38B2AC] animate-pulse"></span>
                    SIGNALR ACTIVE
                  </span>
                </div>
              </div>

              {/* Central Screen Stream Mockup */}
              <div className="my-6 relative rounded-2xl neo-inset-deep p-4 overflow-hidden min-h-[260px] sm:min-h-[300px] flex flex-col justify-between">
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-[#E0E5EC]/90 backdrop-blur px-3 py-1.5 rounded-xl neo-extruded-sm text-xs font-bold text-[#3D4852]">
                    <Eye className="w-3.5 h-3.5 text-[#6C63FF]" />
                    {activeCam}
                  </div>
                  <div className="bg-[#E0E5EC]/90 backdrop-blur px-3 py-1.5 rounded-xl neo-inset-sm text-[10px] font-mono font-bold text-[#38B2AC]">
                    SESSION: 34:12 REMAINING
                  </div>
                </div>

                {/* Center Visual Mockup */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6">
                  <div className="relative p-6 rounded-2xl border-2 border-dashed border-[#38B2AC]/50 bg-[#38B2AC]/5 backdrop-blur-sm flex flex-col items-center gap-2 animate-float-slow">
                    <div className="w-12 h-12 rounded-2xl neo-extruded flex items-center justify-center text-[#38B2AC]">
                      <Monitor className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-bold text-[#3D4852] block">Student Screen Broadcast</span>
                      <span className="text-[10px] text-[#38B2AC] font-semibold">P2P SignalR Stream • 30 FPS</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Workstation Switcher */}
                <div className="relative z-10 flex items-center justify-between bg-[#E0E5EC]/90 backdrop-blur p-2 rounded-2xl neo-extruded-sm">
                  <div className="flex items-center gap-1">
                    {workstations.map((ws) => (
                      <button
                        key={ws.id}
                        onClick={() => setActiveCam(ws.id)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all focus-neo ${
                          activeCam === ws.id
                            ? 'neo-inset text-[#6C63FF]'
                            : 'text-[#6B7280] hover:text-[#3D4852]'
                        }`}
                      >
                        {ws.id}
                      </button>
                    ))}
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-2 text-[10px] font-mono text-[#6B7280]">
                    <span>UDP Discovery</span>
                    <span>•</span>
                    <span>Port 5000</span>
                  </div>
                </div>
              </div>

              {/* Quick Stat Wells Below Visual */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl neo-inset flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold uppercase text-[#6B7280] tracking-wider mb-1">Server Setup</span>
                  <span className="font-display font-extrabold text-sm text-[#6C63FF]">~15 MB</span>
                </div>
                <div className="p-3 rounded-2xl neo-inset flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold uppercase text-[#6B7280] tracking-wider mb-1">Client Setup</span>
                  <span className="font-display font-extrabold text-sm text-[#38B2AC]">~64 MB</span>
                </div>
                <div className="p-3 rounded-2xl neo-inset flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold uppercase text-[#6B7280] tracking-wider mb-1">xUnit Tests</span>
                  <span className="font-display font-extrabold text-sm text-[#3D4852]">129/129 Passed</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
