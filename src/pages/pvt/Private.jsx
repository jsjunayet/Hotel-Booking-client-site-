import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Private = ({ children }) => {
    const location = useLocation();

    console.log(location)
    const { user, isloading } = useAuth()
    if (isloading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/Login'} state={location.pathname}></Navigate>


};

export default Private;