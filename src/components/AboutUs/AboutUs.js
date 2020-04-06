import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import family from './family';
import { english, ukrainian } from '../../language';
import { ProductConsumer } from '../../context/context';
import FamilyCard from './FamilyCard';
import Title from '../Title';
import LogoDark from '../LogoDark';

export const AboutUs = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])

  return (
    <ProductConsumer>
        {value => {
          const { eng } = value;
          return (
            <div className="about-page">
              <LogoDark />
              <Title title={eng ? english.aboutUsTitle : ukrainian.aboutUsTitle} />
              <Fade>
                <div className="about-page__textbox">
                  <p className="text"> {eng ? english.aboutUsMainText : ukrainian.aboutUsMainText} </p>
                </div>  
              </Fade> 
              <div className="about-page__images-container">
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

export default AboutUs;
