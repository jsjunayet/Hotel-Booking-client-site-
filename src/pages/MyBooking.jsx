import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";
import Container from "../component/Layout/Container";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

const MyBooking = () => {
    const { user } = useAuth()

    // const [startDate, setStartDate] = useState(new Date());

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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/api/v1/mybook/${_id}`)
                    .then(res => {
                        refetch()
                    })


            }
        });

    }
    const [date, setdate] = useState('')
    console.log(date)
    const handleupdate = (_id) => {
        const time = { date: date }
        console.log(time);
        axios.patch(`http://localhost:5000/api/v1/mybook/update/${_id}`, time)
            .then(res => {
                console.log()
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Update",
                        text: "Your successful update",
                        icon: "success"
                    });
                }
                refetch()
            })
        setdate('')
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
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn btn-secondary btn-outline w-full" onClick={() => document.getElementById('my_modal_5').showModal()}>update</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom md:modal-middle">
                                        <div className=" bg-base-200 w-96 h-52 pt-20 lg:mt-52 mt-0 mb-32 lg:mb-0 px-2 rounded-xl shadow-xl">

                                            <form method="dialog">
                                                {/* <DatePicker className=" " selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                                                <input type="date" onChange={(e) => setdate(e.target.value)} name="Startdate" id="" />
                                                {/* if there is a button in form, it will close the modal */}
                                                <input onClick={() => handleupdate(booked._id)} type="submit" className="btn btn-secondary btn-outline mt-5 block" value="Please update" />
                                            </form>
                                        </div>
                                    </dialog>
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