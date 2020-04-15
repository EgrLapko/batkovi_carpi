import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import { connect } from 'react-redux';

import family from './family';
import { english, ukrainian } from '../../language';
import FamilyCard from './FamilyCard';
import Title from '../Title';
import LogoDark from '../LogoDark';

export const AboutUs = ({ langENG }) => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])

  return (
    <div className="about-page">
      <LogoDark />
      <Title title={langENG ? english.aboutUsTitle : ukrainian.aboutUsTitle} />
      <Fade>
        <div className="about-page__textbox">
          <p className="text"> {langENG ? english.aboutUsMainText : ukrainian.aboutUsMainText} </p>
        </div>  
      </Fade> 
      <div className="about-page__images-container">
        { family.map(person => {
          return (
            <FamilyCard
            key = {person.id}
            name = {langENG ? person.nameENG : person.nameUA}
            image = {person.img}
            bio = {langENG ? person.bioENG : person.bioUA}
            />
          )
        }) }
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  langENG: state.app.eng
})

export default connect(mapStateToProps)(AboutUs);
