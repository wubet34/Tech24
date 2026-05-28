import {
  Wrench,
  Clock,
  Users,
  Globe,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen text-black">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">

        <p className="uppercase tracking-[0.3em] text-black/60 mb-6">
          Welcome To Tech24
        </p>

        <h1 className="max-w-5xl mx-auto text-5xl md:text-7xl font-bold leading-tight bg-linear-to-r from-gray-700 to-orange-600 bg-clip-text text-transparent">
          Professional ATM Installation & Maintenance Services
        </h1>

        <p className="max-w-2xl mx-auto mt-8 text-lg md:text-xl text-black/70 leading-relaxed">
          Trusted by 6+ banks across Ethiopia. Expert GRG Banking
          System support with 24/7 emergency response.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

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
            Request Services
          </button>

          <button className="rounded-full border border-black/20 bg-white/10 backdrop-blur-xl px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/20">
            Join Our Team
          </button>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-orange-500 mb-2">
              6+
            </h2>

            <p className="text-black/70">
              Banks Trusted
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-orange-500 mb-2">
              24/7
            </h2>

            <p className="text-black/70">
              Emergency Response
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-orange-500 mb-2">
              3+
            </h2>

            <p className="text-black/70">
              Years Experience
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-orange-500 mb-2">
              100%
            </h2>

            <p className="text-black/70">
              Customer Satisfaction
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>

          <p className="max-w-2xl mx-auto text-black/70 text-lg">
            Comprehensive ATM solutions tailored to your bank's needs.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:scale-105">
            <Wrench className="mb-6 text-orange-500" size={50} />

            <h3 className="text-2xl font-bold mb-4">
              ATM Installation
            </h3>

            <p className="text-black/70 leading-relaxed">
              Professional installation of new ATMs with GRG Banking Systems.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:scale-105">
            <Clock className="mb-6 text-orange-500" size={50} />

            <h3 className="text-2xl font-bold mb-4">
              24/7 Emergency
            </h3>

            <p className="text-black/70 leading-relaxed">
              Round-the-clock emergency repair and maintenance services.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:scale-105">
            <ShieldCheck className="mb-6 text-orange-500" size={50} />

            <h3 className="text-2xl font-bold mb-4">
              Genuine Parts
            </h3>

            <p className="text-black/70 leading-relaxed">
              Original spare parts and components for all ATM models.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:scale-105">
            <Users className="mb-6 text-orange-500" size={50} />

            <h3 className="text-2xl font-bold mb-4">
              Expert Team
            </h3>

            <p className="text-black/70 leading-relaxed">
              Certified and experienced GRG system technicians.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:scale-105">
            <Globe className="mb-6 text-orange-500" size={50} />

            <h3 className="text-2xl font-bold mb-4">
              Nationwide
            </h3>

            <p className="text-black/70 leading-relaxed">
              Services available across all regions of Ethiopia.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:scale-105">
            <Cpu className="mb-6 text-orange-500" size={50} />

            <h3 className="text-2xl font-bold mb-4">
              GRG Banking Support
            </h3>

            <p className="text-black/70 leading-relaxed">
              Expert support for GRG Banking Systems including software updates and troubleshooting.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-32">

        <div className="rounded-4xl border border-white/20 bg-white/10 backdrop-blur-xl p-12 text-center shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Partner With Us?
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-black/70 mb-10">
            Join the leading banks in Ethiopia that trust Tech24
            for ATM installation and maintenance services.
          </p>

          <button className="rounded-full
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
              hover:shadow-xl">
            Get Quote
          </button>

        </div>
      </section>

    </div>
  );
};

export default Home;