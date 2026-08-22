import React, { useState } from 'react';
import { 
  Video, Eye, Volume2, VolumeX, Moon, Sun, Maximize2, 
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ZoomIn, ZoomOut,
  Cpu, Sparkles, Radio, RefreshCw
} from 'lucide-react';

export default function LiveCameraDemo() {
  const [activeCamId, setActiveCamId] = useState('entrance');
  const [nightVision, setNightVision] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [aiBounding, setAiBounding] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);

  const cameras = [
    {
      id: 'entrance',
      name: 'North Gate 4K',
      location: 'Main Entry Way',
      resolution: '3840 x 2160 (4K)',
      fps: 30,
      bitrate: '16.4 Mbps',
      aiTarget: 'Person Detected',
      confidence: '99.1%',
      bgGradient: 'from-slate-800 to-indigo-950',
    },
    {
      id: 'perimeter',
      name: 'South Fence Thermal',
      location: 'Perimeter Boundary',
      resolution: '2560 x 1440 (2.5K)',
      fps: 60,
      bitrate: '12.8 Mbps',
      aiTarget: 'Vehicle (Sedan)',
      confidence: '96.5%',
      bgGradient: 'from-zinc-900 to-slate-900',
    },
    {
      id: 'server',
      name: 'Server Vault AI',
      location: 'Data Center B',
      resolution: '1920 x 1080 (FHD)',
      fps: 60,
      bitrate: '8.2 Mbps',
      aiTarget: 'Access Verified',
      confidence: '100%',
      bgGradient: 'from-neutral-900 to-cyan-950',
    },
    {
      id: 'lobby',
      name: 'Executive Lobby',
      location: 'Floor 3 East',
      resolution: '3840 x 2160 (4K)',
      fps: 30,
      bitrate: '14.1 Mbps',
      aiTarget: 'No Anomalies',
      confidence: '99.8%',
      bgGradient: 'from-[#1e1b4b] to-[#0f172a]',
    },
  ];

  const currentCam = cameras.find(c => c.id === activeCamId) || cameras[0];

  const handleZoom = (delta) => {
    setZoomLevel(prev => Math.min(Math.max(prev + delta, 100), 250));
  };

  return (
    <section id="live-demo" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neo-inset-sm text-xs font-bold text-[#6C63FF] uppercase tracking-wider">
            <Radio className="w-4 h-4 text-[#6C63FF] animate-pulse" />
            Interactive Hardware Console
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#3D4852] tracking-tight">
            Test the Neumorphic Control Interface
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            Interact with live simulated streams, trigger PTZ mechanical pan-tilt controls, switch AI analytics filters, and experience soft tactile responsiveness.
          </p>
        </div>

        {/* Console Container Card */}
        <div className="rounded-[32px] neo-extruded p-6 sm:p-10 border border-transparent">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 Columns: Live Video Feed Display */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Video Monitor Frame */}
              <div className={`relative rounded-3xl neo-inset-deep p-4 overflow-hidden min-h-[340px] sm:min-h-[440px] flex flex-col justify-between transition-colors duration-500 bg-gradient-to-br ${currentCam.bgGradient}`}>
                
                {/* Night vision green filter overlay */}
                {nightVision && (
                  <div className="absolute inset-0 bg-emerald-500/20 mix-blend-color-dodge pointer-events-none"></div>
                )}

                {/* Scanlines Effect */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                {/* Top Status Bar Over Stream */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-[#E0E5EC]/90 backdrop-blur px-3.5 py-1.5 rounded-2xl neo-extruded-sm text-xs font-bold text-[#3D4852]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38B2AC] animate-ping"></span>
                    {currentCam.name}
                  </div>

                  <div className="flex items-center gap-2">
                    {nightVision && (
                      <span className="px-3 py-1 rounded-xl bg-emerald-950/80 text-emerald-400 text-[11px] font-mono font-bold border border-emerald-500/30">
                        INFRARED ACTIVE
                      </span>
                    )}
                    <div className="bg-[#E0E5EC]/90 backdrop-blur px-3.5 py-1.5 rounded-2xl neo-inset-sm text-xs font-mono font-bold text-[#3D4852]">
                      ZOOM: {zoomLevel}%
                    </div>
                  </div>
                </div>

                {/* Center Animated Stream Visual */}
                <div 
                  className="relative z-10 my-auto flex flex-col items-center justify-center transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel / 100})` }}
                >
                  {aiBounding && (
                    <div className="relative p-8 rounded-2xl border-2 border-[#6C63FF] bg-[#6C63FF]/10 backdrop-blur-xs flex flex-col items-center gap-3 animate-pulse">
                      <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[#6C63FF] text-white text-[10px] font-mono font-bold rounded">
                        AI TARGET ID: #9824
                      </div>
                      <div className="w-14 h-14 rounded-2xl neo-extruded flex items-center justify-center text-[#6C63FF]">
                        <Cpu className="w-7 h-7 animate-spin" style={{ animationDuration: '8s' }} />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-bold text-white block">{currentCam.aiTarget}</span>
                        <span className="text-xs text-[#38B2AC] font-mono font-semibold">Confidence: {currentCam.confidence}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Interactive Video Toolbar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-[#E0E5EC]/90 backdrop-blur p-2.5 rounded-2xl neo-extruded-sm">
                  
                  {/* Quick Toggles */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setNightVision(!nightVision)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all focus-neo ${
                        nightVision ? 'neo-inset text-emerald-600' : 'neo-btn text-[#3D4852]'
                      }`}
                    >
                      {nightVision ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                      IR Mode
                    </button>

                    <button
                      onClick={() => setAiBounding(!aiBounding)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all focus-neo ${
                        aiBounding ? 'neo-inset text-[#6C63FF]' : 'neo-btn text-[#3D4852]'
                      }`}
                    >
                      <Sparkles className="w-4 h-4" />
                      AI Overlays
                    </button>

                    <button
                      onClick={() => setAudioEnabled(!audioEnabled)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all focus-neo ${
                        audioEnabled ? 'neo-inset text-[#38B2AC]' : 'neo-btn text-[#3D4852]'
                      }`}
                    >
                      {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                      Audio
                    </button>
                  </div>

                  {/* Telemetry Stats */}
                  <div className="hidden sm:flex items-center gap-4 text-xs font-mono font-semibold text-[#6B7280]">
                    <span>{currentCam.resolution}</span>
                    <span>{currentCam.fps} FPS</span>
                    <span>{currentCam.bitrate}</span>
                  </div>
                </div>

              </div>

              {/* Camera Selection Switcher Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {cameras.map((cam) => (
                  <button
                    key={cam.id}
                    onClick={() => setActiveCamId(cam.id)}
                    className={`p-3.5 rounded-2xl text-left transition-all focus-neo ${
                      activeCamId === cam.id
                        ? 'neo-inset-deep ring-2 ring-[#6C63FF]/30'
                        : 'neo-extruded hover:neo-extruded-hover'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#3D4852] truncate">{cam.name}</span>
                      <span className={`w-2 h-2 rounded-full ${activeCamId === cam.id ? 'bg-[#6C63FF]' : 'bg-[#38B2AC]'}`}></span>
                    </div>
                    <span className="text-[10px] text-[#6B7280] block truncate">{cam.location}</span>
                  </button>
                ))}
              </div>

            </div>

            {/* Right 4 Columns: PTZ Controls & Hardware Controls */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Mechanical PTZ Joystick Container */}
              <div className="p-6 rounded-3xl neo-extruded flex flex-col items-center">
                <h3 className="font-display font-bold text-sm text-[#3D4852] mb-1">PTZ Camera Gimbal</h3>
                <p className="text-xs text-[#6B7280] mb-6">Tactile Directional Control</p>

                {/* Cross Directional Controller */}
                <div className="relative w-44 h-44 rounded-full neo-inset-deep p-3 flex items-center justify-center mb-6">
                  
                  {/* Up */}
                  <button 
                    className="absolute top-2 w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] focus-neo"
                    title="Pan Up"
                  >
                    <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  {/* Left */}
                  <button 
                    className="absolute left-2 w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] focus-neo"
                    title="Pan Left"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  {/* Center Reset */}
                  <button 
                    onClick={() => setZoomLevel(100)}
                    className="w-12 h-12 rounded-2xl neo-btn-primary flex items-center justify-center text-white focus-neo shadow-md"
                    title="Reset Center"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>

                  {/* Right */}
                  <button 
                    className="absolute right-2 w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] focus-neo"
                    title="Pan Right"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  {/* Down */}
                  <button 
                    className="absolute bottom-2 w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] focus-neo"
                    title="Pan Down"
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </button>

                </div>

                {/* Optical Zoom Buttons */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <button
                    onClick={() => handleZoom(25)}
                    className="py-3 rounded-2xl neo-btn text-xs font-bold text-[#3D4852] hover:text-[#6C63FF] flex items-center justify-center gap-2 focus-neo"
                  >
                    <ZoomIn className="w-4 h-4 text-[#6C63FF]" />
                    Zoom In
                  </button>
                  <button
                    onClick={() => handleZoom(-25)}
                    className="py-3 rounded-2xl neo-btn text-xs font-bold text-[#3D4852] hover:text-[#6C63FF] flex items-center justify-center gap-2 focus-neo"
                  >
                    <ZoomOut className="w-4 h-4 text-[#6C63FF]" />
                    Zoom Out
                  </button>
                </div>
              </div>

              {/* Hardware Telemetry Card */}
              <div className="p-6 rounded-3xl neo-extruded space-y-4">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#6B7280]">Stream Telemetry</h4>
                
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-[#A3B1C6]/20">
                    <span className="text-[#6B7280]">Codec Profile</span>
                    <span className="font-mono font-bold text-[#3D4852]">H.265 / HEVC Main 10</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#A3B1C6]/20">
                    <span className="text-[#6B7280]">Latency (RTT)</span>
                    <span className="font-mono font-bold text-[#38B2AC]">14 ms</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#A3B1C6]/20">
                    <span className="text-[#6B7280]">Encryption</span>
                    <span className="font-mono font-bold text-[#6C63FF]">AES-256 GCM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#6B7280]">AI Edge Engine</span>
                    <span className="font-mono font-bold text-[#3D4852]">TensorRT v10.2</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
