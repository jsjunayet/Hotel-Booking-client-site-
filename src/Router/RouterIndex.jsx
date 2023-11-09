import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Resistration from "../pages/Resistration";
import Home from "../pages/Home";

import Booking from "../pages/Booking";
import MyBooking from "../pages/MyBooking";
import Error from "../pages/Error";
import Singlepage from "../pages/Singlepage";
import BookNow from "../pages/BookNow";
import Private from "../pages/pvt/Private";


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
                path: '/room',
                element: <Booking></Booking>,
                loader: () => fetch('https://assignment-11-sever-ruby.vercel.app/api/v1/booking')

            },
            {
                path: '/api/v1/booking/:id',
                element: <Singlepage></Singlepage>,
                loader: ({ params }) => fetch(`https://assignment-11-sever-ruby.vercel.app/api/v1/booking/${params.id}`)
            },
            {
                path: '/booknow/:id',
                element: <Private><BookNow></BookNow></Private>,
                loader: ({ params }) => fetch(`https://assignment-11-sever-ruby.vercel.app/booknow/${params.id}`)
            },
            {
                path: '/booking',
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