import React from "react";
import jp from "../Assets/Logos/JP\ Morgan.svg"

class Header extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <header>
                <div className="navName">
                    Ekaterina Shlyapnikova
                </div>
                <nav>
                    <ul className="navbar">
                        <li>
                            <a href="#">
                                Articles
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Chats
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Awards
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                About
                            </a>    
                        </li>
                    </ul>
                </nav>
                <div>
                    <button className="btn">Get in touch</button>
                </div>
            </header>
        )
    }
}

export default Header