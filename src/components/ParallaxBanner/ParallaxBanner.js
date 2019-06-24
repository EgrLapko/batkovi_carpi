import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class ParallaxBanner extends Component {
  render() {

    const {url, title, text, height} = this.props;

    const imgUrl = url;
    const imgHeight = height;

    const divStyle = {
        backgroundImage: "url(" + imgUrl + ")",
        minHeight: imgHeight + 'vh'
    };

    return (
        <React.Fragment>      
            <div className = "parallax-banner" style={divStyle}>
                <Fade>
                    <div className = "parallax-text">
                        <img src="./images/icon_white.png" alt=""/>
                        <h2 className="original-title"> {title} </h2>              
                        <p> {text} </p>
                    </div>
                </Fade>
            </div>
        </React.Fragment>      
    )
  }
}
