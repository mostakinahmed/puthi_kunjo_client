import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-20">
      
      <div className="w-[95%] lg:w-[75%] mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-5">
            পুঁথিকুঞ্জ
          </h1>

          <p className="leading-7 text-gray-400">
            বাংলাদেশের সবচেয়ে জনপ্রিয় অনলাইন বুকস্টোর।
            হাজারো বই, সেরা লেখক এবং দ্রুত ডেলিভারি
            নিয়ে আপনার পাশে।
          </p>

          {/* Social */}
          <div className="flex items-center gap-4 mt-6">

            <button className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <FaFacebookF size={18} />
            </button>

            <button className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition">
              <FaInstagram size={18} />
            </button>

            <button className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition">
              <FaTwitter size={18} />
            </button>

            <button className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition">
              <FaYoutube size={18} />
            </button>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Quick Links
          </h2>

          <div className="space-y-3">
            {["Home","Books","Best Sellers","New Arrivals","Offers","Contact"].map((item) => (
              <a key={item} href="#" className="block hover:text-white transition">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Categories
          </h2>

          <div className="space-y-3">
            {["Programming","Islamic Books","Academic","Story Books","Business","Self Development"].map((item) => (
              <a key={item} href="#" className="block hover:text-white transition">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Contact Us
          </h2>

          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 text-blue-500" />
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="text-blue-500" />
              <p>+880 1234-567890</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="text-blue-500" />
              <p>support@puthikunjo.com</p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="w-[95%] lg:w-[75%] mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © 2026 বইঘর. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;