import React from "react";
import { Link } from "react-router-dom";
import { Palette, Mail, Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/champe.titoz",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Palette className="w-8 h-8 text-orange-500 mr-3" />
              <span className="text-2xl font-bold">David Titus Ayoo</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Creative graphic designer passionate about crafting visual stories
              that captivate, inspire, and drive results for brands and
              businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <a
                  href="mailto:davytitoz456@gmail.com"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 break-all"
                >
                  davytitoz456@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <a
                  href="tel:+254769480189"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  +254 769 480 189
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  P.O Box 7448-40100, Kisumu, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 David Titus Ayoo. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 text-center md:text-right">
            Crafted with passion and creativity by{" "}
            <a
              href="https://nexacraft.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
            >
              NexaCraft.co.ke
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
