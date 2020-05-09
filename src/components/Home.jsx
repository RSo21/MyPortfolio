import React, { Component } from "react";
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';
import ScrollBtn from "./ScrollBtn";



class Home  extends Component{
    render(){
        return(
            <>
            <HomeMain/>
            <HomeFooter />
            <ScrollBtn />
            </>
        )
    }
}


export default Home;