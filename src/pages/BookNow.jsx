
import { useState } from "react";
import Container from "../component/Layout/Container";
import { useLoaderData } from "react-router-dom";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const BookNow = () => {
    const { user } = useAuth()
    const Booking = useLoaderData()
    const img = Booking.RoomImages.ImageUrl
    console.log(Booking._id)

    console.log(Booking)
    // const [startDate, setStartDate] = useState(new Date());
    // console.log(startDate)
    const handleform = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const price = form.price.value;
        const size = form.size.value;
        const descript = form.descript.value;
        const startDate = form.startDate.value
        const roomid = Booking._id
        const MyUser = { email, price, size, descript, img, startDate, roomid }
        console.log(MyUser)
        const toastID = toast.loading(' Booking in...')
        axios.post('http://localhost:5000/api/v1/mybook', MyUser, {
            withCredentials: true
        })
            .then(res => {
                console.log(res.data);
                toast.success('succesful booked', { id: toastID })
            })
        form.reset()

    }

    return (
        <div className="bg-gray-900 pt-24 min-h-screen">
            <Container>
                <form className="mx-10" onSubmit={handleform}>
                    <div className="lg:flex gap-5 ">
                        <div className="form-control lg:w-1/2 w-full lg:mb-0 mb-5">
                            {/* <label className="label">
                                <span className="label-text">Email</span>
                            </label> */}
                            <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-1/2 w-full">
                            {/* <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required /> */}
                            {/* <DatePicker className="w-full py-3 rounded pl-2" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                            <input type="date" name="startDate" id="" className="w-full py-3 rounded pl-2" />


                        </div>
                    </div>
                    <div className="lg:flex gap-5">
                        <div className="form-control lg:w-1/2 w-full">
                            {/* <label className="label">
                                <span className="label-text">Email</span>
                            </label> */}
                            <input type="text" name="price" placeholder="price" defaultValue={Booking.PricePerNight} className="input input-bordered mt-8" required />
                        </div>
                        <div className="form-control lg:w-1/2 w-full">
                            {/* <label className="label">
                                <span className="label-text">Email</span>
                            </label> */}
                            <input type="text" name="size" placeholder="RoomSize" defaultValue={Booking.RoomSize} className="input input-bordered mt-8" required />
                        </div>
                    </div>
                    <textarea name="descript" defaultValue={Booking.RoomDescription} placeholder="Description" className="textarea textarea-bordered textarea-xs w-full mt-6" ></textarea>
                    <input type="submit" className="btn btn-secondary btn-outline w-full mt-4" value=" CONFIRM" />
                </form>
            </Container>
        </div>
    );
};

export default BookNow;