import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname); // returns the location object that contains information about the current URL

    function pathMathRoute(route){
        if(route === location.pathname){ 
            return true 
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
                        ${pathMathRoute("/") && "text-black border-b-red-500"}`} /*if pathMathRoute true do this style*/  
                        onClick={() => navigate("/")}
                        >Home</li>  

                        <li className={`cursor-pointer py-3 text-sm font-semibold
                        text-gray-400 border-b-[3px] border-b-transparent                        
                        ${pathMathRoute("/Offers") && "text-black border-b-red-500"}`} 
                        onClick={() => navigate("/Offers")}
                        >Offers</li>


                        <li className={`cursor-pointer py-3 text-sm font-semibold
                        text-gray-400 border-b-[3px] border-b-transparent                        
                        ${pathMathRoute("/Sing-In") && "text-black border-b-red-500"}`} 
                        onClick={() => navigate("/Sing-In")}
                        >Sing in</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
