import React, { Component } from "react";
import HomeMain from './HomeMain';
import HomeSkills from './HomeSkills';
import HomeMyPortfolio from './HomeMyPortfolio';
import HomeFooter from './HomeFooter';
import ScrollBtn from "./ScrollBtn";



class Home  extends Component{
    render(){
        return(
            <>
            <HomeMain/>
            <HomeSkills />
            <HomeMyPortfolio />
            <HomeFooter />
            <ScrollBtn />
            </>
        )
    }
}


export default Home;