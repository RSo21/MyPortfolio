import React, { Component } from "react";



class HomeAbout  extends Component{
    render(){
        return(
            <div id="about">
                <p className="about-title">ABOUT ME</p>
                <div className="home-about-container">
                    <div className="home-about-past">
                        <p>THE PAST</p>
                        <hr></hr>
                        <p className="about-text">Lawyer by profession, but it wasn't my way. 
                        I always felt that I would like to do something different, and then I discovered programming and that's what I would like to do.
                        In September 2019 I started JavaScript Developer: React intensive course organized by Coders Lab in Poznań, 
                        Poland, where I studied programming intensively.  </p>

                    </div>
                    <div className="home-about-present">
                        <p>THE PRESENT</p>
                        <hr></hr>
                        <p className="about-text">Now I am coding every day and I am looking for my first job as a Junior FrontEnd Developer. 
                        I am still working on my portfolio to present my skills from the best side.
                        Every day I learn a lot of new things that motivate me to keep going.
                        I am actively looking for a job and I believe that I will start a new job soon.
                        </p>

                    </div>
                    <div className="home-about-future">
                        <p>THE FUTURE</p>
                        <hr></hr>
                        <p className="about-text">I know that a programmer's job is not easy, especially for a junior who still has a lot to learn, 
                        but I know that when I take up my first job I will give it 100%.
                        I believe that as a junior fronend developer I will have many development opportunities.
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}


export default HomeAbout;