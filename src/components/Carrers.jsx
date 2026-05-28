import React from "react";
import { Briefcase, Clock, Users, Sparkles } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-lg">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-orange-100">
            <Briefcase className="text-orange-500" size={40} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-black mb-3">
          Careers
        </h1>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
          <Clock size={16} />
          Coming Soon
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          We are building a professional recruitment system to connect talented engineers and technicians with Tech24 opportunities.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <Users className="text-orange-500 mb-2" size={22} />
            <p className="font-semibold text-black">Team Growth</p>
            <p className="text-sm text-gray-600">Expand your skills with experts</p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <Sparkles className="text-orange-500 mb-2" size={22} />
            <p className="font-semibold text-black">Opportunities</p>
            <p className="text-sm text-gray-600">New roles opening soon</p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <Briefcase className="text-orange-500 mb-2" size={22} />
            <p className="font-semibold text-black">Professional Work</p>
            <p className="text-sm text-gray-600">Banking system industry</p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-gray-500 text-sm">
          Stay tuned — we’ll announce openings soon.
        </p>
      </div>
    </div>
  );
};

export default Careers;