
import { Outlet , Navigate } from 'react-router-dom';
import  UseAuthStatus from '../hooks/useAuthStatus';


const  PrivateRoute =() =>{
    const { loggedIn, checkingStatus } = UseAuthStatus();

    if(checkingStatus){
        return <h3>Loading...</h3>
    }
    
    return  loggedIn ? <Outlet /> : <Navigate to="/Sing-In" /> ;                  /*if the user is sign-in is gone render the profile page  // React-Outlet provides two components which aid in cross-component transclusion */
    
}
export default PrivateRoute;

