import React from "react";
import {
  Wrench,
  Clock,
  Users,
  Globe,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Settings,
} from "lucide-react";

const Services = () => {
  return (
    <div className="text-black">

      {/* Our Services */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-gray-700 to-orange-600 bg-clip-text text-transparent">
            Our Services
          </h2>

          <p className="text-black/70 max-w-2xl mx-auto text-lg">
            Comprehensive ATM solutions tailored to your bank's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg">
            <Wrench className="mb-6 text-orange-500" size={48} />

            <h3 className="text-2xl font-bold mb-4">
              ATM Installation
            </h3>

            <p className="text-black/70 mb-6 leading-relaxed">
              Complete installation of new ATMs including site preparation,
              hardware setup, and configuration.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Site survey & preparation</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Hardware installation</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Software configuration</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Testing & commissioning</span>
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg">
            <Settings className="mb-6 text-orange-500" size={48} />

            <h3 className="text-2xl font-bold mb-4">
              Preventive Maintenance
            </h3>

            <p className="text-black/70 mb-6 leading-relaxed">
              Scheduled maintenance to prevent breakdowns and extend ATM lifecycle.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Monthly inspections</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Cleaning & calibration</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Parts replacement</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Performance optimization</span>
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg">
            <Clock className="mb-6 text-orange-500" size={48} />

            <h3 className="text-2xl font-bold mb-4">
              Emergency Repair
            </h3>

            <p className="text-black/70 mb-6 leading-relaxed">
              24/7 emergency response for ATM breakdowns and technical issues.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>2-hour response time</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>On-site diagnosis</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Rapid repair</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Spare parts available</span>
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg">
            <Users className="mb-6 text-orange-500" size={48} />

            <h3 className="text-2xl font-bold mb-4">
              Spare Parts Supply
            </h3>

            <p className="text-black/70 mb-6 leading-relaxed">
              Genuine spare parts for all ATM models, delivered to your location.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Original manufacturer parts</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Fast delivery</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Inventory management</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Warranty included</span>
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg">
            <Globe className="mb-6 text-orange-500" size={48} />

            <h3 className="text-2xl font-bold mb-4">
              Remote Support
            </h3>

            <p className="text-black/70 mb-6 leading-relaxed">
              Quick remote diagnostics and troubleshooting to minimize downtime.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>24/7 helpdesk</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Remote diagnostics</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Software fixes</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Technical consultation</span>
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-lg">
            <Cpu className="mb-6 text-orange-500" size={48} />

            <h3 className="text-2xl font-bold mb-4">
              GRG Banking Support
            </h3>

            <p className="text-black/70 mb-6 leading-relaxed">
              Expert support for GRG Banking Systems, the leading ATM manufacturer.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>GRG certified engineers</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Firmware updates</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>System integration</span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={20} />
                <span>Technical training</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Why Choose Tech24 */}
      <section className="max-w-7xl mx-auto px-6 pb-32 text-center">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Tech24?
          </h2>

          <p className="text-black/70 text-lg">
            We deliver excellence through expertise, reliability, and commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg">
            <Users className="mx-auto mb-6 text-orange-500" size={52} />

            <h3 className="text-2xl font-bold mb-3">
              Certified Experts
            </h3>

            <p className="text-black/70">
              GRG certified technicians with years of experience.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg">
            <Clock className="mx-auto mb-6 text-orange-500" size={52} />

            <h3 className="text-2xl font-bold mb-3">
              Fast Response
            </h3>

            <p className="text-black/70">
              2-hour emergency response guarantee.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg">
            <ShieldCheck className="mx-auto mb-6 text-orange-500" size={52} />

            <h3 className="text-2xl font-bold mb-3">
              Genuine Parts
            </h3>

            <p className="text-black/70">
              100% original spare parts with warranty.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;