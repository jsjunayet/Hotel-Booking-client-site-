import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";
import Container from "../component/Layout/Container";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const MyBooking = () => {
    const { user } = useAuth()

    // const [booking, setbooking] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/api/v1/mybook?email=${user?.email}`, {
    //         credentials: 'include'
    //     })
    //         .then(res => res.json())
    //         .then(data => { setbooking(data) }
    //         )

    // }, [user?.email])
    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['email', user?.email],
        queryFn: async () => {
            const result = await fetch(`http://localhost:5000/api/v1/mybook?email=${user?.email}`)
            const data = await result.json()
            return data
        }

    })
    const handledelete = (_id) => {
        axios.delete(`http://localhost:5000/api/v1/mybook/${_id}`)
            .then(res => {
                refetch()
            })
    }
    return (

        <div className="bg-gray-900 min-h-screen pt-24">

            <Helmet>
                <title>My Booking</title>
            </Helmet>
            <Container>
                <div className="mt-5">
                    {
                        data.map(booked => <div key={booked._id}>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-3 border border-t-0 border-b-2 border-l-0 border-r-0 border-green-400 pb-2">
                                <div>
                                    <img src={booked.img} alt="" className="h-52 w-[500px]" />
                                </div>
                                <div className="bg-base-200 flex justify-center items-center rounded shadow-xl px-2">
                                    <div className="">
                                        <p>{booked.email}</p>
                                        <p>{booked.startDate}</p>
                                        <p>price : $ {booked.price}</p>
                                        <p>{booked.descript}</p>
                                    </div>
                                </div>
                                <div className=" space-y-3 mt-4">
                                    <button onClick={() => handledelete(booked._id)} className="btn btn-secondary btn-outline w-full block">Cancel</button>
                                    <button className="btn btn-secondary btn-outline w-full block">Update</button>
                                    <button className="btn btn-secondary btn-outline w-full block">Review</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default MyBooking;