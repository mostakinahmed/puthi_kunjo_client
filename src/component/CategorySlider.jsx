import React, { useRef, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const categories = [
  { id: 1, name: "বই", image: "https://cdn-icons-png.flaticon.com/512/3389/3389081.png" },
  { id: 2, name: "Electronics", image: "https://img.freepik.com/free-photo/view-electronic-gadgets-with-headphones-smartphone_23-2151044431.jpg" },
  { id: 3, name: "Ebook", image: "https://img.freepik.com/free-photo/digital-tablet-screen-with-cloud-icon_53876-104193.jpg" },
  { id: 4, name: "Beauty & Health", image: "https://img.freepik.com/free-photo/beauty-cosmetic-products-white-background_23-2148281165.jpg" },
  { id: 5, name: "Stationery", image: "https://img.freepik.com/free-photo/set-stationery-items-white-background_23-2148873913.jpg" },
  { id: 6, name: "Science Kit", image: "https://img.freepik.com/free-photo/creative-composition-with-educational-toys_23-2148873926.jpg" },
  { id: 7, name: "Groceries", image: "https://img.freepik.com/free-photo/shopping-cart-full-food-products_23-2148288233.jpg" },
  { id: 8, name: "Gift Voucher", image: "https://img.freepik.com/free-vector/gift-card-template-with-golden-bow_23-2147926131.jpg" },
  { id: 9, name: "Academic", image: "https://img.freepik.com/free-photo/stack-books-with-graduation-cap_23-2148873932.jpg" },
  { id: 10, name: "Kids Zone", image: "https://img.freepik.com/free-photo/toys-collection-isolated_23-2148873954.jpg" },
  { id: 4, name: "Beauty & Health", image: "https://img.freepik.com/free-photo/beauty-cosmetic-products-white-background_23-2148281165.jpg" },
  { id: 5, name: "Stationery", image: "https://img.freepik.com/free-photo/set-stationery-items-white-background_23-2148873913.jpg" },
  { id: 6, name: "Science Kit", image: "https://img.freepik.com/free-photo/creative-composition-with-educational-toys_23-2148873926.jpg" },
  { id: 7, name: "Groceries", image: "https://img.freepik.com/free-photo/shopping-cart-full-food-products_23-2148288233.jpg" },
  
];

const CategorySlider = () => {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);

  const handleScrollPosition = () => {
    if (scrollRef.current) {
      setShowLeftBtn(scrollRef.current.scrollLeft > 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-2 md:max-w-[75%] mx-auto py-4 lg:py-6">
      <div className="bg-blue-50 border-y lg:border border-gray-300/70 overflow-hidden relative lg:rounded-md">
        
        <div className="hidden md:block p-4 lg:p-5 border-b border-gray-200 bg-white">
          <h2 className="text-lg lg:text-xl font-bold text-gray-800">Shop By Category</h2>
        </div>

        <div className="relative group px-2 lg:px-8 py-3 lg:py-8">
          
          {showLeftBtn && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 py-5 shadow-lg rounded-r-md hover:bg-gray-50 transition-all hidden lg:block"
            >
              <ChevronLeft size={32} className="text-slate-700" />
            </button>
          )}

          {/* 
              MOBILE TWO-ROW FIX:
              1. Changed 'flex' to 'grid grid-rows-2 lg:flex lg:items-start'
              2. Added 'grid-flow-col' to ensure items flow horizontally into rows
          */}
          <div 
            ref={scrollRef}
            onScroll={handleScrollPosition}
            className="grid grid-rows-2 grid-flow-col lg:flex lg:items-start gap-1 lg:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {categories.map((cat, index) => (
              <div 
                key={`${cat.id}-${index}`} 
                className="flex flex-col items-center w-24 lg:w-34 cursor-pointer group/item snap-start active:scale-95 transition-transform"
              >
                <div className="w-22 h-22 lg:w-28 lg:h-28 bg-white border border-gray-100 rounded-2xl flex items-center justify-center md:p-3 p-2 transition-all duration-300 group-hover/item:shadow-md lg:group-hover/item:border-blue-200">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="mt-2 lg:mt-4 text-[12px] lg:text-[15px] font-semibold text-slate-600 text-center leading-tight h-8 lg:h-10 flex items-center">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 py-5 shadow-lg rounded-l-md hover:bg-gray-50 transition-all hidden lg:block"
          >
            <ChevronRight size={32} className="text-slate-700" />
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;