import React from 'react';
import { Shield, Users, Monitor, Clock, HardDrive, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { CAMS_VERSION } from '../releaseConfig.js';

export default function CamsOverview() {
  const features = [
    {
      icon: Lock,
      title: 'Multi-Role Login Authentication',
      description: 'Unified entry point (/Account/Login) supporting Admin, Teacher, and Student roles with session state auditing.',
      badge: 'Role Routing',
      color: 'text-[#6C63FF]',
    },
    {
      icon: Monitor,
      title: 'Real-Time Screen Monitoring Grid',
       description: 'Authenticated HTTPS SignalR screen monitoring with remote workstation lock, logout, shutdown, and teacher broadcast.',
      badge: 'SignalR WebSockets',
      color: 'text-[#38B2AC]',
    },
    {
      icon: Users,
      title: 'Class Roster & Student Management',
      description: 'Manage class sections (e.g. 2026-2027), teacher advisers, and student rosters with complete CRUD relationships.',
      badge: 'EF Core & SQLite',
      color: 'text-[#6C63FF]',
    },
    {
      icon: Clock,
      title: 'Timed 45-Min Laboratory Sessions',
       description: 'Timed lab session countdowns, attendance logs, idle tracking, and application restriction policies.',
      badge: 'Automated Attendance',
      color: 'text-[#38B2AC]',
    },
    {
      icon: HardDrive,
      title: 'Clean Installation & Crash Guard',
      description: 'Clean install engine purges old DLL binaries and static assets before extracting new builds; working directory guard prevents launch crashes.',
      badge: 'Clean Install Engine',
      color: 'text-[#6C63FF]',
    },
    {
      icon: Shield,
      title: 'Dark Emerald UI System',
      description: 'High-contrast Dark Emerald UI palette (#0B3C26 / #10B981) tailored for classroom management accessibility.',
      badge: 'Figma Aligned',
      color: 'text-[#38B2AC]',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neo-inset-sm text-xs font-bold text-[#6C63FF] uppercase tracking-wider">
            <Shield className="w-4 h-4 text-[#6C63FF]" />
            Core Laboratory Management Features
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#3D4852] tracking-tight">
            Built for Real-Time Classroom Control
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            Replaces traditional paper logbooks with automated account tracking, real-time screen streaming, and lab workstation policy enforcement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group rounded-[32px] neo-extruded p-8 flex flex-col justify-between transition-all duration-300 hover:neo-extruded-hover"
              >
                <div>
                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl neo-inset-deep flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Icon className={`w-7 h-7 stroke-[2.5] ${feat.color}`} />
                    </div>
                    <span className="px-3 py-1 rounded-full neo-inset-sm text-[11px] font-bold text-[#6B7280]">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#3D4852] mb-3 group-hover:text-[#6C63FF] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#A3B1C6]/20 flex items-center gap-2 text-xs font-semibold text-[#6C63FF]">
                  <CheckCircle2 className="w-4 h-4 text-[#38B2AC]" />
                   Included in v{CAMS_VERSION} Release
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
