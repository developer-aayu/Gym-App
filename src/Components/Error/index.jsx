import React from "react";
import SignUp from "../LoginComponents/SignUp.jsx";

export default function Index(){
    return (
        <div className="w-full h-100 flex flex-col gap-20 justify-center items-center">
           <h2 className="text-3xl">You does not have permission to access this page &#128577; Try logging in...</h2>
            <SignUp location="/"/>
        </div>
    )
}