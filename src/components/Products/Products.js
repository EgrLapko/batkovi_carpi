import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Products extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div className="products-inner-container">
          <img className="logo-dark" src="./images/icon.png" alt=""/>
          <Fade>
            <div className="products-text-container">
              <h2>Our personal three parts of infinity</h2>
              <p>Keep in mind that we are not usual e-commerce store. If you want to purchase some of these
              godlike goodies, you have to email us on <span> Batkovi_Carpi@gmail.com </span> first to make and order. Or write your e-mail
              in the section below and we will contact you as soon as possible.</p>
              
              <div className="form-container">
                  <form className="form-inline" action="">
                    <input type="email" id="email" placeholder="Enter email" name="email"/>
                    <a className="submit-btn" href='/'>Submit</a>
                  </form>
              </div>       
            </div>
          </Fade>

          <div className="cards-container">

            <Fade bottom>
              <div className="card">
                <img src="./images/wine2.jpg" alt=""/>
                <h3>Wine "Krow Lapkiv", 0.7l</h3>
                <div className="product-details">
                  <h3>150$ / bottle</h3>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="card">
                <img src="./images/img2.jpg" alt=""/>
                <h3>Batkovi Carpi</h3>
                <div className="product-details">
                  <h3>80$ / kg </h3>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="card">
                <img src="./images/shashlik1.jpg" alt=""/>
                <h3>Batkiv Shashlik</h3>
                <div className="product-details">
                  <h3>95$ / kg</h3>
                </div>
              </div>
            </Fade>

          </div>    
        </div>
    )
  }
}
