import { useLoaderData } from "react-router-dom";


const Singlepage = () => {
    const singleroom = useLoaderData()
    console.log(singleroom)
    return (
        <div className="pt-20">
            <h1>hello siglepage</h1>
        </div>
    );
};

export default Singlepage;