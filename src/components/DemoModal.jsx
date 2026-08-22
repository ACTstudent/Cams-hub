import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    { title: '1. Instant Device Discovery', desc: 'CamsHub auto-detects 14,000+ camera models via ONVIF Profile S and RTSP.' },
    { title: '2. Local Edge AI Configuration', desc: 'Deploy neural network models directly to your local GPU or NVR in 1 click.' },
    { title: '3. Multi-Tenant Stream Sharing', desc: 'Generate encrypted WebRTC time-limited stream tokens for staff & security teams.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl rounded-[32px] neo-extruded p-6 sm:p-8 bg-[#E0E5EC] max-h-[90vh] overflow-y-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#A3B1C6]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl neo-inset-deep flex items-center justify-center text-[#6C63FF]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-[#3D4852]">CamsHub Product Walkthrough</h3>
              <p className="text-xs text-[#6B7280]">Interactive Video Demo • 4K HDR</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] focus-neo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative rounded-3xl neo-inset-deep p-4 min-h-[260px] sm:min-h-[360px] flex flex-col justify-between overflow-hidden bg-slate-950 text-white mb-6">
          
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-xl bg-slate-900/90 text-xs font-mono font-bold text-[#38B2AC] border border-slate-800">
              DEMO MODE • STREAMING H.265+
            </span>
            <span className="text-xs font-mono text-slate-400">4K @ 60 FPS</span>
          </div>

          {/* Simulated Video Content Screen */}
          <div className="my-auto flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="w-20 h-20 rounded-full neo-extruded flex items-center justify-center text-[#6C63FF] cursor-pointer hover:scale-110 transition-transform" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause className="w-8 h-8 fill-[#6C63FF]" /> : <Play className="w-8 h-8 fill-[#6C63FF] translate-x-0.5" />}
            </div>
            <div>
              <h4 className="font-display font-extrabold text-xl text-white">{steps[activeStep].title}</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">{steps[activeStep].desc}</p>
            </div>
          </div>

          {/* Player Toolbar */}
          <div className="flex items-center justify-between bg-slate-900/90 backdrop-blur p-3 rounded-2xl border border-slate-800 text-xs">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-[#6C63FF]">
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button onClick={() => setIsMuted(!isMuted)} className="hover:text-[#6C63FF]">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-slate-400">01:42 / 03:15</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold">LIVE P2P</span>
            </div>
          </div>

        </div>

        {/* Step Selector Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left transition-all focus-neo ${
                activeStep === idx
                  ? 'neo-inset-deep text-[#6C63FF]'
                  : 'neo-extruded hover:neo-extruded-hover text-[#3D4852]'
              }`}
            >
              <span className="text-xs font-bold block mb-1">{step.title}</span>
              <span className="text-[11px] text-[#6B7280] line-clamp-2">{step.desc}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
