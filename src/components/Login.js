import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [issignform,setIssignform]=useState(true);
    const toggleSignInform=()=>{
        setIssignform(!issignform)
    }
    return (
        <div className="w-50">
            <Header/>
        <div className="relative min-h-screen flex justify-center items-center">
            {/* Background Image */}
            <div>
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="Background"
                />
            </div>

            {/* Content */}
            <form className="w-3/12 absolute p-12 bg-black  top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                {(issignform)?"sign In":"Sign Up"}
                    </h1>
                    {/* conditional rendering */}
                    {!issignform && (<input
                 type="text" 
                 placeholder="Name" 
                 className="p-4 my-4 block w-full rounded-lg bg-gray-700" />)}
                
                <input
                 type="text" 
                 placeholder="Email Address" 
                 className="p-4 my-4 block w-full rounded-lg bg-gray-700" />
                <input type="password" 
                placeholder="Password" 
                className="p-4 my-4 block w-full rounded-lg bg-gray-700" />
                <button className="p-4 my-6  block bg-red-700 w-full rounded-lg" >
                {(issignform)?"sign In":"Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
                {(issignform)?"New to Netflix? Sign up now."
                :"Already registered? sign in now"}</p>
            </form>
            
        </div>
        
        </div>
    );
};

export default Login;
