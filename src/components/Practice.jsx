import React from "react"

import Image from "../assets/img/adidas.jpg";

function Practice() {
    return (
        <div className= "flex justify-center items-center h-screen">
            <div className="shadow-md">
            <div className="h-60 overflow-hidden">
                <img src="{Image}" alt="" />
            </div>
            <div className="p-5">
                <div className="flex justify-between">
                    <h3 className="font-bold">
                        Lorem ipsum dolor sit.
                    </h3>
                    <h6>GHC4500</h6>
                    
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
                
            </div>
            
        </div>
        </div>
        
    )
}
export default Practice