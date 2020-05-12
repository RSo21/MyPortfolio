import React from "react";


const HomeSkills  = () => {

    return(
        <div id="skills">
            <p className="skills-title">MY SKILLS</p>
            <div className="home-skills-icons-container">
                <div className="home-skills-icons-column">
                    <div className="home-skills-icons">
                        <div className="skills-icon">
                            <i class="fab fa-html5"></i>
                            <p>HTML5</p>
                        </div>
                        <div className="skills-icon">
                            <i class="fab fa-css3"></i>
                            <p>CSS3</p>
                        </div>
                        <div className="skills-icon">
                            <i class="fab fa-sass"></i>
                            <p>Sass</p>
                        </div>
                    </div>
                    <div className="home-skills-icons skills-center">
                        <div className="skills-icon">
                            <i class="fab fa-js"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="skills-icon">
                            <i class="fab fa-github"></i>
                            <p>Github</p>
                        </div>
                    </div>                 
                </div>
                <div className="home-skills-icons-column">
                    <div className="home-skills-icons">
                        <div className="skills-icon">
                            <i class="fab fa-bootstrap"></i>
                            <p>Bootstrap</p>
                        </div>
                        <div className="skills-icon">
                            <i class="fab fa-react"></i>
                            <p>React</p>
                        </div>
                        <div className="skills-icon">
                            <i class="fab fa-slack"></i>
                            <p>Slack</p>
                        </div>
                    </div>
                    <div className="home-skills-icons skills-center">
                        <div className="skills-icon">
                            <i class="fab fa-trello"></i>
                            <p>Trello</p>
                        </div>
                        <div className="skills-icon">
                            <i class="fab fa-npm"></i>
                            <p>npm</p>
                        </div>  
                        <div className="skills-icon">
                            <i class="fab fa-gulp"></i>
                            <p>Gulp</p>
                        </div> 
                    </div> 
                </div>  
            </div> 
        </div>
    )
}

export default HomeSkills;