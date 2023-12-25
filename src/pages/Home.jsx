import { Helmet } from "react-helmet";

import Container from "../component/Layout/Container";
import Bannar1 from "../component/Bannar1";
import Location from "../component/Location";
import Section from "../component/Section";
import Bannar from "../component/Bannar";
import Footer from "./Footer";
import Review from "./Review";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <Bannar1></Bannar1>
            <Container>
                <Bannar></Bannar>
                <Review></Review>
                {/* <Section></Section> */}
                <Location></Location>
                <div className="my-5">
                    <Footer></Footer>
                </div>


                {/* <Bannar></Bannar> */}
                {/* <BestProduct></BestProduct> */}

            </Container>
        </div>
    );
};

export default Home;