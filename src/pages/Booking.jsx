
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Container from "../component/Layout/Container";


const Booking = () => {
    const Rooms = useLoaderData()
    const [Rooming, setRooming] = useState(Rooms)
    console.log(Rooming);
    useEffect(() => {
        setRooming([...Rooming.sort((a, b) => { return a.PricePerNight - b.PricePerNight })])
    }, [Rooming])
    const handlefilter = (e) => {
        e.preventDefault()
        if (e.target.value == "low") {
            setRooming([...Rooming.sort((a, b) => { return a.PricePerNight - b.PricePerNight })])
        }
        else if (e.target.value == 'high') {
            setRooming([...Rooming.sort((a, b) => { return b.PricePerNight - a.PricePerNight })])
        }

    }
    return (
        <div className=" bg-gray-900   h-full w-screen relative overflow-hidden flex flex-col  pt-28">
            <Helmet>
                <title>Rooms page</title>
            </Helmet>
            <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 top-96 animate-pulse"></div>
            <div className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute -left-20  -top-56 animate-pulse"></div>
            <div className=" space-y-6">
                <p className="text-4xl font-bold text-center text-white">Our Room services</p>
                <p className="text-xl text-white text-center">please filter the Room price and Highest to Lowest or Lowest to Highest</p>
                <div className="text-center z-40">
                    <select onClick={(e) => handlefilter(e)} className="select select-accent w-full max-w-xs  ">
                        <option disabled selected>Please filter Room price?</option>
                        <option value="high">High to Low</option>
                        <option value="low">Low to High</option>
                    </select>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-10 ">
                {
                    Rooming.map(Room => <div key={Room._id}>
                        <Link to={`/api/v1/booking/${Room._id}`} className="card card-compact bg-base-100 shadow-xl">
                            <img className=" h-80 rounded-xl" src={Room.RoomImages.ImageUrl} alt="Shoes" />
                            <div className="card-body">
                                <div className="card-actions flex justify-between items-center">
                                    <h2 className="card-title">{Room.RoomImages.ImageDescription}</h2>
                                    <span>Price : $ {Room.PricePerNight}</span>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
            <div>

                <div className="my-5">
                    <Footer></Footer>
                </div>


            </div>
        </div>
    );
};

export default Booking;