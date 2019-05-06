import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Section extends Component {
  render() {

    const { title, text, color, icon1, icontext1, icon2, icontext2, icon3, icontext3 } = this.props;


    const divStyle = {
        backgroundColor: color,
    };

    return (
        <section className="landing-section" style = {divStyle}>
          <Fade bottom>
            <div className="section-container">
                <h2> {title} </h2>
                <p> {text} </p>
            </div>
            <div className="icons-container">
                <div className="section-icon">
                  <p> <i className= {icon1} ></i> </p>
                  <p> {icontext1} </p>
                </div>
                <div className="section-icon">
                  <p> <i className= {icon2} ></i> </p>
                  <p> {icontext2} </p>
                </div>
                <div className="section-icon">
                  <p> <i className= {icon3} ></i> </p>
                  <p> {icontext3} </p>
                </div>
            </div>
          </Fade>       
      </section>
    )
  }
}
