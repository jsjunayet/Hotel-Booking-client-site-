import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "react-rating";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const Review = () => {
    const { data = [], isLoading, isError } = useQuery({
        queryKey: ['myreviews'],
        queryFn: async () => {
            const res = await axios.get('https://assignment-11-sever-ruby.vercel.app/api/v1/review');
            return res.data;
        },
    });
    console.log(data);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (isError) {
        return <div>Error fetching data</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className=" mb-10">
            <div className="w-full   m-auto">
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews</h2>
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div key={d._id} className="bg-gray-800 h-[450px] text-white rounded-lg shadow-lg">
                                <div className="h-56  bg-indigo-500 flex justify-center items-center">
                                    <img src={d?.img} alt={d?.name} className="h-44 w-44 rounded-full" />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4 p-4">
                                    <p className="text-xl font-semibold">{d.name}</p>
                                    <Rating
                                        initialRating={d.number} // You should replace this with the actual rating from your data
                                        emptySymbol={<IoMdStar className="text-2xl" />}
                                        fullSymbol={<IoMdStarOutline className="text-2xl" />}
                                        readonly
                                    />
                                    <p>{d?.descript}</p>
                                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read more</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Review;
