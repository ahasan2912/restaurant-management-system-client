import Banner from "../components/Banner";
import CustomerReview from "../components/CustomerReview";
import Foods from "./Foods";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;