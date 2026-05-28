import React from "react";
import {
  Building2,
  Users,
  Clock,
  ShieldCheck,
  Target,
  Eye,
  Gem,
  UserCircle2,
  Cpu,
  Wrench,
  Headphones,
} from "lucide-react";

const About = () => {
  return (
    <div className="text-black">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <p className="uppercase tracking-[0.3em] text-orange-500 mb-4">
          About Tech24
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-gray-700 to-orange-600 bg-clip-text text-transparent">
          Ethiopia's Leading ATM Service Provider
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-black/70">
          Trusted ATM installation, maintenance, and GRG Banking System
          support services for banks across Ethiopia.
        </p>

      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-black/70 leading-relaxed mb-6">
              Tech24 was founded with a simple mission: to provide
              banks and financial institutions with reliable, fast,
              and professional ATM maintenance services.
            </p>

            <p className="text-black/70 leading-relaxed">
              Today, we proudly serve 6+ major banks across Ethiopia,
              maintaining over 1000 ATMs with a 99.9% uptime guarantee.
              Our commitment to excellence has made us the trusted partner
              for banks looking to reduce downtime and improve customer
              satisfaction.
            </p>

          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center">
              <Building2 className="mx-auto mb-4 text-orange-500" size={42} />
              <h3 className="text-3xl font-bold text-orange-500">
                6+
              </h3>
              <p className="text-black/70 mt-2">
                Banks
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center">
              <Users className="mx-auto mb-4 text-orange-500" size={42} />
              <h3 className="text-3xl font-bold text-orange-500">
                50+
              </h3>
              <p className="text-black/70 mt-2">
                Technicians
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center">
              <Clock className="mx-auto mb-4 text-orange-500" size={42} />
              <h3 className="text-3xl font-bold text-orange-500">
                24/7
              </h3>
              <p className="text-black/70 mt-2">
                Support
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center">
              <ShieldCheck className="mx-auto mb-4 text-orange-500" size={42} />
              <h3 className="text-3xl font-bold text-orange-500">
                99.9%
              </h3>
              <p className="text-black/70 mt-2">
                Uptime
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Mission Vision Values */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

            <Target className="mx-auto mb-5 text-orange-500" size={50} />

            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-black/70 leading-relaxed">
              To provide reliable, fast, and professional ATM services
              that keep businesses running smoothly.
            </p>

          </div>

          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

            <Eye className="mx-auto mb-5 text-orange-500" size={50} />

            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-black/70 leading-relaxed">
              To become the leading ATM service provider in East Africa,
              trusted by every bank and financial institution.
            </p>

          </div>

          {/* Values */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

            <Gem className="mx-auto mb-5 text-orange-500" size={50} />

            <h3 className="text-2xl font-bold mb-4">
              Our Values
            </h3>

            <p className="text-black/70 leading-relaxed">
              Integrity, Excellence, Customer First, Innovation,
              and Teamwork.
            </p>

          </div>

        </div>

      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-4">
            Leadership Team
          </h2>

          <p className="text-black/70 text-lg">
            Meet the experts behind Tech24's success
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

            <UserCircle2 className="mx-auto mb-5 text-orange-500" size={70} />

            <h3 className="text-xl font-bold">
              Wubet Alebachew
            </h3>

            <p className="text-orange-500 font-medium mt-2">
              Founder & CEO
            </p>

            <p className="text-black/70 mt-4">
              Expert in GRG Banking Systems
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

            <Cpu className="mx-auto mb-5 text-orange-500" size={70} />

            <h3 className="text-xl font-bold">
              Technical Director
            </h3>

            <p className="text-orange-500 font-medium mt-2">
              Head of Engineering
            </p>

            <p className="text-black/70 mt-4">
              Expert in GRG Banking Systems
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

            <Wrench className="mx-auto mb-5 text-orange-500" size={70} />

            <h3 className="text-xl font-bold">
              Operations Manager
            </h3>

            <p className="text-orange-500 font-medium mt-2">
              Field Operations
            </p>

            <p className="text-black/70 mt-4">
              Expert in GRG Banking Systems
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

            <Headphones className="mx-auto mb-5 text-orange-500" size={70} />

            <h3 className="text-xl font-bold">
              Support Lead
            </h3>

            <p className="text-orange-500 font-medium mt-2">
              Customer Support
            </p>

            <p className="text-black/70 mt-4">
              Expert in GRG Banking Systems
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;