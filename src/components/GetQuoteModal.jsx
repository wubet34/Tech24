import React from "react";
import { X } from "lucide-react";

const GetQuoteModal = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl relative overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black mb-3">
            Request a Quote
          </h2>

          <p className="text-gray-600">
            Get a customized service plan for your bank
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="rounded-2xl bg-orange-50 p-4 text-center">
            <h3 className="font-semibold text-black">Expert Service</h3>
          </div>

          <div className="rounded-2xl bg-orange-50 p-4 text-center">
            <h3 className="font-semibold text-black">Fast Response</h3>
          </div>

          <div className="rounded-2xl bg-orange-50 p-4 text-center">
            <h3 className="font-semibold text-black">Certified Techs</h3>
          </div>

          <div className="rounded-2xl bg-orange-50 p-4 text-center">
            <h3 className="font-semibold text-black">Dedicated Support</h3>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Bank Name */}
          <div>
            <label className="block mb-2 font-medium text-black">
              Bank Name *
            </label>

            <input
              type="text"
              placeholder="Enter bank name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          {/* Contact Person */}
          <div>
            <label className="block mb-2 font-medium text-black">
              Contact Person *
            </label>

            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-black">
                Email *
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-black">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Phone number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* ATM + Service */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-black">
                Number of ATMs *
              </label>

              <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500">
                <option>Select number of ATMs</option>
                <option>1 - 10</option>
                <option>10 - 50</option>
                <option>50 - 100</option>
                <option>100+</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-black">
                Service Type
              </label>

              <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500">
                <option>Select service</option>
                <option>ATM Installation</option>
                <option>Maintenance</option>
                <option>Emergency Repair</option>
                <option>GRG Support</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium text-black">
              Location / Branches
            </label>

            <input
              type="text"
              placeholder="City / Regions where service is needed"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-black">
              Additional Information
            </label>

            <textarea
              rows="5"
              placeholder="Any specific requirements or questions..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 resize-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full rounded-xl border border-gray-300 py-3 font-medium text-black transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full rounded-xl bg-linear-to-r from-gray-500 to-orange-600 py-3 font-medium text-white transition hover:scale-[1.02]"
            >
              Submit Request
            </button>
          </div>
        </form>

        {/* Bottom */}
        <p className="mt-6 text-center text-sm text-gray-500">
          We'll respond within 24 hours. For urgent inquiries, call our 24/7
          support: +251 911 000 000
        </p>
      </div>
    </div>
  );
};

export default GetQuoteModal;