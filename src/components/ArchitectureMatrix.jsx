import React, { useState } from 'react';
import { Server, Check } from 'lucide-react';

export default function ArchitectureMatrix() {
  const [selectedBrand, setSelectedBrand] = useState('onvif');

  const protocols = [
    {
      id: 'onvif',
      name: 'ONVIF Profile S/T/G',
      category: 'Open Protocol Standard',
      discovery: 'Zero-Conf mDNS / WS-Discovery',
      maxRes: '8K Ultra HD (4320p)',
      crypto: 'TLS 1.3 / SRTP',
      latency: '15ms (Direct LAN)',
      compatibility: '100% Compatible Across 14,000+ Camera Models',
      features: ['PTZ Continuous & Preset Controls', 'Two-Way Audio Streaming', 'Event Alarm Relay Triggering', 'Multi-Stream Sub/Main Encoding'],
    },
    {
      id: 'rtsp',
      name: 'RTSP / RTMP / HLS',
      category: 'Legacy & Custom Streams',
      discovery: 'URI Direct Connection',
      maxRes: '4K Ultra HD (2160p)',
      crypto: 'RTSPS / SSL Encrypted',
      latency: '40ms (WebRTC Bridge)',
      compatibility: 'Universal Compatibility with Custom IP Encoders & Drones',
      features: ['H.264 & H.265 / HEVC Passthrough', 'Low-Latency Chunked Transfer', 'Custom Authentication Headers', 'Auto Re-connection Handshake'],
    },
    {
      id: 'hikvision',
      name: 'Hikvision ISAPI / NVR',
      category: 'Native Manufacturer Protocol',
      discovery: 'SADP Protocol Auto-Bind',
      maxRes: '4K ColorVu / AcuSense',
      crypto: 'Digest Authentication / HTTPS',
      latency: '18ms',
      compatibility: 'Direct SDK Integration for NVRs, DVRs & IP Cameras',
      features: ['AcuSense Target Filtering', 'ANPR License Plate Capture', 'Thermal Heatmap Stream Analysis', 'NVR Channel Mapping'],
    },
    {
      id: 'axis',
      name: 'Axis VAPIX & ARTPEC',
      category: 'Enterprise Grade Hardware',
      discovery: 'Bonjour / UPnP Discovery',
      maxRes: '4K Lightfinder / Forensic WDR',
      crypto: 'Axis Edge Vault / IEEE 802.1X',
      latency: '12ms',
      compatibility: 'Native ARTPEC-7/8 Hardware Accelerator Support',
      features: ['Object Analytics Bounding Data', 'Audio Analytics Triggering', 'Zipstream Dynamic Bitrate Compression', 'Edge Storage SD Sync'],
    },
    {
      id: 'ubiquiti',
      name: 'UniFi Protect Bridge',
      category: 'Smart Cloud-Edge Ecosystem',
      discovery: 'UniFi Console Auto-Pair',
      maxRes: '4K G4 Pro / G5 PTZ',
      crypto: 'UniFi TLS Handshake',
      latency: '22ms',
      compatibility: 'Direct API Integration for UDM-Pro, UNVR & UniFi Cameras',
      features: ['UniFi Smart Detections Sync', 'Multi-NVR Storage Balancing', 'UniFi Chime Relay Integration', 'Instant Snapshot Event Stream'],
    },
  ];

  const current = protocols.find(p => p.id === selectedBrand) || protocols[0];

  return (
    <section id="architecture" className="py-20 md:py-32 relative bg-[#E0E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neo-inset-sm text-xs font-bold text-[#38B2AC] uppercase tracking-wider">
            <Server className="w-4 h-4 text-[#38B2AC]" />
            Universal Hardware Support
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#3D4852] tracking-tight">
            Plug & Play with Any Camera System
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            No proprietary lock-in. CamsHub auto-discovers and ingests streams from ONVIF standard equipment, RTSP proxies, or native hardware SDKs.
          </p>
        </div>

        {/* Protocol Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {protocols.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedBrand(p.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all focus-neo ${
                selectedBrand === p.id
                  ? 'neo-inset-deep text-[#6C63FF]'
                  : 'neo-extruded hover:neo-extruded-hover text-[#3D4852]'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Detailed Architecture Spec Card */}
        <div className="rounded-[32px] neo-extruded p-8 sm:p-12 border border-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs Summary */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#6C63FF] uppercase tracking-widest block mb-1">
                  {current.category}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#3D4852]">
                  {current.name}
                </h3>
              </div>

              <div className="p-4 rounded-2xl neo-inset-sm space-y-1">
                <span className="text-xs font-bold text-[#38B2AC] block">Compatibility Status</span>
                <p className="text-sm font-medium text-[#3D4852]">{current.compatibility}</p>
              </div>

              {/* Grid of Telemetry Parameters */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl neo-inset">
                  <span className="text-[10px] font-bold uppercase text-[#6B7280] block mb-1">Auto-Discovery</span>
                  <span className="text-xs font-bold text-[#3D4852]">{current.discovery}</span>
                </div>
                <div className="p-4 rounded-2xl neo-inset">
                  <span className="text-[10px] font-bold uppercase text-[#6B7280] block mb-1">Max Resolution</span>
                  <span className="text-xs font-bold text-[#3D4852]">{current.maxRes}</span>
                </div>
                <div className="p-4 rounded-2xl neo-inset">
                  <span className="text-[10px] font-bold uppercase text-[#6B7280] block mb-1">Encryption Layer</span>
                  <span className="text-xs font-bold text-[#6C63FF]">{current.crypto}</span>
                </div>
                <div className="p-4 rounded-2xl neo-inset">
                  <span className="text-[10px] font-bold uppercase text-[#6B7280] block mb-1">LAN Latency</span>
                  <span className="text-xs font-bold text-[#38B2AC]">{current.latency}</span>
                </div>
              </div>
            </div>

            {/* Right Protocol Features List */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-display font-bold text-base text-[#3D4852] mb-4">Supported Pipeline Capabilities</h4>
              <div className="space-y-3">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl neo-extruded-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl neo-inset-deep flex items-center justify-center text-[#38B2AC] shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-[#3D4852]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
