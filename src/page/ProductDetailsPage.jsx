import React, { useState } from 'react';
import {
  Star,
  ShoppingCart,
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specification');

  // Sample Product Data
  const product = {
    title: "সহীহ্ হজ্জ ও উমরাহ্ পালন",
    author: "আল্লামা মুহাম্মদ নাসিরুদ্দীন আল-আলবানী",
    publisher: "তাওহীদ পাবলিকেশন্স",
    category: "ইসলামি বই",
    price: 49,
    originalPrice: 65,
    discount: 25,
    rating: 4.5,
    reviews: 124,
    stock: "In Stock",
    pages: 120,
    binding: "Hardcover",
    language: "Bengali",
    description: "এই বইটি সহীহ্ সুন্নাহর আলোকে হজ্জ ও উমরাহ পালনের সঠিক নিয়মাবলী বিস্তারিতভাবে বর্ণনা করে। এটি হজ্জ যাত্রীদের জন্য একটি নির্ভরযোগ্য গাইড।"
  };

  const handleQuantity = (type) => {
    if (type === 'inc') setQuantity(prev => prev + 1);
    if (type === 'dec' && quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="w-full md:mt-4  min-h-screen lg:py-12">
      <div className="max-w-[95%] lg:max-w-[75%] mx-auto">

        {/* MAIN PRODUCT SECTION */}
        <div className="bg-white border border-gray-100 p-4 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* LEFT: IMAGE GALLERY */}
          <div className="w-full lg:w-1/3 space-y-4">
            <div className="aspect-[3/4] rounded overflow-hidden border border-gray-200">
              <img
                src="https://m.media-amazon.com/images/I/71M8ss0CnHL._AC_UF1000,1000_QL80_.jpg"
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-20 border rounded-md cursor-pointer hover:border-blue-500 overflow-hidden">
                  <img src="https://placehold.co/80x80" alt="thumb" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTENT & ACTIONS */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                {product.title}
              </h1>
              <p className="mt-2 text-blue-600 font-medium">Author: {product.author}</p>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < 4 ? "#f59e0b" : "none"} className={i < 4 ? "text-amber-500" : "text-gray-300"} />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">({product.reviews} Reviews)</span>
                </div>
                <div className="h-4 w-[1px] bg-gray-300" />
                <span className="text-green-600 font-semibold text-sm flex items-center gap-1">
                  <ShieldCheck size={16} /> {product.stock}
                </span>
              </div>
            </div>

            {/* PRICING */}
            <div className="bg-blue-50/50 p-4 rounded-lg flex items-baseline gap-4">
              <span className="text-3xl font-bold text-gray-900">TK. {product.price}</span>
              <span className="text-lg text-gray-400 line-through">TK. {product.originalPrice}</span>
              <span className="bg-red-500 text-white px-2 py-0.5 rounded text-sm font-bold">
                {product.discount}% OFF
              </span>
            </div>

            {/* QUANTITY & ACTIONS */}
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <span className="font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border rounded-lg overflow-hidden w-fit">
                  <button onClick={() => handleQuantity('dec')} className="p-2 hover:bg-gray-100"><Minus size={18} /></button>
                  <span className="px-6 py-2 font-bold border-x">{quantity}</span>
                  <button onClick={() => handleQuantity('inc')} className="p-2 hover:bg-gray-100"><Plus size={18} /></button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {/* Add to Cart Button */}
                <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
                  <ShoppingCart size={20} /> Add to Cart
                </button>

                {/* Order Now Link & Button */}
                <Link to="/place-order" className="flex-1">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
                    <Zap size={20} /> Order Now
                  </button>
                </Link>

                {/* Wishlist Button */}
                <button className="p-4 border rounded-lg hover:bg-gray-50 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart size={24} />
                </button>
              </div>

            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="text-blue-500" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <RotateCcw className="text-blue-500" />
                <span>7 Days Return</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck className="text-blue-500" />
                <span>Authentic Product</span>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS & SPECIFICATION TABS */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex border-b">
            {['specification', 'summary'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-bold text-sm uppercase transition-all ${activeTab === tab ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50/30" : "text-gray-500"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 lg:p-8">
            {activeTab === 'specification' ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm lg:text-base">
                  <tbody>
                    {[
                      { label: "Title", value: product.title },
                      { label: "Author", value: product.author },
                      { label: "Publisher", value: product.publisher },
                      { label: "Number of Pages", value: product.pages },
                      { label: "Binding", value: product.binding },
                      { label: "Language", value: product.language },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                        <td className="py-3 px-4 font-semibold text-gray-600 w-1/3">{row.label}</td>
                        <td className="py-3 px-4 text-gray-800">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-gray-700 leading-relaxed max-w-3xl">
                <h4 className="text-lg font-bold mb-3">Product Summary</h4>
                {product.description}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;