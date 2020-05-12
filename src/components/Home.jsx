import React, { Component } from "react";
import HomeMain from './HomeMain';
import HomeAbout from './HomeAbout';
import HomeSkills from './HomeSkills';
import HomeMyPortfolio from './HomeMyPortfolio';
import HomeFooter from './HomeFooter';
import ScrollBtn from "./ScrollBtn";



class Home  extends Component{
    render(){
        return(
            <>
            <HomeMain/>
            <HomeAbout />
            <HomeSkills />
            <HomeMyPortfolio />
            <HomeFooter />
            <ScrollBtn />
            </>
        )
    }
}


export default Home;