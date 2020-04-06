import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default class ParallaxBanner extends Component {
  render() {

    const {url, title, text, height, btnName} = this.props;

    const imgUrl = url;
    const imgHeight = height;

    const divStyle = {
        backgroundImage: "url(" + imgUrl + ")",
        minHeight: imgHeight + 'vh'
    };

    return (
        <React.Fragment>      
            <div className="parallax-banner" style={divStyle}>
                <Fade bottom>
                    <h2 className="parallax-title"> {title} </h2>              
                    <p className="parallax-desc"> {text} </p>
                    <button className="btn"><Link to= "/products">{btnName}</Link></button>            
                </Fade>        
            </div>
        </React.Fragment>      
    )
  }
}
