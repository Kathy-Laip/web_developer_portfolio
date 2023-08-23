import React from "react";

class Interes extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return (
            <div className="containerInteres">
                <div className="contentInteres">
                    <h2>Interested in working with me?</h2>
                    <p>I`m active on all social media platforms listed below, but you
                    can also me an email and I will get back to you within 24-28 hours.</p>
                </div>
                <btn className="btn">Get in touch</btn>
            </div>
        )
    }
}

export default Interes