import {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {getAuth, onAuthStateChanged} from "firebase/auth";


const Header = () => {
    const [pageState, setpageState] = useState("Sing-In");
    const auth = getAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);                                            // returns the location object that contains information about the current URL

    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{                                    // if user sign in so in the place of Sign-in in nav bar replaced with profile. 
            if(user){
                setpageState("Profile");
            }else{
                setpageState("Sing-In");
            }
        } );
    }, [auth]);

    function pathMatchRoute(route){
        if(route === location.pathname){ 
            return true ;
        }
    }
    
    
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div >
                    <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt='logo' className='h-5 cursor-pointer '
                    onClick={() => navigate("/") } /*to navigate into navigate*//> 
                </div>
                <div>                   
                    <ul className='flex space-x-10 '>
                        <li className={`cursor-pointer py-3 text-sm font-semibold
                        text-gray-400 border-b-[3px] border-b-transparent                         
                        ${pathMatchRoute("/") && "text-black border-b-red-500"}`} /*if pathMathRoute true do this style*/  
                        onClick={() => navigate("/")}
                        >Home</li>  

                        <li className={`cursor-pointer py-3 text-sm font-semibold
                        text-gray-400 border-b-[3px] border-b-transparent                        
                        ${pathMatchRoute("/Offers") && "text-black border-b-red-500"}`} 
                        onClick={() => navigate("/Offers")}
                        >Offers</li>


                        <li className={`cursor-pointer py-3 text-sm font-semibold
                        text-gray-400 border-b-[3px] border-b-transparent                        
                        ${(pathMatchRoute("/Sing-In") || pathMatchRoute("/Profile")) && "text-black border-b-red-500"
                    }`} 
                        onClick={() => navigate("/Profile")}
                        > 
                        {pageState}
                        
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
