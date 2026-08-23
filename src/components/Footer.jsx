import React from 'react';
import { BookOpen, Camera, Download, Github, Monitor, ShieldCheck } from 'lucide-react';
import { CAMS_VERSION, CLIENT_DOWNLOAD_URL, REPOSITORY_URL, SERVER_DOWNLOAD_URL } from '../releaseConfig.js';

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 bg-[#E0E5EC] border-t border-[#A3B1C6]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] neo-extruded p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#3D4852]">
                Classroom control without the guesswork
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                CAMS gives teachers a secure view of connected lab workstations, timed sessions, restrictions, and remote controls on the local network.
              </p>
            </div>
            <div className="lg:col-span-5 p-5 rounded-2xl neo-inset space-y-3 text-xs text-[#3D4852]">
              <div className="flex items-center gap-2 font-bold text-[#38B2AC]">
                <ShieldCheck className="w-4 h-4" /> HTTPS / TLS transport
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Monitor className="w-4 h-4 text-[#6C63FF]" /> Adaptive screen stream, approximately 12 FPS by default
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Camera className="w-4 h-4 text-[#6C63FF]" /> UDP discovery on port 5001, SignalR on HTTPS port 5000
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl neo-inset-deep flex items-center justify-center text-[#6C63FF]">
                <Camera className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-[#3D4852]">
                CAMS<span className="text-[#6C63FF]">Hub</span>
              </span>
            </a>
            <p className="text-xs text-[#6B7280] max-w-sm leading-relaxed">
              Classroom Automated Monitoring System for local computer laboratories. Release v{CAMS_VERSION}.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full neo-inset-sm text-[11px] font-bold text-[#38B2AC]">
              <span className="w-2 h-2 rounded-full bg-[#38B2AC]"></span>
              Release assets available
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#3D4852] mb-4">Downloads</h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280]">
              <li><a href={SERVER_DOWNLOAD_URL} className="hover:text-[#6C63FF] transition-colors flex items-center gap-1.5"><Download className="w-3.5 h-3.5 text-[#6C63FF]" /> CAMS Server Setup</a></li>
              <li><a href={CLIENT_DOWNLOAD_URL} className="hover:text-[#6C63FF] transition-colors flex items-center gap-1.5"><Download className="w-3.5 h-3.5 text-[#38B2AC]" /> CAMS Client Setup</a></li>
              <li><a href="#downloads" className="hover:text-[#6C63FF] transition-colors">Download Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#3D4852] mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280]">
              <li><a href="#guide" className="hover:text-[#6C63FF] transition-colors flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> Deployment guide</a></li>
              <li><a href="#features" className="hover:text-[#6C63FF] transition-colors">System features</a></li>
              <li><a href={REPOSITORY_URL} target="_blank" rel="noreferrer" className="hover:text-[#6C63FF] transition-colors flex items-center gap-1.5"><Github className="w-3.5 h-3.5" /> Source repository</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#A3B1C6]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>© {new Date().getFullYear()} CAMS. Distributed under the MIT License.</div>
          <a href={REPOSITORY_URL} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl neo-btn flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] focus-neo" title="GitHub">
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
