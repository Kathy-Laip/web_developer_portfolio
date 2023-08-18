import React from "react";
import walmart from "../Assets/Logos/Walmart.svg"
import jp from "../Assets/Logos/JP\ Morgan.svg"
import visa from "../Assets/Logos/Visa.svg"
import tinder from "../Assets/Logos/Tinder.svg"
import samsung from "../Assets/Logos/Samsung.svg"
import verizon from "../Assets/Logos/Verizon.svg"

class Companies extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return (
            <div className="twist">
                    <img src={walmart} alt=""/>
                    <img src={jp} alt=""/>
                    <img src={visa} alt=""/>
                    <img src={tinder} alt=""/>
                    <img src={samsung} alt=""/>
                    <img src={verizon} alt=""/>
            </div>
        )
    }
}

export default Companies