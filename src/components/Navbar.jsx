import React, { useState } from 'react';
import { Camera, Menu, X, Download, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serverDownloadUrl = 'https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale/raw/main/server-dist/CAMS-Server-Setup.exe';

  return (
    <header className="sticky top-0 z-40 bg-[#E0E5EC]/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section with Deep Inset Icon Well */}
          <a href="#" className="flex items-center gap-3 group focus-neo rounded-2xl p-1">
            <div className="w-12 h-12 rounded-2xl neo-inset-deep flex items-center justify-center text-[#6C63FF] transition-transform duration-300 group-hover:scale-105">
              <Camera className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-tight text-[#3D4852]">
                  CAMS<span className="text-[#6C63FF]">Hub</span>
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38B2AC] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38B2AC]"></span>
                </span>
              </div>
              <span className="text-[10px] font-medium text-[#6B7280] tracking-widest uppercase -mt-1">
                Release v2.5.3
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { name: 'Installer Downloads', href: '#downloads' },
              { name: 'Step-by-Step Guide', href: '#guide' },
              { name: 'System Features', href: '#features' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#3D4852] hover:text-[#6C63FF] transition-all duration-200 rounded-xl focus-neo hover:neo-inset-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#downloads"
              className="px-5 py-2.5 neo-btn-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2 focus-neo"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              Download Server Setup
            </a>
            <a
              href="#guide"
              className="px-4 py-2.5 neo-btn text-xs font-bold uppercase tracking-wider text-[#3D4852] hover:text-[#6C63FF] flex items-center gap-2 focus-neo"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#6C63FF]" />
              Setup Guide
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 rounded-2xl neo-btn flex items-center justify-center text-[#3D4852] focus-neo"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-2 mb-4 rounded-3xl neo-extruded animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2">
              {[
                { name: 'Installer Downloads', href: '#downloads' },
                { name: 'Step-by-Step Guide', href: '#guide' },
                { name: 'System Features', href: '#features' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-base font-medium text-[#3D4852] hover:neo-inset-sm transition-all focus-neo"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#A3B1C6]/30 flex flex-col gap-3">
                <a
                  href={serverDownloadUrl}
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 neo-btn-primary text-sm font-bold flex items-center justify-center gap-2 focus-neo"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  Download Server Setup (.exe)
                </a>
                <a
                  href="#guide"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 neo-btn text-sm font-bold text-[#3D4852] flex items-center justify-center gap-2 focus-neo"
                >
                  <BookOpen className="w-4 h-4 text-[#6C63FF]" />
                  Setup Guide
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
