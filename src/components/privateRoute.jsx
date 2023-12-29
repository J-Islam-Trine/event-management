import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function PrivateRoute({children})
{
    const { isSignedIn, user, isLoaded } = useUser();
    const currentLocation = useLocation();


    return(
            isSignedIn 
            ? 
            <>{children}</> 
            : 
            <Navigate 
        state={{targetLocation:currentLocation.pathname}} 
            to='/login'></Navigate>
    )
}