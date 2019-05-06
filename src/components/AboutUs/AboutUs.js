import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class AboutUs extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="about-main-container">
        <img className="logo-dark" src="./images/icon.png" alt=""/>
        <Fade>
          <div className="about-text-container">
            <h2>Who is Lapko family?</h2>
            <p>The origin of the Lapko family takes its beginning from the time of the Tripoli kingdom, 
            but information about the family`s origin has not reached our modern era. Now the Lapko family 
            is not just a friendly, big family, but also a brand, a mark of quality, an example to follow for 
            many companies, both large and small. The family’s philosophy rests on three pillars of 
            its greatness - fried carps, kebabs, and red wine. And speaking about creating these three components, 
            the Lapko family succeeded like no other in this world.</p>
          </div>  
        </Fade> 
        <div className="about-pictures-container">

          <Fade bottom>
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam1.jpg)"}}>
              <h4>Olexandr Lapko</h4>
              </div>
              <div className="back-side">
                <h3>Head of the family</h3>
                <p>The head of the family and the inventor of the three main pillars of humanity - fried carps, 
                kebabs, and red wine. Jack of all trades, skilled cook, loving father, philanthropist.</p>
              </div>
            </div>
          </Fade>

          <Fade bottom>          
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam2.jpg)"}}>
              <h4>Olena Lapko</h4>
              </div>
              <div className="back-side">
                <h3>Second head of the family</h3>
                <p>The wife of Alexander. Master of fine sarcasm, the best break dancer in the country,
                 the first and main taster of branded wine. The only muse of Alexander, a loving, 
                 but not a trivial, mother, as well as an excellent cook.</p>
              </div>
            </div>
          </Fade>     

          <Fade bottom> 
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam3.jpg)"}}>
              <h4>Yehor Lapko</h4>
              </div>
              <div className="back-side">
                <h3>The older son</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </Fade>

          <Fade bottom>                                   
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam4.jpg)"}}>
              <h4>Anastation Lapko</h4>
              </div>
              <div className="back-side">
                <h3>The older daughter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </Fade>    

          <Fade bottom> 
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam5.jpg)"}}>
              <h4>Stephen Lapko</h4>
              </div>
              <div className="back-side">
                <h3>The youngest son</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </Fade> 

          <Fade bottom>           
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam6.jpg)"}}>
              <h4>Maria Lapko</h4>
              </div>
              <div className="back-side">
                <h3>The youngest daughter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </Fade>                 
                
        </div>  
      </div>
    )
  }
}
