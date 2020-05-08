import React, { Component } from "react";


class Navigation extends Component {
    
    render(){
        return(
            <div className="nav-container">
                <div className= "nav">
                    <a href="/">HOME</a>
                    <a href = "#about">ABOUT ME</a>
                    <a href = "#skills">SKILLS</a>
                    <a href = "#portfolio">MY PORTFOLIO</a>
                    <a href = "#contact">CONTACT</a>
                </div>
            </div>
            
             )
         }
    }

export default Navigation;