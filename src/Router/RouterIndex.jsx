import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Resistration from "../pages/Resistration";
import Home from "../pages/Home";

import Booking from "../pages/Booking";
import MyBooking from "../pages/MyBooking";
import Error from "../pages/Error";


const RouterIndex = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'Room',
                element: <Booking></Booking>,
                loader: () => fetch('http://localhost:5000/api/v1/booking')

            },
            {
                path: 'Booking',
                element: <MyBooking></MyBooking>,

            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/resistration',
        element: <Resistration></Resistration>
    },
])

export default RouterIndex;