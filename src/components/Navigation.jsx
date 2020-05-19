import React, { Component } from "react";
import {slide as Menu } from "react-burger-menu";
import MenuIcon from "../assets/menu.png";


class Navigation extends Component {
    state = {
        width: window.innerWidth,
        navBackground: "",
        fontColor: ''
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "transparent" : "rgba(255, 255, 255, 0.95)";
            const navFont = window.scrollY < 100 ? " rgb(255, 255, 255)" : "rgb(0, 0, 0)";
            this.setState({ 
                navBackground: backgroundcolor,
                fontColor: navFont,
            });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    

    // handleClick() {
    //     this.setState({
    //         open: !this.state.open
    //     });
    // } 

    render(){
        const { width, navBackground, fontColor } = this.state;
        const isMobile = width <= 978;

        if(isMobile){
            return(
                <div className="mobile-nav">
                    <div><img className = "icon-menu-nav" src = {MenuIcon} alt = "menuIcon"/>
                     </div>
                     <Menu className = "menu-mobile bm-overlay" pageWrapId={"page-wrap"} isOpen={true} width={ 170 }>
                         <p activeclass="active" spy="true" offset={50} duration={500} id="page-wrap">
                            <a href="#home">HOME</a>
                         </p>
                         <p activeclass="active" spy="true" offset={50} duration={500}>
                            <a href = "#about">ABOUT ME</a>
                         </p>
                         <p activeclass="active" spy="true" offset={50} duration={500}>
                            <a href = "#skills">SKILLS</a>
                         </p>
                         <p activeclass="active" spy="true" offset={50} duration={500}>
                            <a href = "#portfolio">MY PORTFOLIO</a>
                         </p>
                         <p activeclass="active" spy="true" offset={50} duration={500}>
                            <a href = "#contact">CONTACT</a>
                         </p>
                     </Menu>
                </div>
            )
        }else{
            return(
                <div className="nav-container" style={{backgroundColor: navBackground}}>
                    <div className= "nav">
                        <a href="#home" style={{color: fontColor}}>HOME</a>
                        <a href = "#about" style={{color: fontColor}}>ABOUT ME</a>
                        <a href = "#skills" style={{color: fontColor}}>SKILLS</a>
                        <a href = "#portfolio" style={{color: fontColor}}>MY PORTFOLIO</a>
                        <a href = "#contact" style={{color: fontColor}}>CONTACT</a>
                    </div>
                </div>
             )
         }
    }
}

export default Navigation;