import React from "react";
import { doSignOut } from "../../contexts/authContext/auth";

export default function Dashboard(){

    return (
        <div>
            Hello World !!
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md" onClick={doSignOut}>Log out</button>
        </div>
    )
}