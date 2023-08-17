import React from "react";

class Main extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return (
            <main>
                <div className="container">
                    <div className="content">
                        <h1>Helping companies build better, scalable software.</h1>
                        <p>A future specialist in the field of frontend development, 
                        at the moment I am developing my skills in studying algorithms, 
                        page layout, animation, adapting pages to any type of screens. 
                        I also actively study algorithms and solve problems. 
                        I study spoken English and also read the documentation in it.</p>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main