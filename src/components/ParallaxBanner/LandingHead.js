import React from 'react';
import Fade from 'react-reveal/Fade';

const LandingHead = (props) => {
    const {url, title, text, height} = props;

    const divStyle = {
        backgroundImage: "url(" + url + ")",
        minHeight: height + 'vh'
    };
    return (
        <div className="landing-header" style={divStyle}>
            <Fade>
                <div className="header-container">
                    <div className="header-logo">
                        <img src="./images/icon_white.png" alt=""/>
                    </div>
                    <h2 className="header-title"> {title} </h2>              
                    <p className="header-text"> {text} </p>
                </div>
            </Fade>
        </div>
    )
};

export default LandingHead;