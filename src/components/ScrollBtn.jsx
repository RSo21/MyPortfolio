import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";

 class ScrollBtn extends Component {
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

    render() {

        const { width } = this.state;
        const isMobile = width <= 978;

        if(isMobile){
            return(
                <div>
                    <ScrollUpButton style={{backgroundColor: "#3BA7E4", width: '1.5em', height: '1.5em'}} />
                </div>
            )

        }else{
            return(
                <div>
                    <ScrollUpButton style={{backgroundColor: "#3BA7E4"}}/>
                </div>
            );
        }
    }
}

export default ScrollBtn;
