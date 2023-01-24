import { getAuth, updateProfile} from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from "react-toastify";
import {db} from "../fier-base" ;
import {doc} from "firebase/firestore";
import {FcHome} from "react-icons/fc";

const Profile = () => {
    const [changeDetail, setchangeDetail] = useState(false);
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
    function onChange(e){
        setformData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    async function onsubmit(){
        try {
            if(auth.currentUser.displayName !== name){

                // update display name in firebase auth 
                await updateProfile(auth.currentUser, {displayName: name,})
                //update name in the firestore

                const docRef = doc(db, "users", auth.currentUser.uid)
                await updateDoc(docRef, {
                    name,
                } )
                toast.success("profile details updated ");

            }
        } catch (error) {
            toast.error("could not update the profile details");
        }
    }

    return (
        <>      
        <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
            <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
            <div className='w-full md:w-[50%] mt-6 px-3 '>
            <form >
                
                <input type="text" id='name' value={name}
                disabled={!changeDetail}
                onChange={onChange}
                className={`w-full px-4 py-2 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out
                ${ changeDetail && "bg-red-200 focus:bg-red-200 "}`} />
                <input type="email" id='email' value={email} disabled className='w-full px-4 py-2 text-xl text-gray-700 bg-white  border-gray-300 rounded transition ease-in-out mt-5 mb-6' />

                <div className='flex justify-between whitespace-nowrap text-sm mb-5 '>
                    <p className='flex items-center '>Do you want to change your name?
                        <span
                        onClick={() => {
                            changeDetail && onsubmit();                             // if change detail is true change the form
                            setchangeDetail((prevState) => !prevState);
                        }}
                        className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                        {changeDetail ? "Apply change" : "Edit"}
                        </span>
                    </p>
                    <p onClick={onlogOut} className='text-blue-600  hover:text-blue-700  transition ease-in-out duration-200 ml-1 cursor-pointer'>Sign-Out</p>
                    
                </div>
            </form>
            <button type='submit' className='w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:b-blue-800 '>
                <Link to="/create-listing" className='flex justify-center items-center' >
                <FcHome className='mr-1 text-3xl bg-red-200 rounded-full p-1 border-2' />
                Sell or rent your home 
                </Link>
                
            </button>
        </div>
        </section>
        
        </>
    );
}

export default Profile;
