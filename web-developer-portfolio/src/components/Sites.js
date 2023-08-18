import React from "react";
import spense from "../Assets/Spense.png"
import yelp from "../Assets/YelpCamp.png"
import Site from "./Site";

class Sites extends React.Component{
    constructor(opitions){
        super(opitions)
    }

    render(){
        return (
            <div className="sites">
                <Site img={spense} text={"Rethinking the way writers get paid, " +
                    "an open-sorce platform designed to help writers focus more " +
                    "on writing, and less on when and how they'll get paid. Project in collaboration " +
                    "with Codewell.cc"}
                    h2={"Spense.com"}
                    />
                <Site img={yelp} text={"Rethinking the way writers get paid, " +
                "an open-sorce platform designed to help writers focus more " +
                "on writing, and less on when and how they'll get paid. Project in collaboration " +
                "with Codewell.cc"}
                h2={"YelpCamp.com"}
                />
            </div>
        )
    }
}

export default Sites