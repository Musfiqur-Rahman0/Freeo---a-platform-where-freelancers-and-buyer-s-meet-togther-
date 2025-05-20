import Lottie from 'lottie-react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import signupAnimation from "../assets/signupAnimation.json"


const style ={
    height : "100% ",
    
    
}



const Signup = () => {
    return (
        <div className='grid grid-cols-2 max-w-7xl mx-auto'>
            <Lottie animationData={signupAnimation} style={style}/>

           <form   className='w-full  flex flex-col items-center justify-center   h-full space-y-8'>
                    <div className='space-y-2 text-center'>
                        <h2 className='text-5xl font-bold'>Welcome back</h2>
                        <p className='text-gray-600 text-sm'>Welcome back chief please enter your details</p>
                    </div>
                    <div className='space-y-5 w-4/5 '>
                       
                        <div className=" grid grid-cols-2 gap-4">
                        <div className='w-full space-y-1'>   
                            <label htmlFor="email">First Name</label>
                            <input type="text" placeholder='Enter your email' className='py-2 w-full rounded-md shadow-sm border border-gray-300 px-3'/>
                        </div>
                        <div className='w-full space-y-1'>   
                            <label htmlFor="email">Last Name</label>
                            <input type="text" placeholder='Enter your email' className='py-2 w-full rounded-md shadow-sm border border-gray-300 px-3'/>
                        </div>
                    </div>
                     <div className="space-y-1 flex flex-col">
                        <label htmlFor="email">Photo url</label>
                        <input type="text" placeholder='Enter your email' className='py-2 rounded-md shadow-sm border border-gray-300 px-3'/>
                    </div>
                     <div className="space-y-1 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='Enter your email' className='py-2 rounded-md shadow-sm border border-gray-300 px-3'/>
                    </div>
                    <div className="space-y-1 flex flex-col">
                        <label htmlFor="email">Password</label>
                          <input type="text" placeholder='Enter your email' pattern='^(?=.*[a-z])(?=.*[A-Z]).{6,}$' required className='py-2 rounded-md shadow-sm border border-gray-300 px-3'/>
                    </div>
                     
                      <div className='w-full space-y-4'>
                        <input type="submit" class= " text-center bg-blue-600 text-white  w-full py-2 cursor-pointer rounded-md" value="Register"/>
                        <button type="button" class= "flex items-center justify-center gap-2 text-center  border border-gray-300 w-full py-2 cursor-pointer rounded-md" >
                            <FcGoogle size={24}/>
                           <span> Sign in with Google</span>
                        </button>
                        <p className='text-center'>Already have an account? <Link to="/login" className='cursor-pointer text-red-500 font-semibold'>Login here</Link></p>
                      </div>
                    </div>
            </form>
        </div>
    );
};

export default Signup;