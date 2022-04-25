import React from "react"
import Navbar from "./NavBar"

export default function Page1(){
    return(
        <div id="page1">
            <div className="block">
                <Navbar/>
                <div className=" pt-10 pl-10">
                    <h1 className="text-5xl font-semibold text-white">
                        A simple way to <br></br> compile online
                    </h1>
                </div>
            </div>

        </div>
    )
}