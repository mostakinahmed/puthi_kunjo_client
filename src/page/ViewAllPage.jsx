import React, { useState } from "react";
import { Star, SlidersHorizontal, X } from "lucide-react";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "সহীহ্ হজ্জ ও উমরাহ্ পালন",
    author: "আল্লামা মুহাম্মদ নাসিরুদ্দীন...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFCnj5S1s8l6t2pveDOTvpIJVmFEZyUTsfg&s",
    originalPrice: 65,
    price: 49,
    rating: 3,
    reviews: 0,
    category: "হজ্জ",
  },
  {
    id: 2,
    title: "শিরক বিদআত ও কুসংস্কার মুক্ত হজ্জ",
    author: "ড. খ ম আব্দুর রাজ্জাক",
    image:
      "https://rukminim2.flixcart.com/image/480/640/l2nmnww0/regionalbooks/e/e/8/bangla-translation-of-relax-and-happy-dushchintahin-notun-original-imagdygyvmyvz3by.jpeg?q=90",
    originalPrice: 200,
    price: 119,
    rating: 4,
    reviews: 4,
    category: "হজ্জ",
  },
  {
    id: 3,
    title: "দুই ঈদ কোরবানী ও আকীকা",
    author: "মুফতী মুহাম্মদ উবাইদুল্লাহ",
    image:
      "https://m.media-amazon.com/images/I/41jEbOHAh8L._AC_UF1000,1000_QL80_.jpg",
    originalPrice: 260,
    price: 169,
    rating: 4,
    reviews: 1,
    category: "কুরবানী",
  },
  {
    id: 4,
    title: "নারীর হজ্জ ও উমরাহ",
    author: "ড. আবু বকর মুহাম্মাদ যাকারিয়া",
    image:
      "https://m.media-amazon.com/images/I/71M8ss0CnHL._AC_UF1000,1000_QL80_.jpg",
    originalPrice: 100,
    price: 79,
    rating: 5,
    reviews: 7,
    category: "উমরাহ",
  },
  {
    id: 5,
    title: "হজ্জ-উমরাহ বিশ্বকোষ",
    author: "সামি ইবনু আব্দুল্লাহ...",
    image: "https://placehold.co/300x420/2563eb/ffffff?text=Book+5",
    originalPrice: 4000,
    price: 3099,
    rating: 4,
    reviews: 2,
    category: "উমরাহ",
  },
  {
    id: 6,
    title: "কুরবানী ও জাবীহুল্লাহ",
    author: "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর",
    image: "https://placehold.co/300x420/0f172a/ffffff?text=Book+6",
    originalPrice: 40,
    price: 29,
    rating: 4,
    reviews: 36,
    category: "কুরবানী",
  },
];

const categories = ["সব", "হজ্জ", "উমরাহ", "কুরবানী"];

const ViewAllPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredBooks =
    selectedCategory === "সব"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="w-full lg:max-w-[75%] mt-10 mx-auto px-3 lg:px-0 py-6 lg:py-10">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 text-sm font-medium"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      <div className="flex gap-6">
        {/* Overlay */}
        {mobileFilterOpen && (
          <div
            onClick={() => setMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed lg:sticky top-0 left-0 z-50 lg:z-0
            h-screen lg:h-fit
            w-[280px] lg:w-[250px]
            bg-white border-r lg:border border-gray-200
            p-5
            ${
              mobileFilterOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Desktop header */}
          <h2 className="hidden lg:block text-lg font-semibold mb-6">
            Filter Books
          </h2>

          {/* Categories */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Categories
            </h3>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setMobileFilterOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm border
                  ${
                    selectedCategory === cat
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white hover:bg-gray-100 border-transparent"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Price */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold mb-4">Price Range</h3>

            <input type="range" className="w-full accent-blue-500" />

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>TK. 0</span>
              <span>TK. 5000</span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1 min-w-0">
          {/* Topbar */}
          <div className="bg-white border border-gray-200 px-4 py-3 mb-5 flex justify-between">
            <h2 className="text-lg font-medium">সব বই সমূহ</h2>
            <p className="text-sm text-gray-500">
              {filteredBooks.length} Products
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
            {filteredBooks.map((book) => (
              <Link to="/view-all/details">
                <div
                  key={book.id}
                  className="flex flex-col items-center cursor-pointer p-3 border border-transparent hover:border-slate-200 hover:shadow-md bg-white"
                >
                  {/* Image */}
                  <div className="w-full aspect-[2/3] overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="mt-3 w-full text-center space-y-1">
                    <h3 className="text-sm font-medium text-gray-700 line-clamp-2 h-10">
                      {book.title}
                    </h3>

                    <p className="text-xs text-gray-500 truncate">
                      {book.author}
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill={i < book.rating ? "#f59e0b" : "none"}
                          className={
                            i < book.rating ? "text-amber-500" : "text-gray-200"
                          }
                        />
                      ))}
                    </div>

                    <p className="text-xs text-green-600">In Stock</p>

                    <div className="flex justify-center gap-2 pt-1">
                      <span className="text-xs text-gray-400 line-through">
                        TK {book.originalPrice}
                      </span>
                      <span className="text-sm font-bold">TK {book.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllPage;
