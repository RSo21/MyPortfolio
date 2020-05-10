import React, { Component } from "react";
import HomeMain from './HomeMain';
import HomeMyPortfolio from './HomeMyPortfolio';
import HomeFooter from './HomeFooter';
import ScrollBtn from "./ScrollBtn";



class Home  extends Component{
    render(){
        return(
            <>
            <HomeMain/>
            <HomeMyPortfolio />
            <HomeFooter />
            <ScrollBtn />
            </>
        )
    }
}


export default Home;