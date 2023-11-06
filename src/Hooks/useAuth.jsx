import { useContext } from "react";
import { Authcontrol } from "../Auth/Authcontext";


const useAuth = () => {
    const authUtilts = useContext(Authcontrol);
    return authUtilts
};

export default useAuth;