
import { useState } from 'react';
import Tilt from 'react-parallax-tilt'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Result } from 'postcss';
import { Helmet } from 'react-helmet';
const Login = () => {

    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    // console.log(navigate)
    const handleform = async (e) => {
        e.preventDefault();
        console.log(email, password);
        const toastID = toast.loading(' Logging in...')
        try {
            await login(email, password)
                .then(result => {
                    toast.success('Succesful Login', { id: toastID })
                    navigate(location?.state ? location.state : '/')
                })
                .catch((err) => {
                    toast.error(err.message, { id: toastID })

                })


        }
        catch {
            (err) => {
                console.log(err.message)
            }
        }
    }

    return (
        <div className=" bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center">
            <Helmet>
                <title>Login page</title>
            </Helmet>
            <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
            <div className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute -left-20 top-96 animate-pulse"></div>
            <Tilt>
                <div className="container h-96 w-96 bg-white bg-opacity-10 relative z-20 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm">
                    <form onSubmit={handleform} className="h-full flex flex-col justify-evenly items-center">
                        <div className="text-white text-2xl tracking-wider">Login form</div>
                        <input type="text" onBlur={(e) => setemail(e.target.value)} placeholder="useremail" className="text-white text-xl bg-none bg-transparent w-2/3 focus:outline-none border border-t-0 border-l-0 border-r-0 tracking-wide" />
                        <input type="password" onBlur={(e) => setpassword(e.target.value)} placeholder="password" className="text-white text-xl bg-none bg-transparent w-2/3 focus:outline-none border border-t-0 border-l-0 border-r-0 tracking-wide" />
                        <input type="submit" value="SUBMIT" className=" cursor-pointer font-semibold bg-white px-5 py-1 rounded-full bg-opacity-50 hover:bg-opacity-80" />
                        <div className='flex gap-5 text-white'>
                            <p>please create account?</p>
                            <Link className=' text-green-300' to={'/resistration'}>Resistration</Link>
                        </div>
                    </form>
                </div>
            </Tilt>
        </div>
    );
};

export default Login;