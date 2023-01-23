
import { Outlet , Navigate } from 'react-router-dom';
import  UseAuthStatus from '../hooks/useAuthStatus';
import Spinner from './Spinner';


const  PrivateRoute =() =>{
    const { loggedIn, checkingStatus } = UseAuthStatus();

    if(checkingStatus){
        return <Spinner /> ;                               // its just a loading  icon                      
    }
    
    return  loggedIn ? <Outlet /> : <Navigate to="/Sing-In" /> ;                  /*if the user is sign-in is gone render the profile page  // React-Outlet provides two components which aid in cross-component transclusion */
    
}
export default PrivateRoute;

