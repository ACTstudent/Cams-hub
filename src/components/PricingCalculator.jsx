import React, { useState } from 'react';
import { Check, ArrowRight, Server, Zap } from 'lucide-react';

export default function PricingCalculator() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [cameraCount, setCameraCount] = useState(8);

  const baseRatePerCam = isAnnual ? 4.80 : 6.00;
  const computedMonthlyTotal = Math.round(cameraCount * baseRatePerCam);

  const plans = [
    {
      name: 'Starter Hub',
      desc: 'Ideal for small offices, residential security, and retail storefronts.',
      camLimit: '1 - 4 Cameras',
      priceMonthly: 19,
      priceAnnual: 15,
      features: [
        'Up to 4 Live 4K Streams',
        '7 Days Encrypted Edge Storage',
        'Basic AI Motion Analytics',
        'Mobile & Web Apps',
        'Standard Email Support',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      desc: 'For multi-site commercial spaces, warehouses, and corporate facilities.',
      camLimit: '5 - 32 Cameras',
      priceMonthly: 49,
      priceAnnual: 39,
      badge: 'Most Popular',
      features: [
        'Up to 32 Live 4K Streams',
        '30 Days Encrypted Edge & Cloud',
        'Advanced Edge AI (Vehicle, Person, ANPR)',
        'PTZ Joystick Mechanical Controls',
        'Multi-User RBAC & Audit Logs',
        '24/7 Priority Support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise Matrix',
      desc: 'Custom deployments for industrial parks, smart cities, and airport hubs.',
      camLimit: '33 - 500+ Cameras',
      priceMonthly: 129,
      priceAnnual: 99,
      features: [
        'Unlimited Stream Ingestion',
        'Custom Cloud Retention Policy',
        'Dedicated Local Edge Server GPU Sync',
        'Custom Webhooks & REST API Integrations',
        'SLA Guaranteed 99.99% Uptime',
        'Dedicated Security Account Manager',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neo-inset-sm text-xs font-bold text-[#6C63FF] uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#6C63FF]" />
            Transparent Scale Pricing
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#3D4852] tracking-tight">
            Flexible Plans Tailored to Your Camera Footprint
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            No hidden gateway fees or camera license penalties. Pay straightforward monthly rates with full feature access.
          </p>
        </div>

        {/* Dynamic Interactive Slider Card */}
        <div className="max-w-4xl mx-auto mb-16 p-8 sm:p-10 rounded-[32px] neo-extruded space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#A3B1C6]/30 pb-6">
            <div>
              <h3 className="font-display font-bold text-lg text-[#3D4852]">Interactive Cost Estimator</h3>
              <p className="text-xs text-[#6B7280]">Adjust your active camera count to estimate your monthly cost.</p>
            </div>

            {/* Monthly / Annual Toggle Switch */}
            <div className="flex items-center gap-3 p-1.5 rounded-2xl neo-inset">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all focus-neo ${
                  !isAnnual ? 'neo-extruded-sm text-[#6C63FF]' : 'text-[#6B7280]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all focus-neo flex items-center gap-1.5 ${
                  isAnnual ? 'neo-inset-sm text-[#38B2AC]' : 'text-[#6B7280]'
                }`}
              >
                Annual
                <span className="px-2 py-0.5 rounded-full bg-[#38B2AC] text-white text-[10px] uppercase font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Camera Slider Control */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase text-[#6B7280] tracking-wider">Number of Connected Cameras</span>
              <span className="font-display font-extrabold text-2xl text-[#6C63FF]">{cameraCount} Cameras</span>
            </div>

            {/* Tactile Range Slider Input */}
            <div className="relative p-2 rounded-2xl neo-inset-deep flex items-center">
              <input
                type="range"
                min="1"
                max="64"
                value={cameraCount}
                onChange={(e) => setCameraCount(parseInt(e.target.value))}
                className="w-full h-3 bg-transparent appearance-none cursor-pointer accent-[#6C63FF] focus:outline-none"
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-[#6B7280]">
              <span>1 Cam</span>
              <span>16 Cams</span>
              <span>32 Cams</span>
              <span>64+ Cams</span>
            </div>
          </div>

          {/* Computed Calculation Display */}
          <div className="p-6 rounded-2xl neo-inset flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl neo-extruded flex items-center justify-center text-[#38B2AC]">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#3D4852]">Estimated Dedicated Plan</span>
                <p className="text-xs text-[#6B7280]">
                  {cameraCount <= 4 ? 'Starter Hub Tier' : cameraCount <= 32 ? 'Professional Tier (Recommended)' : 'Enterprise Matrix Tier'}
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-xs text-[#6B7280] block">Estimated Total</span>
              <span className="font-display font-extrabold text-3xl text-[#3D4852]">
                ${computedMonthlyTotal}
                <span className="text-sm font-normal text-[#6B7280]"> / mo</span>
              </span>
            </div>
          </div>

        </div>

        {/* 3 Neumorphic Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? 'neo-extruded ring-2 ring-[#6C63FF]/50 hover:neo-extruded-hover scale-102 sm:-translate-y-2'
                  : 'neo-extruded hover:neo-extruded-hover'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full neo-btn-primary text-xs font-extrabold uppercase tracking-wider text-white shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#3D4852] mb-2">{plan.name}</h3>
                <p className="text-xs text-[#6B7280] min-h-[36px] mb-6">{plan.desc}</p>

                <div className="mb-6 pb-6 border-b border-[#A3B1C6]/20">
                  <span className="font-display font-extrabold text-4xl text-[#3D4852]">
                    ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-xs text-[#6B7280]"> / month per node</span>
                  <span className="text-[11px] font-bold text-[#38B2AC] block mt-1">{plan.camLimit}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs font-medium text-[#3D4852]">
                      <div className="w-5 h-5 rounded-lg neo-inset-sm flex items-center justify-center text-[#38B2AC] shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#pricing"
                className={`w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 focus-neo ${
                  plan.highlighted
                    ? 'neo-btn-primary'
                    : 'neo-btn text-[#3D4852] hover:text-[#6C63FF]'
                }`}
              >
                Choose {plan.name}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
