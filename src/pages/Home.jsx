import { Helmet } from "react-helmet";
import Bannar from "../component/Bannar";
import BestProduct from "../component/BestProduct";
import Container from "../component/Layout/Container";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <Container>
                <Bannar></Bannar>
                {/* <BestProduct></BestProduct> */}
            </Container>
        </div>
    );
};

export default Home;