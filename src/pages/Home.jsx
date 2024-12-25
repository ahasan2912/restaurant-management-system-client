import Banner from "../components/Banner";
import CustomerReview from "../components/CustomerReview";
import Foods from "./Foods";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <div className="mt-12 bg-[url('/src/assets/banner.png')] h-[70vh] bg-no-repeat bg-cover bg-center hidden lg:block"></div>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;