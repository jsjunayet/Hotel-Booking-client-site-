import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import img from "../assets/image/banner/img1.jpg"
import Container from "../component/Layout/Container";
import { useQuery } from "@tanstack/react-query";

const Singlepage = () => {
    const singleroom = useLoaderData()
    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['roomid', singleroom?._id],
        queryFn: async () => {
            const result = await fetch(`https://assignment-11-sever-ruby.vercel.app/api/v1/reviews?roomid=${singleroom?._id}`)
            const data = await result.json()
            return data
        }
    })
    console.log(data)
    console.log(singleroom)
    return (

        <div className="">
            <Helmet>
                <title>Room Details</title>
            </Helmet>
            <div className="hero object-cover h-52" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="mt-20">
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>

            </div>
            <Container>
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div className=" col-span-2">
                        <div>
                            <div className=" relative">
                                <img src={singleroom.RoomImages.ImageUrl} className="h-[500px] rounded-xl object-cover" alt="" />
                                <p className="bg-gray-600 absolute bottom-5 right-16 text-white p-3 w-40 text-2xl font-semibold rounded z-40">Review : {data.length}</p>
                            </div>

                            <div className="w-[85%]">
                                <p className="mt-5 text-xl font-medium">{singleroom.RoomDescription}</p>
                            </div>
                        </div>

                    </div>
                    <div className=" h-96 col-span-1">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body font-medium text-xl space-y-4">
                                <h2 className="card-title">{singleroom.RoomImages.ImageDescription}</h2>
                                <p>PricePerNight : $ {singleroom.PricePerNight}</p>
                                <p>RoomSize : {singleroom.RoomSize}</p>
                                <div className="flex justify-between items-center">
                                    <p>Start: {singleroom.Availability.Start}</p>
                                    <p>End : {singleroom.Availability.End}</p>
                                </div>
                                <div className="card-actions">
                                    <Link to={`/booknow/${singleroom._id}`} className="btn btn-primary btn-outline">Book Now</Link>
                                </div>
                            </div>

                        </div>
                        {/* <div>
                            <hr className="bg-gray-900 h-1 px-2 my-3" />
                            <p className="my-2 text-xl font-medium">Review this ROOM : {data.length}</p>
                            <div>
                                {
                                    data.map((review) => <div key={review._id}>
                                        <div className="card bg-neutral text-neutral-content mt-3">
                                            <div className="card-body">
                                                <h2 className="card-title">{review.name}</h2>
                                                <p>{review.descript}</p>
                                                <p>data : {review.time}</p>

                                            </div>
                                        </div>
                                    </div>)
                                }

                            </div>


                        </div> */}
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Singlepage;