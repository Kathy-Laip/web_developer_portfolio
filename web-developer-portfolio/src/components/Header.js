import React from "react";
import jp from "../Assets/Logos/JP\ Morgan.svg"
import menu from "../Assets/Hamburger\ Menu.svg"
import close from "../Assets/Close.svg"

class Header extends React.Component{
    constructor(options){
        super(options)
    }


    toggleMenu(){
        var nav = document.getElementById("hamburger-nav")
        if (nav.style.height === "0px") {
            nav.style.height = "100%";
        } else {
            nav.style.height = "0px";
        }
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
                <img className="menu" alt="" src={menu} onClick={this.toggleMenu}/>
            </header>
        )
    }
}

export default Header