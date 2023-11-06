import Tilt from 'react-parallax-tilt'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gogole from '../assets/image/icons/google 1.svg'
import facebook from '../assets/image/icons/bx_bxl-facebook.svg'
import linkedin from '../assets/image/icons/bx_bxl-linkedin.svg'
import useAuth from '../Hooks/useAuth';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Resistration = () => {
    const { signup, google } = useAuth()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [imgurl, setimgurl] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const handleform = async (e) => {
        e.preventDefault()
        const toastId = toast.loading('signUp....')
        try {
            await signup(email, password)
                .then(result => {
                    toast.success('Successfull SignUp', { id: toastId })
                    navigate('/')
                })
                .catch((err) => {
                    toast.error(err.message, { id: toastId })
                })
        }
        catch {
            (error) => {
                console.log(error.message)
            }
        }

    }
    const hanglegoogle = () => {
        const toastId = toast.loading('google logging.....')
        google()
            .then(result => {
                toast.success('Successful Login', { id: toastId })
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                toast.error(err.message, { id: toastId })
            })
    }
    return (
        <div>
            <div className=" bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center">
                <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
                <div className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute -left-20 top-96 animate-pulse"></div>
                <Tilt>
                    <div className="container h-[500px] w-96 bg-white bg-opacity-10 relative z-20 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm">
                        <form onSubmit={handleform} className="h-full flex flex-col justify-evenly items-center">
                            <div className="text-white text-2xl tracking-wider">SignUp form</div>
                            <input onBlur={(e) => setname(e.target.value)} type="text" placeholder="userName" className="text-white text-xl bg-none bg-transparent w-2/3 focus:outline-none border border-t-0 border-l-0 border-r-0 tracking-wide" />
                            <input onBlur={(e) => setimgurl(e.target.value)} type="text" placeholder="userImage" className="text-white text-xl bg-none bg-transparent w-2/3 focus:outline-none border border-t-0 border-l-0 border-r-0 tracking-wide" />
                            <input onBlur={(e) => setemail(e.target.value)} type="email" placeholder="userEmail" className="text-white text-xl bg-none bg-transparent w-2/3 focus:outline-none border border-t-0 border-l-0 border-r-0 tracking-wide" required />
                            <input onBlur={(e) => setpassword(e.target.value)} required type="password" placeholder="password" className="text-white text-xl bg-none bg-transparent w-2/3 focus:outline-none border border-t-0 border-l-0 border-r-0 tracking-wide" />
                            <input type="submit" value="SUBMIT" className=" cursor-pointer font-semibold bg-white px-5 py-1 rounded-full bg-opacity-50 hover:bg-opacity-80" />
                            <div className='flex gap-5'>
                                <img onClick={hanglegoogle} className=' cursor-pointer w-8 hover:w-10' src={gogole} alt="" />
                                <img className=' cursor-pointer w-8 hover:w-10' src={facebook} alt="" />
                                <img className=' cursor-pointer w-8 hover:w-10' src={linkedin} alt="" />
                            </div>
                            <div className='flex gap-5 text-white'>
                                <p>Already have a account?</p>
                                <Link className=' text-green-300' to={'/login'}>Login</Link>
                            </div>
                        </form>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Resistration;