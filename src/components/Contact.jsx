import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldAlert,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="text-black">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <p className="uppercase tracking-[0.3em] text-orange-500 mb-4">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-gray-700 to-orange-600 bg-clip-text text-transparent">
          Get In Touch With Our Team
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-black/70">
          Reach out for inquiries, support, maintenance services,
          or partnership opportunities.
        </p>

      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="space-y-8">

            {/* Visit */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

              <MapPin className="text-orange-500 mb-5" size={42} />

              <h2 className="text-2xl font-bold mb-3">
                Visit Us
              </h2>

              <p className="text-black/70">
                Gofe Gebriel, Addis Ababa, Ethiopia
              </p>

            </div>

            {/* Call */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

              <Phone className="text-orange-500 mb-5" size={42} />

              <h2 className="text-2xl font-bold mb-3">
                Call Us
              </h2>

              <p className="text-black/70">
                +251 911 234 567
              </p>

              <p className="text-orange-500 font-medium mt-2">
                Emergency: 24/7
              </p>

            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

              <Mail className="text-orange-500 mb-5" size={42} />

              <h2 className="text-2xl font-bold mb-3">
                Email Us
              </h2>

              <p className="text-black/70">
                info@tech24.com
              </p>

              <p className="text-black/70 mt-2">
                support@tech24.com
              </p>

            </div>

            {/* Working Hours */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

              <Clock className="text-orange-500 mb-5" size={42} />

              <h2 className="text-2xl font-bold mb-3">
                Working Hours
              </h2>

              <p className="text-black/70">
                Mon - Fri: 8:00 - 18:00
              </p>

              <p className="text-black/70 mt-2">
                Sat: 9:00 - 13:00
              </p>

            </div>

            {/* Emergency */}
            <div className="bg-linear-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl">

              <ShieldAlert className="mb-5" size={42} />

              <h2 className="text-2xl font-bold mb-3">
                24/7 Emergency Support
              </h2>

              <p className="text-white/90 mb-4">
                For urgent ATM breakdowns
              </p>

              <p className="text-2xl font-bold">
                +251 911 000 000
              </p>

            </div>

          </div>

          {/* Right Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-4xl p-8 shadow-xl">

            <h2 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-2 font-medium">
                  Your Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-3
                    outline-none
                    backdrop-blur-xl
                    placeholder:text-black/40
                    focus:border-orange-500
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">
                  Email Address *
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-3
                    outline-none
                    backdrop-blur-xl
                    placeholder:text-black/40
                    focus:border-orange-500
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your phone"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-3
                    outline-none
                    backdrop-blur-xl
                    placeholder:text-black/40
                    focus:border-orange-500
                  "
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <select
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-3
                    outline-none
                    backdrop-blur-xl
                    focus:border-orange-500
                  "
                >
                  <option>Select subject</option>
                  <option>ATM Installation</option>
                  <option>Maintenance</option>
                  <option>Emergency Support</option>
                  <option>Partnership</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium">
                  Message *
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-3
                    outline-none
                    backdrop-blur-xl
                    placeholder:text-black/40
                    focus:border-orange-500
                  "
                ></textarea>
              </div>

              {/* Button */}
              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-linear-to-r
                  from-gray-500
                  to-orange-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                "
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Map */}
      {/* <section className="max-w-7xl mx-auto px-6 py-20">

        <div
          className="
            rounded-[2rem]
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
            overflow-hidden
            shadow-xl
          "
        >

          <div className="h-[400px] w-full bg-orange-100 flex items-center justify-center text-center p-8">

            <div>

              <MapPin
                className="mx-auto mb-5 text-orange-500"
                size={60}
              />

              <h2 className="text-3xl font-bold mb-4">
                Map View - Addis Ababa, Ethiopia
              </h2>

              <p className="text-black/70 text-lg">
                📍 Gofe Gebriel, Addis Ababa, Ethiopia
              </p>

            </div>

          </div>

        </div>

      </section> */}

    </div>
  );
};

export default Contact;