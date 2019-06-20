import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default class ParallaxBanner2 extends Component {
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
            <div className = "parallax-banner" style={divStyle}>
                <Fade bottom>
                    <div className = "parallax-text-2">
                        <h2> {title} </h2>              
                        <p> {text} </p>
                        <Link to= "/products" ><h3 className="btn"> {btnName} </h3></Link>             
                    </div>
                </Fade>        
            </div>
        </React.Fragment>      
    )
  }
}
