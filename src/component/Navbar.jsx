import { useEffect, useState } from "react";
import {
  Headphones,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Smartphone,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topLinks = [
    "অর্ডার ট্র্যাক করুন",
    "রকমারি ডাউনলোড",
    "রিভিউ এবং পুরস্কার",
    "বই হোলসেল",
  ];

  const middleLinks = [
    "বই",
    "ইলেক্ট্রনিক",
    "সুপার স্টোর",
    "কিডস জোন",
    "প্রাতিষ্ঠানিক অর্ডার",
    "বেস্টসেলার অ্যাওয়ার্ড",
    "আজকের অফার!",
    "বইমেলা ২০২৬",
  ];

  const categoryLinks = [
    "লেখক",
    "বিষয়",
    "প্রকাশনী",
    "একাডেমিক বই",
    "ই-বুক",
    "ইসলামি বই",
    "ইংরেজি ভাষার বই",
    "পশ্চিমবঙ্গের বই",
  ];

  return (
    <>
      <div className="w-full">

        {/* TOP BAR */}
        {!sticky && (
          <div className="hidden lg:block w-full bg-gray-800 text-white text-sm">
            <div className="w-[75%] mx-auto px-4 h-10 flex items-center justify-between">

              <div className="flex items-center gap-2">
                <Headphones size={16} />
                <span className="font-medium">
                  Hotline: 16297
                </span>
                <span className="text-gray-300">
                  (9 AM to 8 PM)
                </span>
              </div>

              <div className="flex items-center gap-5 text-gray-300">
                {topLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MAIN NAVBAR */}
        <div
          className={`w-full bg-white border-b border-gray-200 z-50 transition-all duration-300 ${
            sticky
              ? "fixed top-0 left-0 shadow-md animate-slideDown"
              : "relative"
          }`}
        >
          <div className="w-[95%] lg:w-[75%] mx-auto px-2 lg:px-4">

            <div
              className={`flex items-center justify-between gap-4 transition-all duration-300 ${
                sticky ? "py-3" : "py-5"
              }`}
            >

              {/* LEFT */}
              <div className="flex items-center gap-4">

                {/* MOBILE MENU BUTTON */}
                <button
                  onClick={() => setMobileMenu(true)}
                  className="lg:hidden"
                >
                  <Menu size={28} />
                </button>

                {/* LOGO */}
                <h1
                  className={`font-bold text-gray-900 transition-all duration-300 ${
                    sticky ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
                  }`}
                >
                  পুঁথিকুঞ্জ
                </h1>
              </div>

              {/* SEARCH */}
              <div className="hidden md:flex flex-1 max-w-3xl relative">
                <input
                  type="text"
                  placeholder="Search by book name, author, publisher"
                  className="w-full rounded-full border border-blue-500 px-6 py-3 pr-14 outline-none focus:ring-2 focus:ring-blue-200"
                />

                <button className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-600">
                  <Search size={22} />
                </button>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-4 lg:gap-6">

                {!sticky && (
                  <div className="hidden xl:flex items-center gap-2 cursor-pointer">
                    <Smartphone size={22} />
                    <span className="text-sm font-medium leading-4">
                      Download <br /> App
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 cursor-pointer">
                  <User size={22} />
                  <span className="hidden lg:block text-sm">
                    Hello, Sign in
                  </span>
                </div>

                <button className="relative">
                  <ShoppingCart size={24} />

                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>
            </div>

            {/* MOBILE SEARCH */}
            <div className="md:hidden pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full rounded-full border border-blue-500 px-5 py-3 pr-12 outline-none"
                />

                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* DESKTOP NAVIGATION */}
            {!sticky && (
              <>
                <div className="hidden lg:block border-t border-gray-100">
                  <div className="flex items-center justify-center gap-7 overflow-x-auto py-3 whitespace-nowrap">

                    {middleLinks.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition font-medium"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-8 overflow-x-auto whitespace-nowrap py-3">

                    {categoryLinks.map((item) => (
                      <button
                        key={item}
                        className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
                      >
                        {item}
                        <ChevronDown size={16} />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* SPACING */}
        {sticky && <div className="h-[90px]"></div>}
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-[999] shadow-xl transition-all duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h1 className="text-3xl font-bold">
            বইঘর
          </h1>

          <button onClick={() => setMobileMenu(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="p-5 space-y-6 overflow-y-auto h-full pb-32">

          {/* MAIN LINKS */}
          <div className="space-y-4">
            {middleLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-lg text-gray-700 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CATEGORY LINKS */}
          <div className="border-t pt-5 space-y-4">
            {categoryLinks.map((item) => (
              <button
                key={item}
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600"
              >
                {item}
                <ChevronDown size={18} />
              </button>
            ))}
          </div>

          {/* TOP LINKS */}
          <div className="border-t pt-5 space-y-4">
            {topLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/40 z-[998]"
        ></div>
      )}
    </>
  );
};

export default Navbar;