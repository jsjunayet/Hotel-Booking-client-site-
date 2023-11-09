import Container from '../../component/Layout/Container'
import PropTypes, { func } from 'prop-types'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import img from '../../../src/assets/image/icons/images__1_-removebg-preview (1).png'
const MainLayout = ({ children }) => {
    const { user, logout } = useAuth()
    function changebg() {
        const navber = document.getElementById('navber')
        const scorllValue = window.scrollY
        // console.log(scorllValue)
        if (scorllValue < 150) {
            navber.classList.remove("bg-slate-400");
        }
        else {
            navber.classList.add("bg-slate-400")

        }

    }
    useEffect(() => {
        window.addEventListener('scroll', changebg)
    }, [])
    const hangleSignout = () => {
        const toastID = toast.loading(' LogOut...')
        logout()
            .then(result => {
                toast.success('Successfull Logout', { id: toastID })
            })
            .then(err => {
                toast.error(err.message, { id: toastID })
            })
    }

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div id='navber' className="w-full navbar fixed  z-40">
                        <Container>
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 text-white"><img src={img} className='h-20 w-40 object-cover' alt="" /></div>
                            <div className="flex-none hidden lg:block">
                                <div className="mr-5 space-x-3 text-white">
                                    {/* Navbar menu content here */}
                                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>Home</NavLink>
                                    <NavLink to={'/room'} className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>Rooms</NavLink>
                                    {
                                        user ? <> <NavLink to={'/booking'} className={({ isActive }) => isActive ? 'btn btn-secondary mr-5' : 'btn btn-ghost mr-5'}>My Bookings</NavLink>
                                            <NavLink onClick={hangleSignout} className={({ isActive }) => isActive ? 'btn btn-secondary text-black btn-outline' : 'btn btn-ghost'}>Logout</NavLink></>
                                            : <NavLink to={'/login'} className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>Login</NavLink>

                                    }
                                </div>
                            </div>
                        </Container>
                    </div>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></label>
                    <div className="menu p-4 w-80 min-h-full bg-gray-900 pt-20 space-y-4 text-white">
                        {/* Sidebar content here */}
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>Home</NavLink>
                        <NavLink to={'/room'} className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>Rooms</NavLink>

                        {
                            user ? <> <NavLink to={'/booking'} className={({ isActive }) => isActive ? 'btn btn-secondary mb-5' : 'btn btn-ghost mb-5'}>My Bookings</NavLink>
                                <NavLink onClick={hangleSignout} className={({ isActive }) => isActive ? 'btn btn-secondary text-black btn-outline' : 'btn btn-ghost'}>Logout</NavLink></>
                                : <NavLink to={'/login'} className={({ isActive }) => isActive ? 'btn btn-secondary' : 'btn btn-ghost'}>Login</NavLink>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
MainLayout.propTypes = {
    children: PropTypes.node,
}

export default MainLayout;