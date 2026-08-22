import React, { useState } from 'react';
import { Camera, Send, Github, Twitter, Linkedin, CheckCircle2, Download } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const serverDownloadUrl = 'https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale/raw/main/server-dist/CAMS-Server-Setup.exe';
  const clientDownloadUrl = 'https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale/raw/main/client-dist/CAMS-Client-Setup.exe';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="pt-20 pb-12 bg-[#E0E5EC] border-t border-[#A3B1C6]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section Box */}
        <div className="rounded-[32px] neo-extruded p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#3D4852]">
                Stay Ahead of Security Vector Threats
              </h3>
              <p className="text-sm text-[#6B7280]">
                Receive security advisories, camera firmware updates, and Neumorphic UI releases directly in your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your security engineer email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl neo-inset-deep text-sm text-[#3D4852] placeholder-[#A0AEC0] focus-neo transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 neo-btn-primary text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 focus-neo shrink-0"
                >
                  {subscribed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl neo-inset-deep flex items-center justify-center text-[#6C63FF]">
                <Camera className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-[#3D4852]">
                Cams<span className="text-[#6C63FF]">Hub</span>
              </span>
            </a>
            <p className="text-xs text-[#6B7280] max-w-sm leading-relaxed">
              Tactile, zero-latency multi-camera management hub powered by Neumorphism design principles and edge AI.
            </p>
            
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full neo-inset-sm text-[11px] font-bold text-[#38B2AC]">
              <span className="w-2 h-2 rounded-full bg-[#38B2AC] animate-pulse"></span>
              All Systems Operational • v2.5.3 Active
            </div>
          </div>

          {/* Nav Column 1: Downloads */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#3D4852] mb-4">Direct Downloads</h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280]">
              <li>
                <a href={serverDownloadUrl} download className="hover:text-[#6C63FF] transition-colors flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-[#6C63FF]" />
                  CAMS Server Setup (~15MB)
                </a>
              </li>
              <li>
                <a href={clientDownloadUrl} download className="hover:text-[#6C63FF] transition-colors flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-[#38B2AC]" />
                  CAMS Client Setup (~64MB)
                </a>
              </li>
              <li><a href="#downloads" className="hover:text-[#6C63FF] transition-colors">Download Center</a></li>
              <li><a href="https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale" target="_blank" rel="noreferrer" className="hover:text-[#6C63FF] transition-colors">GitHub Repository</a></li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#3D4852] mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280]">
              <li><a href="#" className="hover:text-[#6C63FF] transition-colors">REST & RTSP API</a></li>
              <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Clean Installation Guide</a></li>
              <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Camera Matrix Docs</a></li>
              <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Security Whitepaper</a></li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#3D4852] mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280]">
              <li><a href="#" className="hover:text-[#6C63FF] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Contact Engineering</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#A3B1C6]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} CamsHub Inc. All rights reserved. Vercel Ready.
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl neo-btn flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] focus-neo" title="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl neo-btn flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] focus-neo" title="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl neo-btn flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] focus-neo" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
