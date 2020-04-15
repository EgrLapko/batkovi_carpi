import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import ParallaxBanner from '../ParallaxBanner/ParallaxBanner';
import Section from '../Section/Section';
import { english, ukrainian } from '../../language';
import LandingHead from '../ParallaxBanner/LandingHead';

export const LandingPage = ({ langENG }) => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])

  return (
    <React.Fragment>
      <LandingHead
        url="https://i.imgur.com/qcMNHfg.jpg"
        title="Batkovi Carpi" 
        text={langENG ? english.mainDesc : ukrainian.mainDesc}
        height = "100"
      />
      <Section 
        title={langENG ? english.whatsCarpi : ukrainian.whatsCarpi}
        text={langENG ? english.whatsCarpiDesc : ukrainian.whatsCarpiDesc}
        color = "#FEFDFD"
        icon1 = "fas fa-fish"
        icontext1 = {langENG ? english.carpiIcon1 : ukrainian.carpiIcon1}
        icon2 = "fas fa-brain"
        icontext2 = {langENG ? english.carpiIcon2 : ukrainian.carpiIcon2}
        icon3 = "fas fa-globe-europe"
        icontext3 = {langENG ? english.carpiIcon3 : ukrainian.carpiIcon3}
      />
      <ParallaxBanner
        url="https://i.imgur.com/ZczP30I.jpg"
        title={langENG ? english.historyCarpiTitle : ukrainian.historyCarpiTitle}
        text={langENG ? english.historyCarpiText : ukrainian.historyCarpiText}
        height = "60"
        btnName={langENG ? english.buttonName : ukrainian.buttonName}
      />
      <Section 
        title={langENG ? english.whatsShahlikTitle : ukrainian.whatsShahlikTitle}
        text={langENG ? english.whatsShahlikText : ukrainian.whatsShahlikText}
        color = "#FEFDFD"
        icon1 = "fas fa-drumstick-bite"
        icontext1 = {langENG ? english.shashlikIcon1 : ukrainian.shashlikIcon1}
        icon2 = "fas fa-utensils"
        icontext2 = {langENG ? english.shashlikIcon2 : ukrainian.shashlikIcon2}
        icon3 = "fas fa-weight"
        icontext3 = {langENG ? english.shashlikIcon3 : ukrainian.shashlikIcon3}
      />
      <ParallaxBanner
        url="https://i.imgur.com/DGeWacD.jpg"
        title={langENG ? english.historyShashlikTitle : ukrainian.historyShashlikTitle}
        text={langENG ? english.historyShashlikText : ukrainian.historyShashlikText}
        height = "60"
        btnName={langENG ? english.buttonName : ukrainian.buttonName}
      />
      <Section 
        title={langENG ? english.whatsKrowTitle : ukrainian.whatsKrowTitle}
        text={langENG ? english.whatsKrowText : ukrainian.whatsKrowText}
        color = "#FEFDFD"
        icon1 = "fas fa-wine-glass-alt"
        icontext1 = {langENG ? english.krowIcon1 : ukrainian.krowIcon1}
        icon2 = "fas fa-wine-bottle"
        icontext2 = {langENG ? english.krowIcon2 : ukrainian.krowIcon2}
        icon3 = "fas fa-smile-wink"
        icontext3 = {langENG ? english.krowIcon3 : ukrainian.krowIcon3}
      />
      <ParallaxBanner
        url="https://i.imgur.com/fyJyAIa.jpg"
        title={langENG ? english.historyKrowTitle : ukrainian.historyKrowTitle}
        text= {langENG ? english.historyKrowText : ukrainian.historyKrowText}
        height = "60"
        btnName={langENG ? english.buttonName : ukrainian.buttonName}
      />
    </React.Fragment>
  )
}


const mapStateToProps = (state) => ({
  langENG: state.app.eng
})

export default connect(mapStateToProps)(LandingPage);
