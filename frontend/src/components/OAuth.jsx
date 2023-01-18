import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import React from 'react';
import {FcGoogle} from "react-icons/fc"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {db} from "../fier-base" ;


const OAuth = () => {
    const Navigate = useNavigate();
    async function onGoogleClick(){
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()                         //class Null safety use the provider to trigger user authentication flows. For example, on web based platforms pass the provider to a Firebase method (such as signInWithPopup):  
            const result = await signInWithPopup(auth,provider)               // they return a promise so for that use async f.
            const user = result.user
            
            //check for user                                                  // if user is don't present register user in db  

            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)
            if(!docSnap.exists()){
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                });
            }

            Navigate("/");

        } catch (error) {
            toast.error("Could not authorize with Google")
        }
    }
    return (
        <div>
            <button type='button' onClick={onGoogleClick} className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 rounded uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out ' >
                <FcGoogle className='mr-2 text-2xl bg-white rounded-full ' />
                Continue with Google
            </button>
        </div>
    );
}

export default OAuth;
