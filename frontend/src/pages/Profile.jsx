import { getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
    const Navigate = useNavigate();
    const auth = getAuth();
    const [formData, setformData] = useState({
        name: auth.currentUser.displayName,                          // cannot read properties of null here => the page rerendering before we get the infor.
        email: auth.currentUser.email,
    });

    const {name, email} = formData ;

    function onlogOut(){                                             // Sign-out function
        auth.signOut();
        Navigate("/");
    }

    return (
        <>      
        <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
            <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
            <div className='w-full md:w-[50%] mt-6 px-3 '>
            <form >
                
                <input type="text" id='name' value={name} disabled className='w-full px-4 py-2 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out ' />
                <input type="email" id='email' value={email} disabled className='w-full px-4 py-2 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out mt-5 mb-6' />

                <div className='flex justify-between whitespace-nowrap text-sm '>
                    <p className='flex items-center '>Do you want to change your name?
                        <span className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>Edit</span>
                    </p>
                    <p onClick={onlogOut} className='text-blue-600  hover:text-blue-700  transition ease-in-out duration-200 ml-1 cursor-pointer'>Sign-Out</p>
                </div>
            </form>
        </div>
        </section>
        
        </>
    );
}

export default Profile;
