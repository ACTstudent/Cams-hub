import React, { useState } from 'react';
import { Download, Server, Monitor, ShieldCheck, Key, Terminal, Check, Copy, CheckCircle2, Play, Cpu, ArrowRight } from 'lucide-react';

export default function StepByStepGuide() {
  const [copiedCmd, setCopiedCmd] = useState(false);

  const serverDownloadUrl = 'https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale/raw/main/server-dist/CAMS-Server-Setup.exe';
  const clientDownloadUrl = 'https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale/raw/main/client-dist/CAMS-Client-Setup.exe';
  const buildCmd = 'powershell -NoProfile -ExecutionPolicy Bypass -File build-everything.ps1';

  const copyBuildCmd = () => {
    navigator.clipboard.writeText(buildCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 3000);
  };

  return (
    <section id="guide" className="py-20 md:py-32 relative bg-[#E0E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neo-inset-sm text-xs font-bold text-[#6C63FF] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#6C63FF]" />
            Deployment Guide • Release v2.5.3
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#3D4852] tracking-tight">
            Step-by-Step Installation & Deployment
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            Follow this guide to deploy CAMS across your teacher control server and student computer laboratory workstations.
          </p>
        </div>

        {/* Step Cards Stack */}
        <div className="space-y-10">
          
          {/* STEP 1: SERVER SETUP */}
          <div className="rounded-[32px] neo-extruded p-8 sm:p-12 relative border border-transparent">
            
            {/* Step Number Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#A3B1C6]/30">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl neo-inset-deep flex items-center justify-center text-[#6C63FF] font-display font-extrabold text-2xl shrink-0">
                  01
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#6C63FF] uppercase tracking-widest block">Primary Control Unit</span>
                  <h3 className="font-display font-extrabold text-2xl text-[#3D4852]">
                    Server Setup (Teacher / Lab Control PC)
                  </h3>
                </div>
              </div>

              <a
                href={serverDownloadUrl}
                download="CAMS-Server-Setup.exe"
                className="px-6 py-3.5 neo-btn-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 focus-neo shrink-0"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                Download Server Setup (~15 MB)
              </a>
            </div>

            {/* Instruction Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-xl neo-inset-sm flex items-center justify-center text-[#38B2AC] font-bold text-xs shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-sm text-[#3D4852] font-medium leading-relaxed">
                      Download and execute <code className="px-2 py-1 rounded-lg neo-inset-sm font-mono text-xs text-[#6C63FF] font-bold">CAMS-Server-Setup.exe</code> on the teacher or lab administrator PC.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-xl neo-inset-sm flex items-center justify-center text-[#38B2AC] font-bold text-xs shrink-0 mt-0.5">
                      2
                    </div>
                    <p className="text-sm text-[#3D4852] font-medium leading-relaxed">
                      The installer executes a <strong>Clean Installation (`cleaninstall`)</strong>, extracting server files to <code className="px-2 py-1 rounded-lg neo-inset-sm font-mono text-xs text-[#3D4852]">%LOCALAPPDATA%\CAMS Server</code> and automatically configuring Windows Firewall ports <strong>5000</strong> and <strong>5001</strong>.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-xl neo-inset-sm flex items-center justify-center text-[#38B2AC] font-bold text-xs shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-sm text-[#3D4852] font-medium leading-relaxed">
                      Launch the CAMS Web Portal at <code className="px-2 py-1 rounded-lg neo-inset-sm font-mono text-xs text-[#38B2AC] font-bold">http://localhost:5000</code> or your server's local LAN IP address.
                    </p>
                  </div>
                </div>

                {/* Default Credentials Table */}
                <div className="p-6 rounded-2xl neo-inset space-y-3">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#6C63FF] flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    Default Seed Login Credentials
                  </h4>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-[#A3B1C6]/30 text-[#6B7280]">
                          <th className="pb-2 font-bold uppercase">Role</th>
                          <th className="pb-2 font-bold uppercase">Username</th>
                          <th className="pb-2 font-bold uppercase">Password</th>
                          <th className="pb-2 font-bold uppercase">Access Level</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#A3B1C6]/20 font-medium text-[#3D4852]">
                        <tr>
                          <td className="py-2.5 font-bold text-[#6C63FF]">Admin</td>
                          <td className="py-2.5 font-mono">admin</td>
                          <td className="py-2.5 font-mono">admin123</td>
                          <td className="py-2.5 text-[#6B7280]">Full system control, accounts, classes, LAN rules</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold text-[#38B2AC]">Teacher</td>
                          <td className="py-2.5 font-mono">teacher1</td>
                          <td className="py-2.5 font-mono">teacher123</td>
                          <td className="py-2.5 text-[#6B7280]">Live grid monitoring, session lock, student records</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold text-[#3D4852]">Student</td>
                          <td className="py-2.5 font-mono">student1</td>
                          <td className="py-2.5 font-mono">student123</td>
                          <td className="py-2.5 text-[#6B7280]">Session status & workstation alert center</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl neo-inset-deep space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280] block">Server Verification Checklist</span>
                <ul className="space-y-3 text-xs text-[#3D4852] font-medium">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38B2AC] shrink-0" />
                    ASP.NET Core Kestrel HTTP Server on Port 5000
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38B2AC] shrink-0" />
                    SignalR WebSocket Hub Listener Active
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38B2AC] shrink-0" />
                    SQLite Database initialized with Dark Emerald schema
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38B2AC] shrink-0" />
                    UDP Server Discovery Broadcast Beacon running
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* STEP 2: STUDENT CLIENT SETUP */}
          <div className="rounded-[32px] neo-extruded p-8 sm:p-12 relative border border-transparent">
            
            {/* Step Number Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#A3B1C6]/30">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl neo-inset-deep flex items-center justify-center text-[#38B2AC] font-display font-extrabold text-2xl shrink-0">
                  02
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#38B2AC] uppercase tracking-widest block">Student Lab Agent</span>
                  <h3 className="font-display font-extrabold text-2xl text-[#3D4852]">
                    Student Client Setup (Lab Workstations)
                  </h3>
                </div>
              </div>

              <a
                href={clientDownloadUrl}
                download="CAMS-Client-Setup.exe"
                className="px-6 py-3.5 neo-btn text-xs font-bold text-[#3D4852] hover:text-[#6C63FF] uppercase tracking-wider flex items-center justify-center gap-2.5 focus-neo shrink-0"
              >
                <Download className="w-4 h-4 text-[#38B2AC] stroke-[2.5]" />
                Download Client Setup (~64 MB)
              </a>
            </div>

            {/* Instruction Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-xl neo-inset-sm flex items-center justify-center text-[#38B2AC] font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="text-sm text-[#3D4852] font-medium leading-relaxed">
                    Download and run <code className="px-2 py-1 rounded-lg neo-inset-sm font-mono text-xs text-[#38B2AC] font-bold">CAMS-Client-Setup.exe</code> on each student workstation PC in the lab.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-xl neo-inset-sm flex items-center justify-center text-[#38B2AC] font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="text-sm text-[#3D4852] font-medium leading-relaxed">
                    The WinForms agent automatically listens for the UDP broadcast beacon sent by the CAMS Server and handshakes over WebSockets. <strong>Zero manual IP configuration required.</strong>
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-xl neo-inset-sm flex items-center justify-center text-[#38B2AC] font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="text-sm text-[#3D4852] font-medium leading-relaxed">
                    Workstation streams appear instantly on the Teacher Monitoring Grid for remote locking, screen viewing, and timed 45-minute lab session tracking.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl neo-inset-deep space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280] block">Agent Operations</span>
                <ul className="space-y-2.5 text-xs text-[#3D4852] font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38B2AC]" />
                    Silent Windows startup service execution
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38B2AC]" />
                    High-efficiency SignalR frame streaming
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38B2AC]" />
                    Application infraction guard & idle detection
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* STEP 3: BUILDING FROM SOURCE */}
          <div className="rounded-[32px] neo-extruded p-8 sm:p-12 relative border border-transparent">
            
            {/* Step Number Badge */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#A3B1C6]/30">
              <div className="w-14 h-14 rounded-2xl neo-inset-deep flex items-center justify-center text-[#6C63FF] font-display font-extrabold text-2xl shrink-0">
                03
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#6C63FF] uppercase tracking-widest block">Developer & Custom Builds</span>
                <h3 className="font-display font-extrabold text-2xl text-[#3D4852]">
                  Building From Source (PowerShell Pipeline)
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Prerequisites: Install <strong>.NET 8 SDK</strong> and <strong>Inno Setup 6</strong>. Execute the automated build, test, and packaging script in PowerShell:
              </p>

              {/* Command Code Box */}
              <div className="p-4 rounded-2xl neo-inset-deep flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#3D4852]">
                <code className="text-[#6C63FF] font-bold overflow-x-auto py-1">
                  {buildCmd}
                </code>
                <button
                  onClick={copyBuildCmd}
                  className="px-4 py-2.5 neo-btn text-xs font-bold text-[#3D4852] flex items-center gap-2 focus-neo shrink-0"
                >
                  {copiedCmd ? <CheckCircle2 className="w-4 h-4 text-[#38B2AC]" /> : <Copy className="w-4 h-4 text-[#6C63FF]" />}
                  {copiedCmd ? 'Copied Command!' : 'Copy Script Command'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-2xl neo-inset text-center">
                  <span className="text-[#6B7280] block mb-1">1. Test Suite</span>
                  <span className="font-bold text-[#38B2AC]">129/129 xUnit Passed</span>
                </div>
                <div className="p-4 rounded-2xl neo-inset text-center">
                  <span className="text-[#6B7280] block mb-1">2. Target Framework</span>
                  <span className="font-bold text-[#6C63FF]">.NET 8.0</span>
                </div>
                <div className="p-4 rounded-2xl neo-inset text-center">
                  <span className="text-[#6B7280] block mb-1">3. Installer Engine</span>
                  <span className="font-bold text-[#3D4852]">Inno Setup 6</span>
                </div>
                <div className="p-4 rounded-2xl neo-inset text-center">
                  <span className="text-[#6B7280] block mb-1">4. Output Artifacts</span>
                  <span className="font-bold text-[#38B2AC]">server-dist & client-dist</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
