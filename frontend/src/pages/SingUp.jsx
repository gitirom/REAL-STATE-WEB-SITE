import React, { useState, }  from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {db} from "../fier-base" ;
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {AiFillEyeInvisible,  AiFillEye} from "react-icons/ai";


const SingUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const [formData, setformData] = useState({
        name:"",
        email:"",
        password:"",
    });

    const {email, password, name} = formData;                      //destracting data from formData
    
    const navigate = useNavigate();
    
    function onChange(e) {
        setformData((prevState) => ({
            ...prevState,                                    //spread syntax es6 allows an array or a string to expand in the places where zero or more arguments or elements are expected
            [e.target.id]: e.target.value,
        }));                                                 // prevState is some thing typing before 
    }
    async function onSubmit(e){
        e.preventDefault()                                 // thes is for no refrech the page when you click to sinup buuton

        try {
            const auth = getAuth()                         // first inisilize the Authentification
            const  userCredential = await
            createUserWithEmailAndPassword (               //  Firebase Auth function createUserWithEmailAndPassword automatically signs in users upon successful account creation (which does not require email verification). If you need to verify email addresses for new user sign-ups without automatic sign-in,
                auth,    
                email,
                password);
            updateProfile(auth.currentUser,{             // displayName to add the name in onSubmit function 
                displayName: name 
            } );
            

            const user = userCredential.user;
            const formDataCopy = {...formData}                 // every thing in formdata = formdatacopy
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp();          // the time that the user register
            
            await setDoc(doc(db, "users", user.uid), formDataCopy)     // these function to create a data doc in cloud firestore then return to home page 
            toast.success("Sign Up was successful");
            navigate("/");                                                                                                                  

        } catch (error) {
            toast.error("something went wrong with the registration  ");        // i replace the log of error with toast notification  
        }
    }

    return (
        <div>
            <section>
                <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
            </section>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'/*px : padding horizontally  */>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-5 '/*medium width 67% and larger screen w */>
                    <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80" alt="key"
                    className='w-full rounded-2xl'/>
                    
                </div>
                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'/*in large screen margin left 20px */>
                        <form onSubmit={onSubmit}>
                        <input  type="text" id='name' 
                            value={name} onChange={onChange}
                            placeholder="Full Name"
                            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-5'
                            />
                            <input  type="email" id='email' 
                            value={email} onChange={onChange}
                            placeholder="Email Adress"
                            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-5'
                            />
                            <div className="relative mb-6 ">
                            <input  type={showPassword ? "text" : "password"} id='password' 
                            value={password} onChange={onChange}
                            placeholder=" Password "
                            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '
                            />
                            {showPassword ? (
                                    <AiFillEyeInvisible 
                                    className="absolute right-3 top-3 text-xl cursor-pointer"
                                    onClick={() => setShowPassword((prevState) => !prevState) } 
                                     />   // if showPass false return true .                           // thes is for the showpassword part .     
                                ) : (
                                <AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" 
                                onClick={() => setShowPassword((prevState) => !prevState) } 
                                /> )}
                            </div>
                            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
                                <p className="mb-6" > have a account?
                                    <Link to="/Sing-In"  
                                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out  ml-1"> Sign In </Link>
                                </p>
                                <p>
                                    <Link to="/ForgetPassword" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"> ForgetPassword? </Link>
                                </p>
                            </div>
                            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 trasition duration-150 ease-in-out hover:shadow-g active:bg-blue-800"
                        type="submit">Sign Up</button>
                        <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-400
                        after:border-t flex after:flex-1 items-center after:border-gray-400">
                            <p className="text-center 
                            font-semibold mx-4">OR</p>
                        </div>
                        <OAuth />
                        </form>
                        
                        
                </div>
            </div>
        </div>
    );
}

export default SingUp;

