import React from 'react';
import { 
  Zap, ShieldAlert, Users, HardDrive, BellRing, Smartphone, 
  Layers, CheckCircle
} from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: Zap,
      title: 'Zero-Latency H.265 Streaming',
      description: 'Ultra-optimized WebRTC and RTSP proxy engine achieving sub-20ms latency across 4K streams with 60% bandwidth reduction.',
      badge: 'WebRTC Gateway',
      color: 'text-[#6C63FF]',
    },
    {
      icon: ShieldAlert,
      title: 'Local Edge AI Detection',
      description: 'Run deep neural networks on your local NVR or GPU gateway to identify people, vehicles, faces, and pets with zero cloud leakage.',
      badge: 'Privacy First',
      color: 'text-[#38B2AC]',
    },
    {
      icon: Users,
      title: 'Multi-Tenant Permissioning',
      description: 'Grant granular access to security teams, administrators, or clients with temporary time-locked stream tokens and audit logs.',
      badge: 'RBAC Engine',
      color: 'text-[#6C63FF]',
    },
    {
      icon: HardDrive,
      title: 'Hybrid Edge & Cloud Mirroring',
      description: 'Automatic failover storage between local SSD array and AES-256 encrypted zero-knowledge cloud back-ups.',
      badge: 'Failover Storage',
      color: 'text-[#38B2AC]',
    },
    {
      icon: BellRing,
      title: 'Instant Push & AI Alerts',
      description: 'Receive rich push notifications on Slack, Telegram, Webhooks, and Mobile with instant snapshot GIFs and threat confidence ratings.',
      badge: '< 1s Alert Delay',
      color: 'text-[#6C63FF]',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Neumorphic Apps',
      description: 'Native desktop app for Windows, macOS & Linux alongside sleek iOS & Android apps designed with soft tactile controls.',
      badge: 'Native Build',
      color: 'text-[#38B2AC]',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neo-inset-sm text-xs font-bold text-[#6C63FF] uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#6C63FF]" />
            Deep Tactile Architecture
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#3D4852] tracking-tight">
            Engineered for Extreme Performance & Tactical Depth
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            Every component is molded directly into the Neumorphic surface to combine industrial utility with tactile visual elegance.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group rounded-[32px] neo-extruded p-8 flex flex-col justify-between transition-all duration-300 hover:neo-extruded-hover hover:-translate-y-1.5 focus-within:neo-inset-sm"
              >
                <div>
                  {/* Top Row: Icon inside Deep Inset Well + Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl neo-inset-deep flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Icon className={`w-8 h-8 stroke-[2] ${feat.color}`} />
                    </div>
                    <span className="px-3 py-1 rounded-full neo-inset-sm text-[11px] font-bold text-[#6B7280]">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-display font-extrabold text-xl text-[#3D4852] mb-3 group-hover:text-[#6C63FF] transition-colors">
                    {feat.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-[#6B7280] text-sm font-normal leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Card Micro Footer */}
                <div className="mt-8 pt-4 border-t border-[#A3B1C6]/20 flex items-center gap-2 text-xs font-semibold text-[#6C63FF]">
                  <CheckCircle className="w-4 h-4 text-[#38B2AC]" />
                  Fully Integrated Module
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
