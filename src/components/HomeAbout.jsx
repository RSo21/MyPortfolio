import React, { Component } from "react";



class HomeAbout  extends Component{
    render(){
        return(
            <div id="about">
                <p className="about-title">ABOUT ME</p>
                <div className="home-about-container">
                    <div className="home-about-past">
                        <p>THE PAST</p>
                        <p></p>

                    </div>
                    <div className="home-about-present">
                        <p>THE PRESENT</p>
                        <p></p>

                    </div>
                    <div className="home-about-future">
                        <p>THE FUTURE</p>
                        <p></p>

                    </div>

                </div>

            </div>
        )
    }
}


export default HomeAbout;