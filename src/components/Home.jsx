import React, { Component } from "react";
import HomeMain from './HomeMain';
import HomeAbout from './HomeAbout';
import HomeSkills from './HomeSkills';
import HomeMyPortfolio from './HomeMyPortfolio';
import HomeContact from './HomeContact';
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
            <HomeContact />
            <HomeFooter />
            <ScrollBtn />
            </>
        )
    }
}


export default Home;