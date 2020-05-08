import React, { Component } from "react";
import Navigation from "./Navigation";
import TypingEffect from "./TypingEffect";

//import myPhoto from '../assets/DSC_0562.jpg';



class HomeMain extends Component {

    state = {
        width: window.innerWidth,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render(){
        const { width } = this.state;
        const isMobile = width <= 978;

        if(isMobile){
            return(
                <>
                </>
            )
        }else{
            return(
                <div className="home-main-container" id="home">
                    <Navigation />
                    <div className="home-main-content">
                        <div className="home-main-image">
                            {/* <img className="my-photo" src={myPhoto} alt="myPhoto"/> */}

                        </div>
                        <div className="home-main-text">
                            <TypingEffect />
                            <p>I'm ROKSANA</p>
                            <p>Junior Front-end developer</p>
                            <p>looking for a first job</p>
                        </div>

                    </div>
                </div>     
            )
        }
    }
}

         
    


export default HomeMain;