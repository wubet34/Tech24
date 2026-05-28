import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import {

 
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <img
              src={logo}
              alt="Tech24 Logo"
              className="h-16 w-auto mb-6"
            />

            <p className="text-black/70 leading-relaxed mb-6">
              Professional ATM installation, maintenance, and support
              services for banks across Ethiopia.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
              >
                <FaLinkedinIn 
 size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-black/70">

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  For Banks
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact Info
            </h3>

            <ul className="space-y-5 text-black/70">

              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 mt-1" size={18} />
                <span>Addis Ababa, Ethiopia</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="text-orange-500 mt-1" size={18} />
                <span>+251 911 234 567</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="text-orange-500 mt-1" size={18} />
                <span>info@tech24.com</span>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="text-orange-500 mt-1" size={18} />
                <span>24/7 Emergency Support</span>
              </li>

            </ul>
          </div>

          {/* Working Hours */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Working Hours
            </h3>

            <ul className="space-y-4 text-black/70">

              <li>
                Monday - Friday: 8:00 - 18:00
              </li>

              <li>
                Saturday: 9:00 - 13:00
              </li>

              <li>
                Sunday: Closed
              </li>

              <li className="text-orange-500 font-semibold">
                Emergency: 24/7
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-black/60">

          <p>
            © 2026 Tech24. All rights reserved.
          </p>

          <p className="mt-2">
            Developed by{" "}
            <span className="font-semibold text-orange-500">
              Wubet Alebachew
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;