import React, { useState } from 'react';
import { Download, Monitor, Server, Check, Copy, ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';
import { CAMS_VERSION, CLIENT_DOWNLOAD_URL, REPOSITORY_URL, SERVER_DOWNLOAD_URL } from '../releaseConfig.js';

export default function DownloadCenter() {
  const [copiedLink, setCopiedLink] = useState(false);

  const copyRepo = () => {
    navigator.clipboard.writeText('git clone https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale.git');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <section id="downloads" className="py-20 md:py-32 relative bg-[#E0E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neo-inset-sm text-xs font-bold text-[#6C63FF] uppercase tracking-wider">
            <Download className="w-4 h-4 text-[#6C63FF] animate-bounce" />
             Official Release v{CAMS_VERSION} • Versioned Binaries
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#3D4852] tracking-tight">
            Download CAMS Installer Executables
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            Deploy pre-compiled desktop setup binaries directly onto your Teacher Control Server and Student Lab Workstations.
          </p>
        </div>

        {/* 2 Main Installer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-16">
          
          {/* Card 1: Server Setup Installer */}
          <div className="rounded-[32px] neo-extruded p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:neo-extruded-hover border border-transparent">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl neo-inset-deep flex items-center justify-center text-[#6C63FF]">
                  <Server className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full neo-inset-sm text-[11px] font-mono font-bold text-[#38B2AC]">
                    ~15 MB
                  </span>
                  <span className="px-3 py-1 rounded-full neo-inset-sm text-[11px] font-bold text-[#6C63FF]">
                    Teacher / Admin
                  </span>
                </div>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-[#3D4852] mb-2">
                CAMS Server Setup
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                Teacher & Laboratory Control PC Installer. Includes the Dark Emerald Web Portal, SignalR WebSocket Hub, SQLite database engine, and Clean Installation feature.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 mb-8">
                {[
                  'Clean Installation (`cleaninstall`) auto-purge',
                  'Dark Emerald Web Dashboard & Live Monitor Grid',
                   'Automatic Windows Firewall rules for HTTPS 5000 and UDP 5001',
                  'Workstation Lock, Remote Shutdown & Timed Lab Sessions',
                  'Multi-role login (Admin, Teacher, Student)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-medium text-[#3D4852]">
                    <div className="w-5 h-5 rounded-lg neo-inset-sm flex items-center justify-center text-[#38B2AC] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Download Button */}
            <div className="pt-6 border-t border-[#A3B1C6]/30 space-y-3">
              <a
                 href={SERVER_DOWNLOAD_URL}
                download="CAMS-Server-Setup.exe"
                className="w-full py-4 neo-btn-primary text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3 focus-neo shadow-md"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                Download CAMS-Server-Setup.exe
              </a>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                <span>Target: Windows 10/11 x64</span>
                 <span>Release asset: v{CAMS_VERSION}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Student Client Installer */}
          <div className="rounded-[32px] neo-extruded p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:neo-extruded-hover border border-transparent">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl neo-inset-deep flex items-center justify-center text-[#38B2AC]">
                  <Monitor className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full neo-inset-sm text-[11px] font-mono font-bold text-[#38B2AC]">
                    ~64 MB
                  </span>
                  <span className="px-3 py-1 rounded-full neo-inset-sm text-[11px] font-bold text-[#38B2AC]">
                    Student Workstation
                  </span>
                </div>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-[#3D4852] mb-2">
                CAMS Student Client
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                Student Workstation Agent Installer (.NET 8 WinForms). Runs silently in background, auto-discovers server via UDP broadcast, and streams real-time screen feeds.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 mb-8">
                {[
                  'Automatic UDP Broadcast LAN server auto-discovery',
                   'Adaptive authenticated SignalR screen streaming (~12 FPS default)',
                  'Clean Installation (`cleaninstall`) binary update support',
                  'Application tracking & idle infraction alert popups',
                  'Self-contained .NET 8 WinForms desktop executable',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-medium text-[#3D4852]">
                    <div className="w-5 h-5 rounded-lg neo-inset-sm flex items-center justify-center text-[#38B2AC] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Download Button */}
            <div className="pt-6 border-t border-[#A3B1C6]/30 space-y-3">
              <a
                 href={CLIENT_DOWNLOAD_URL}
                download="CAMS-Client-Setup.exe"
                className="w-full py-4 neo-btn text-sm font-bold text-[#3D4852] hover:text-[#6C63FF] uppercase tracking-wider flex items-center justify-center gap-3 focus-neo"
              >
                <Download className="w-4 h-4 text-[#38B2AC] stroke-[2.5]" />
                Download CAMS-Client-Setup.exe
              </a>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                <span>Target: Student PC (Win 10/11)</span>
                 <span>Release asset: v{CAMS_VERSION}</span>
              </div>
            </div>
          </div>

        </div>

        {/* GitHub Repository Quick Clone & Source Access Bar */}
        <div className="rounded-3xl neo-inset-deep p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl neo-extruded flex items-center justify-center text-[#6C63FF]">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#3D4852]">GitHub Open-Source Repository</h4>
               <p className="text-xs text-[#6B7280]">ACTstudent/RemoteAcessMonitoringSoftware4sale • Release v{CAMS_VERSION} (MIT License)</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={copyRepo}
              className="px-4 py-2.5 neo-btn text-xs font-bold text-[#3D4852] flex items-center gap-2 focus-neo"
            >
              {copiedLink ? <CheckCircle2 className="w-4 h-4 text-[#38B2AC]" /> : <Copy className="w-4 h-4 text-[#6C63FF]" />}
              {copiedLink ? 'Cloned Command Copied!' : 'Copy Clone URL'}
            </button>
            <a
               href={REPOSITORY_URL}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 neo-btn-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2 focus-neo"
            >
              View Repository
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
