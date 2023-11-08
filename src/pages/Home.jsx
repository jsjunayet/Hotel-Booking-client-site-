import { Helmet } from "react-helmet";

import Container from "../component/Layout/Container";
import Bannar1 from "../component/Bannar1";
import Location from "../component/Location";
import Section from "../component/Section";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <Bannar1></Bannar1>
            <Container>
                <Section></Section>
                <Location></Location>

                {/* <Bannar></Bannar> */}
                {/* <BestProduct></BestProduct> */}

            </Container>
        </div>
    );
};

export default Home;