import React, { Component } from "react";
import Navigation from "./Navigation";
import TypingEffect from "./TypingEffect";
import Fade from "react-reveal/Fade";

import myPhoto from '../assets/myPhoto.jpg';

class HomeMain extends Component {
    render(){
        return(
            <div className="home-main-container" id="home">
                <Navigation />
                <div className="home-main-content">
                <Fade left cascade={true}>
                    <div className="home-main-image">
                        <img className="my-photo" src={myPhoto} alt="myPhoto"/>
                    </div>
                     <div className="home-main-text">
                        <TypingEffect />
                        <p>I'm ROKSANA</p>
                        <p>Junior Front-end developer</p>
                        <p>looking for a first job</p>
                    </div>
                </Fade>
                </div>
            </div>     
        )
    }
}


export default HomeMain;