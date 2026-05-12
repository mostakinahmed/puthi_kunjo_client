import CategorySlider from "../component/CategorySlider";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import SearchBox from "../component/SearchBox";

const Home = () => {

    return (
        <div className="w-full min-h-screen bg-gray-100">

            {/* Navbar Full Width */}
            <Navbar />
            <SearchBox/>
            <Hero />
            <CategorySlider />

            {/* Main Website Container */}
            <div className="w-[75%] mx-auto">
                {/* Hero Section */}
                <section className="w-full mt-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <p className="mb-4 text-indigo-600 font-semibold uppercase tracking-wider">
                                Online Book Store
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Discover Your Next Favorite Book
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Explore thousands of books from fiction, programming,
                                business, self-development, academic and more.
                                Read, learn, and grow with BookNest.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="rounded-lg bg-indigo-600 px-7 py-3 text-white font-semibold hover:bg-indigo-700 transition">
                                    Shop Books
                                </button>

                                <button className="rounded-lg border border-gray-300 px-7 py-3 text-gray-700 font-semibold hover:bg-gray-100 transition">
                                    Explore Categories
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
                                alt="Books"
                                className="w-full max-w-xl rounded-2xl shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <p className="mb-4 text-indigo-600 font-semibold uppercase tracking-wider">
                                Online Book Store
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Discover Your Next Favorite Book
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Explore thousands of books from fiction, programming,
                                business, self-development, academic and more.
                                Read, learn, and grow with BookNest.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="rounded-lg bg-indigo-600 px-7 py-3 text-white font-semibold hover:bg-indigo-700 transition">
                                    Shop Books
                                </button>

                                <button className="rounded-lg border border-gray-300 px-7 py-3 text-gray-700 font-semibold hover:bg-gray-100 transition">
                                    Explore Categories
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
                                alt="Books"
                                className="w-full max-w-xl rounded-2xl shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <p className="mb-4 text-indigo-600 font-semibold uppercase tracking-wider">
                                Online Book Store
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Discover Your Next Favorite Book
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Explore thousands of books from fiction, programming,
                                business, self-development, academic and more.
                                Read, learn, and grow with BookNest.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="rounded-lg bg-indigo-600 px-7 py-3 text-white font-semibold hover:bg-indigo-700 transition">
                                    Shop Books
                                </button>

                                <button className="rounded-lg border border-gray-300 px-7 py-3 text-gray-700 font-semibold hover:bg-gray-100 transition">
                                    Explore Categories
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
                                alt="Books"
                                className="w-full max-w-xl rounded-2xl shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <p className="mb-4 text-indigo-600 font-semibold uppercase tracking-wider">
                                Online Book Store
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Discover Your Next Favorite Book
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Explore thousands of books from fiction, programming,
                                business, self-development, academic and more.
                                Read, learn, and grow with BookNest.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="rounded-lg bg-indigo-600 px-7 py-3 text-white font-semibold hover:bg-indigo-700 transition">
                                    Shop Books
                                </button>

                                <button className="rounded-lg border border-gray-300 px-7 py-3 text-gray-700 font-semibold hover:bg-gray-100 transition">
                                    Explore Categories
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
                                alt="Books"
                                className="w-full max-w-xl rounded-2xl shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
};

export default Home;