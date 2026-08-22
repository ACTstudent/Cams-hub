import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What hardware is required to deploy CamsHub?',
      a: 'CamsHub runs on any modern 64-bit environment including x86 Linux servers, Windows PC, macOS, Docker containers, or lightweight Raspberry Pi 5 gateways. It leverages hardware acceleration (NVENC, QuickSync, Apple Silicon Metal) for seamless multi-channel 4K decoding.'
    },
    {
      q: 'Does CamsHub require monthly cloud subscriptions for local monitoring?',
      a: 'No! Local camera monitoring, PTZ controls, zero-latency WebRTC streams, and local edge AI detection are 100% license-free and subscription-free on your local network.'
    },
    {
      q: 'How does CamsHub achieve sub-20ms live stream latency?',
      a: 'CamsHub utilizes an internal ultra-fast WebRTC / RTSP proxy gateway that eliminates transcoding bottlenecks. Video packets pass directly between your camera NVR and your browser or app via direct Peer-to-Peer local sockets.'
    },
    {
      q: 'Can I connect ONVIF cameras from brands like Hikvision, Dahua, Axis, and Reolink?',
      a: 'Yes. CamsHub features built-in WS-Discovery and mDNS auto-scanning to automatically detect Profile S, Profile T, and Profile G ONVIF equipment, populating stream credentials and PTZ profiles automatically.'
    },
    {
      q: 'Is my video footage private and encrypted?',
      a: 'Absolutely. Streams are encrypted using TLS 1.3 and SRTP (Secure Real-Time Transport Protocol). Zero video telemetry or raw frames ever leave your local deployment unless you explicitly configure encrypted cloud backups.'
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative bg-[#E0E5EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neo-inset-sm text-xs font-bold text-[#6C63FF] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#6C63FF]" />
            Knowledge Base
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#3D4852] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6B7280] text-base">
            Everything you need to know about setting up CamsHub security architecture.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl transition-all duration-300 ${
                  isOpen ? 'neo-inset-deep p-6 sm:p-8' : 'neo-extruded hover:neo-extruded-hover p-6 sm:p-8'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left focus-neo rounded-2xl"
                >
                  <span className="font-display font-extrabold text-lg text-[#3D4852]">
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-[#6C63FF] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 neo-inset' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-[#A3B1C6]/20 animate-in fade-in duration-300">
                    <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
