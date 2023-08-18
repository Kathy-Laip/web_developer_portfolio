import React from "react";

class Site extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <div className="site">
                <img src={this.props.img} alt=""/>
                <h2>{this.props.h2}</h2>
                <p>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default Site