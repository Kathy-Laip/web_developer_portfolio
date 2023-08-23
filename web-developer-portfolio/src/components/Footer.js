import React from "react";
import twit from "../Assets/Social\ Icons/Twitter.svg";
import linked from "../Assets/Social\ Icons/LinkedIn.svg";
import github from "../Assets/Social\ Icons/Github.svg"


class Footer extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return (
            <footer>
                <div className="containerFooter">
                    <div className="navName">
                        Ekaterina Shlyapnikova
                    </div>
                    <div className="contacts">
                        <img src={twit} alt=""/>
                        <img src={linked} alt=""/>
                        <img src={github} alt=""/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer