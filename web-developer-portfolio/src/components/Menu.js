import React from "react";
import menu from "../Assets/Hamburger\ Menu.svg"

class Menu extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return (
            <>
                <section id="hamburger-nav">
                    <div class="responsive-nav">
                        <div class="links">
                            <a href="#">Articles</a>
                            <a href="#">Chats</a>
                            <a href="#">Awards</a>
                            <a href="#">About</a>
                        </div>
                        <div>
                            <button className="btn">Get in touch</button>
                        </div>
                     </div>
                </section>
            </>
        )
    }
}

export default Menu