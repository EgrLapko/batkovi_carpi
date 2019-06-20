import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import family from './family';
import { english, ukrainian } from '../../language';
import { ProductConsumer } from '../../context/context';
import FamilyCard from './FamilyCard';

export default class AboutUs extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const { eng } = value;
          return (
            <div className="about-main-container">
              <img className="logo-dark" src="./images/icon.png" alt=""/>
              <Fade>
                <div className="about-text-container">
                  <h2> {eng ? english.aboutUsTitle : ukrainian.aboutUsTitle} </h2>
                  <p> {eng ? english.aboutUsMainText : ukrainian.aboutUsMainText} </p>
                </div>  
              </Fade> 
              <div className="about-pictures-container">
                { family.map(person => {
                  return (
                    <FamilyCard
                    key = {person.id}
                    name = {eng ? person.nameENG : person.nameUA}
                    image = {person.img}
                    bio = {eng ? person.bioENG : person.bioUA}
                    />
                  )
                }) }
              </div>

            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
