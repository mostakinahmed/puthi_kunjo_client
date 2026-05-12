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
      // Trigger the transition after 40px of scrolling
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topLinks = ["অর্ডার ট্র্যাক করুন", "রকমারি ডাউনলোড", "রিভিউ এবং পুরস্কার", "বই হোলসেল"];
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
    "Just for you ✨", // Added sparkle emoji to match image
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">

{/* MOBILE MENU */}
<div
  className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${
    mobileMenu ? "visible opacity-100" : "invisible opacity-0"
  }`}
>
  {/* Overlay */}
  <div
    onClick={() => setMobileMenu(false)}
    className="absolute inset-0 bg-black/50"
  />

  {/* Sidebar */}
  <div
    className={`absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-white shadow-xl transition-transform duration-300 ${
      mobileMenu ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {/* Header */}
    <div className="flex items-center justify-between px-5 py-4 border-b">
      <h1 className="text-2xl font-bold text-blue-600">পুঁথিকুঞ্জ</h1>

      <button onClick={() => setMobileMenu(false)}>
        <X size={26} />
      </button>
    </div>

    {/* Content */}
    <div className="h-[calc(100%-60px)] overflow-y-auto px-5 py-4 space-y-6">

      {/* Search (Mobile) */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search books..."
          className="w-full border border-blue-300 rounded-md px-4 py-2 outline-none"
        />
        <Search
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500"
        />
      </div>

      {/* MAIN LINKS */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-500">Main</h3>
        {middleLinks.map((item) => (
          <a
            key={item}
            href="#"
            className="block text-gray-700 hover:text-blue-600 text-sm"
            onClick={() => setMobileMenu(false)}
          >
            {item}
          </a>
        ))}
      </div>

      {/* CATEGORY LINKS */}
      <div className="space-y-3 border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-500">Categories</h3>

        {categoryLinks.map((item) => (
          <button
            key={item.name}
            className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 text-sm"
            onClick={() => setMobileMenu(false)}
          >
            {item.name}
            {item.hasDropdown && (
              <ChevronDown size={14} className="text-gray-400" />
            )}
          </button>
        ))}
      </div>

      {/* TOP LINKS */}
      <div className="space-y-3 border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-500">Support</h3>

        {topLinks.map((item) => (
          <a
            key={item}
            href="#"
            className="block text-gray-600 text-sm hover:text-blue-600"
            onClick={() => setMobileMenu(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </div>
</div>
        {/* 1. TOP BAR (Slides Up) */}
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
                <a key={item} href="#" className="hover:text-white text-xs">{item}</a>
              ))}
            </div>
          </div>
        </div>

        {/* 2. MIDDLE BAR (Stays Fixed, Moves up to fill Top Bar gap) */}
        <div
          className="w-full bg-white border-b border-blue-400 shadow-lg transition-all duration-300 ease-in-out"
          style={{ transform: sticky ? `translateY(-40px)` : `translateY(0px)` }}
        >
          <div className="w-[95%] lg:w-[75%] mx-auto px-2 lg:px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-4">
                <button className="lg:hidden" onClick={() => setMobileMenu(true)}>
                  <Menu size={28} />
                </button>
                <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">পুঁথিকুঞ্জ</h1>
              </div>

              <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full border border-blue-400 rounded-md px-6 py-2.5 outline-none"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-md">
                  <Search size={20} />
                </button>
              </div>

              <div className="flex items-center gap-5">
                <div className="hidden xl:flex items-center gap-2 cursor-pointer">
                  <Smartphone size={20} />
                  <span className="text-sm">App</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <User size={22} />
                  <span className="hidden lg:block text-sm">Sign in</span>
                </div>
                <button className="relative">
                  <ShoppingCart size={24} className="text-gray-700" />
                  <span className="absolute -top-2 -right-2 h-5 w-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">2</span>
                </button>
              </div>
            </div>
          </div>
        </div>

<div 
  className={`hidden lg:block bg-white  transition-all duration-300 ease-in-out overflow-hidden ${
    sticky ? "max-h-0 opacity-0 pointer-events-none" : "max-h-60 opacity-100"
  }`}
  style={{ transform: sticky ? `translateY(-40px)` : `translateY(0px)` }}
>
  <div className="w-[95%] xl:w-[85%] mx-auto pb-2">
    
    {/* MAIN LINKS (Row 1 from image_9c0980.png) */}
    <div className="flex justify-center gap-6 py-3 border-b border-gray-100">
      {middleLinks.map((item) => (
        <a 
          key={item} 
          href="#" 
          className={`text-[13px] font-medium whitespace-nowrap transition-colors ${
            item.includes("Just for you") ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
          }`}
        >
          {item}
        </a>
      ))}
    </div>

    {/* CATEGORY LINKS (Row 2 from image_9c0980.png) */}
    <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 py-3">
      {categoryLinks.map((item) => (
        <button 
          key={item.name} 
          className="flex items-center gap-1 text-[13px] text-gray-600 hover:text-blue-600 whitespace-nowrap"
        >
          {item.name}
          {item.hasDropdown && <ChevronDown size={14} className="text-gray-400" />}
        </button>
      ))}
    </div>

  </div>
</div>
      </header>

      {/* PADDING TO PREVENT CONTENT UNDERLAP */}
      <div className="h-[180px] lg:h-[200px]" />
    </>
  );
};

export default Navbar;