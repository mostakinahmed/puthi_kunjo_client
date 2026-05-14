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
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial width and handle resize
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();

    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const topLinks = [
    "অর্ডার ট্র্যাক করুন",
    "ডাউনলোড",
    "রিভিউ এবং পুরস্কার",
    "বই হোলসেল",
  ];
  const categoryLinks = [
    { name: "লেখক", hasDropdown: true },
    { name: "বিষয়", hasDropdown: true },
    { name: "প্রকাশনী", hasDropdown: true },
    { name: "বইমেলা ২০২৬", hasDropdown: false },
    { name: "একাডেমিক বই", hasDropdown: false },
    { name: "ই-বুক", hasDropdown: false },
    { name: "অতিরিক্ত ছাড়ের বই", hasDropdown: false },
    { name: "প্যারালাল TEXT", hasDropdown: true },
    { name: "ভর্তি প্রস্তুতি", hasDropdown: true },
    { name: "ইসলামি বই", hasDropdown: false },
    { name: "ইংরেজি ভাষার বই", hasDropdown: false },
    { name: "পশ্চিমবঙ্গের বই", hasDropdown: false },
  ];
  const middleLinks = [
    "বই",
    "ইলেক্ট্রনিক্স",
    "সুপার স্টোর",
    "কিডস জোন",
    "প্রাতিষ্ঠানিক অর্ডার",
    "বেস্টসেলার অ্যাওয়ার্ড, ২৫",
    "আজকের অফার!",
    "বইমেলা ২০২৬",
    "Just for you ✨",
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        {/* MOBILE MENU (SIDEBAR) */}
        <div
          className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-300 ${mobileMenu ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
          <div onClick={() => setMobileMenu(false)} className="absolute inset-0 bg-black/50" />
          <div
            className={`absolute left-0 top-0 h-full w-[60%] max-w-[320px] bg-white shadow-md transition-transform duration-300 ${mobileMenu ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-blue-400">
              <h1 className="text-2xl font-bold text-blue-600">পুঁথিকুঞ্জ</h1>
              <button onClick={() => setMobileMenu(false)}><X size={26} /></button>
            </div>
            <div className="h-[calc(100%-60px)] overflow-y-auto px-5 py-4 space-y-6">

              <div className="space-y-3">
                <h3 className="text-md font-semibold text-gray-500">Main</h3>
                {middleLinks.map((item) => (
                  <a key={item} href="#" className="block text-gray-700 text-md">{item}</a>
                ))}
              </div>
              <div className="space-y-3 border-t border-blue-400 pt-4">
                <h3 className="text-md font-semibold text-gray-500">Categories</h3>
                {categoryLinks.map((item) => (
                  <button key={item.name} className="flex items-center justify-between w-full text-gray-700 text-sm">
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={14} className="text-gray-400" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 1. TOP BAR (Slides Up on Desktop Only) */}
        <div
          className={`hidden lg:block w-full bg-gray-800 text-white text-sm transition-transform duration-300 ease-in-out ${sticky ? "-translate-y-full" : "translate-y-0"
            }`}
        >
          <div className="w-[75%] mx-auto px-4 h-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Headphones size={16} />
              <span className="font-medium">Hotline: 16297</span>
            </div>
            <div className="flex items-center gap-5 text-gray-300">
              {topLinks.map((item) => (
                <a key={item} href="#" className="hover:text-white text-sm">{item}</a>
              ))}
            </div>
          </div>
        </div>

        {/* 2. MIDDLE BAR (Stays Fixed on Mobile, Slides up on Desktop) */}
        <div
          className="w-full bg-white shadow-md transition-all duration-300 ease-in-out"
          style={{
            // KEY FIX: Only translate on Desktop (lg screens)
            transform: (sticky && !isMobile) ? `translateY(-40px)` : `translateY(0px)`,
          }}
        >
          <div className="w-[95%] lg:w-[75%] mx-auto px-2 lg:px-4">
            <div className="flex items-center justify-between py-3">


              <div className="flex items-center gap-4">
                <button className="lg:hidden" onClick={() => setMobileMenu(true)}><Menu size={28} /></button>
                <Link to="/">
                  <h1 className="text-2xl lg:text-4xl font-bold text-blue-600 tracking-tight">পুঁথিকুঞ্জ</h1>
                </Link>
              </div>



              {/* Desktop Search */}
              <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
                <input type="text" placeholder="Search books..." className="w-full border bg-white border-blue-400 rounded-full px-6 py-2.5 pr-14 outline-none focus:ring-2 ring-blue-100" />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 h-[82%] px-6 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Search size={20} />
                </button>
              </div>

              <div className="flex items-center gap-5">
                <div className="hidden xl:flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                  <Smartphone size={20} />
                  <span className="text-sm font-medium">App</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                  <User size={22} />
                  <span className="hidden lg:block text-sm font-medium">Sign in</span>
                </div>
                <button className="relative p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <ShoppingCart size={24} className="text-gray-700" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-[10px] rounded-full flex items-center justify-center border-2 border-white">2</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. EXPANDED BOTTOM SECTION (Desktop Only) */}
        <div
          className={`hidden lg:block bg-white border-b border-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${sticky ? "max-h-0 opacity-0 pointer-events-none" : "max-h-60 opacity-100"
            }`}
          style={{
            transform: sticky ? `translateY(-40px)` : `translateY(0px)`,
          }}
        >
          <div className="border-b border-blue-400">
            <div className="w-[95%] xl:w-[75%] mx-auto flex justify-center gap-6 py-2 mt-2">
              {middleLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-[18px] font-medium whitespace-nowrap transition-colors ${item.includes("Just for you") ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="w-[95%] xl:w-[75%] mx-auto flex justify-between flex-wrap gap-x-6 gap-y-2 py-3">
            {categoryLinks.map((item) => (
              <button key={item.name} className="flex items-center gap-1 text-[15px] font-medium hover:text-blue-600 whitespace-nowrap text-gray-700">
                {item.name}
                {item.hasDropdown && <ChevronDown size={14} className="text-gray-400" />}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* PADDING ADJUSTMENT */}
      <div className=" lg:h-[150px]" />
    </>
  );
};

export default Navbar;