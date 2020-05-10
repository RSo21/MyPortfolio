import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import jarsSystem from '../assets/jarsSystem.png';
import carbonFootprint from '../assets/carbonFootprint.png';
import weatherApp from '../assets/weatherApp.png';
import giveAwayApp from '../assets/giveAwayApp.png';
import catGame from '../assets/catGame.png';
import vafi from '../assets/vafi.png';

const HomeCarousel  = () => {

    return(
          <Carousel>
              <Carousel.Item>
                <p className="carousel-title">Carbon Footprint</p>
                <a target="_blank" rel="noopener noreferrer" href ="https://rso21.github.io/CarbonFootprint/">
                    <img className="my-photo" src={carbonFootprint} alt="carbon"/>
                </a>  
                <p>See the code - <a target="_blank" rel="noopener noreferrer" href ="https://github.com/RSo21/CarbonFootprint">HERE</a></p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="carousel-title">The 6-jars System</p>
                <a target="_blank" rel="noopener noreferrer" href ="https://rso21.github.io/jarsSystem/">
                    <img className="my-photo" src={jarsSystem} alt="jars"/> 
                </a> 
                <p>See the code - <a target="_blank" rel="noopener noreferrer" href ="https://github.com/RSo21/jarsSystem">HERE</a></p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="carousel-title">Simple Weather App</p>
                <a target="_blank" rel="noopener noreferrer" href ="https://rso21.github.io/WeatherApp/">
                    <img className="my-photo" src={weatherApp} alt="weather"/>  
                </a> 
                <p>See the code - <a target="_blank" rel="noopener noreferrer" href ="https://github.com/RSo21/WeatherApp">HERE</a></p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="carousel-title">VAFI shop - simple layout</p>
                <a target="_blank" rel="noopener noreferrer" href ="https://rso21.github.io/VAFI_RWD/">
                    <img className="my-photo" src={vafi} alt="vafi"/>  
                </a> 
                <p>See the code - <a target="_blank" rel="noopener noreferrer" href ="https://github.com/RSo21/VAFI_RWD">HERE</a></p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="carousel-title">Give Away App</p>
                <a target="_blank" rel="noopener noreferrer" href ="https://rso21.github.io/Give_Away_App/">
                    <img className="my-photo" src={giveAwayApp} alt="giveAway"/> 
                </a>   
                <p>See the code - <a target="_blank" rel="noopener noreferrer" href ="https://github.com/RSo21/Give_Away_App">HERE</a></p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="carousel-title">Cat Game</p>
                <a target="_blank" rel="noopener noreferrer" href ="https://rso21.github.io/Cat-Game-CL/">
                    <img className="my-photo" src={catGame} alt="catGame"/>
                </a>
              <p>See the code - <a target="_blank" rel="noopener noreferrer" href ="https://github.com/RSo21/Cat-Game-CL">HERE</a></p>
            </Carousel.Item>
          </Carousel>
    )
}

export default HomeCarousel;