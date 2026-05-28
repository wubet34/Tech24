import React from "react";
import {
  Building2,
  Clock,
  ShieldCheck,
  TrendingDown,
  Zap,
  DollarSign,
} from "lucide-react";

const Banks = () => {
  const banks = [
    {
      name: "Awash Bank",
      years: "3+ years",
    },
    {
      name: "Dashen Bank",
      years: "2+ years",
    },
    {
      name: "Ahadu Bank",
      years: "1+ years",
    },
    {
      name: "Amhara Bank",
      years: "2+ years",
    },
    {
      name: "Zemen Bank",
      years: "1+ years",
    },
    {
      name: "Oromia Bank",
      years: "2+ years",
    },
  ];

  const benefits = [
    {
      title: "Reduced Downtime",
      description: "Up to 70% reduction in ATM downtime",
      icon: TrendingDown,
    },
    {
      title: "Fast Response",
      description: "Average 2-hour response time for emergencies",
      icon: Zap,
    },
    {
      title: "Cost Effective",
      description: "Save up to 40% on maintenance costs",
      icon: DollarSign,
    },
    {
      title: "99.9% Uptime",
      description: "Guaranteed ATM availability",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="text-black">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <p className="uppercase tracking-[0.3em] text-orange-500 mb-4">
          For Banks
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-gray-700 to-orange-600 bg-clip-text text-transparent">
          Partner with Ethiopia's Leading ATM Service Provider
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-black/70">
          Reliable ATM installation, maintenance, and support services
          trusted by banks across Ethiopia.
        </p>

      </section>

      {/* Trusted Banks */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-4">
            Trusted By Leading Banks
          </h2>

          <p className="text-black/70 text-lg">
            6+ banks across Ethiopia rely on Tech24 for their ATM needs
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {banks.map((bank, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-3xl
                p-8
                text-center
                hover:scale-105
                transition
                duration-300
              "
            >

              <Building2
                className="mx-auto mb-5 text-orange-500"
                size={50}
              />

              <h3 className="text-2xl font-bold mb-3">
                {bank.name}
              </h3>

              <p className="text-black/70">
                {bank.years}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-4">
            Why Partner With Us?
          </h2>

          <p className="text-black/70 text-lg">
            Benefits you get when you choose Tech24
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-3xl
                  p-8
                  hover:scale-[1.02]
                  transition
                  duration-300
                "
              >

                <Icon
                  className="mb-5 text-orange-500"
                  size={48}
                />

                <h3 className="text-2xl font-bold mb-3">
                  {benefit.title}
                </h3>

                <p className="text-black/70 leading-relaxed">
                  {benefit.description}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div
          className="
            rounded-4xl
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
            p-12
            text-center
            shadow-xl
          "
        >

          <Clock
            className="mx-auto mb-6 text-orange-500"
            size={60}
          />

          <h2 className="text-4xl font-bold mb-5">
            Ready to Get Started?
          </h2>

          <p className="text-black/70 text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote.
            Let Tech24 keep your ATM network running smoothly.
          </p>

          <button
            className="
              rounded-full
              bg-linear-to-r
              from-gray-500
              to-orange-600
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
            "
          >
            Request Quote
          </button>

        </div>

      </section>

    </div>
  );
};

export default Banks;