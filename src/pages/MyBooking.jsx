import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";

const MyBooking = () => {
    const { user } = useAuth()

    const [booking, setbooking] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/mybook?email=${user?.email}`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => { setbooking(data) }
            )

    }, [user?.email])
    console.log(booking)
    return (
        <div className="bg-gray-900 h-screen pt-24">
            <Helmet>
                <title>My Booking</title>
            </Helmet>
            <h1>hello user</h1>
        </div>
    );
};

export default MyBooking;