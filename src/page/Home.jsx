import CategorySlider from "../component/CategorySlider";
import Hero from "../component/Hero";
import SearchBox from "../component/SearchBox";
import AuthorSlider from "../component/AuthorSlider";
import BookShowcaseH1 from "../component/BookShowcaseH1";
import BookShowcaseH2 from "../component/BookShowcaseH2";
import BookShowcaseH3 from "../component/BookShowcaseH3";
import Navbar from "../component/Navbar";

const Home = () => {
    return (
        <div className="w-full min-h-screen ">

            {/* Navbar Full Width */}
        
            <SearchBox />
            <Hero />
            <CategorySlider />
            <AuthorSlider />
            <BookShowcaseH1 />
            <BookShowcaseH2 />
            <BookShowcaseH3 />

         
        </div>
    );
};

export default Home;