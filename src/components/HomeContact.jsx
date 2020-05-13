import React, { Component } from "react";



class Home  extends Component{
    render(){
        return(
            <div id="contact">
                <p className="contact-title">CONTACT</p>
                <p className="contact-element">Send me an email on: roksanasobczak11@gmail.com</p>
                <p className="contact-element">Text me an: <a target="_blank" rel="noopener noreferrer" href ="https://www.linkedin.com/in/roksana-sobczak/"><i class="fab fa-linkedin"></i></a></p>
                <p className="contact-element">.. or find me: <a target="_blank" rel="noopener noreferrer" href ="https://github.com/RSo21"><i class="fab fa-github"></i></a></p>
            </div>
        )
    }
}


export default Home;