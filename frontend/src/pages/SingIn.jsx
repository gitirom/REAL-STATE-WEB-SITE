import React, { useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, auth, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const SingIn = () => {
    const Navigate = useNavigate();
    
    const [formData, setformData] = useState({
        email:"",
        password:"",
    });

    const {email, password} = formData;                      //destracting data from formData

    function onChange(e) {
        setformData((prevState) => ({
            ...prevState,                                    //spread syntax es6 allows an array or a string to expand in the places where zero or more arguments or elements are expected
            [e.target.id]: e.target.value,
        }));                                                 // prevState is some thing typing before 
    }

    async function onSubmit(e){
        e.preventDefault()
        try {
            const auth = getAuth()                           // calls initializeAuth () with all of the dependencies specified
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            if(userCredentials.user){
                Navigate("/");
                toast.success("SignIn was Successful");
            }
        } catch (error) {
            toast.error("Bed user credentials");
        }
    }
    return (
        <div>
            <section>
                <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
            </section>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'/*px : padding horizentaly  */>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-5 '/*medium width 67% and larger screen w */>
                    <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80" alt="key"
                    className='w-full rounded-2xl'/>
                    
                </div>
                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'/*in large screen margin left 20px */>
                        <form onSubmit={onSubmit}>
                            <input  type="email" id='email' 
                            value={email} onChange={onChange}
                            placeholder="Email Adress"
                            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-5'
                            />
                            
                            <input  type={"password"} id='password' 
                            value={password} onChange={onChange}
                            placeholder=" Password "
                            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '
                            />
                            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
                                <p className="mb-6" >Don't have a account?
                                    <Link to="/Sing-Up"  
                                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out  ml-1"> Register </Link>
                                </p>
                                <p>
                                    <Link to="/ForgetPassword" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"> ForgetPassword? </Link>
                                </p>
                            </div>
                            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 trasition duration-150 ease-in-out hover:shadow-g active:bg-blue-800"
                        type="submit">Sign in</button>
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

export default SingIn;
