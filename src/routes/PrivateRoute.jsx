import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="flex items-center justify-center min-h-[60vh]"><span className="loading loading-bars loading-lg"></span></div>
    }

    if (user?.email) {
        return children;
    }
    
    return <Navigate to={'/login'} state={location.pathname} replace></Navigate>
};

export default PrivateRoute;