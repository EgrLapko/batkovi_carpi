import React, { Component } from 'react';
import { ProductConsumer } from '../../context/context';

import ParallaxBanner from '../ParallaxBanner/ParallaxBanner';
import ParallaxBanner2 from '../ParallaxBanner/ParallaxBanner2';
import Section from '../Section/Section';
import { english, ukrainian } from '../../language';

export default class LandingPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
    
      <ProductConsumer>
        {value => {
          const { eng } = value;
          return (
            <React.Fragment>
              <ParallaxBanner
                url="https://i.imgur.com/qcMNHfg.jpg"
                title="Batkovi Carpi" 
                text={eng ? english.mainDesc : ukrainian.mainDesc}
                height = "100"
              />
              <Section 
                title={eng ? english.whatsCarpi : ukrainian.whatsCarpi}
                text={eng ? english.whatsCarpiDesc : ukrainian.whatsCarpiDesc}
                color = "#FEFDFD"
                icon1 = "fas fa-fish"
                icontext1 = {eng ? english.carpiIcon1 : ukrainian.carpiIcon1}
                icon2 = "fas fa-brain"
                icontext2 = {eng ? english.carpiIcon2 : ukrainian.carpiIcon2}
                icon3 = "fas fa-globe-europe"
                icontext3 = {eng ? english.carpiIcon3 : ukrainian.carpiIcon3}
              />
              <ParallaxBanner2
                url="https://i.imgur.com/ZczP30I.jpg"
                title={eng ? english.historyCarpiTitle : ukrainian.historyCarpiTitle}
                text={eng ? english.historyCarpiText : ukrainian.historyCarpiText}
                height = "65"
                btnName={eng ? english.buttonName : ukrainian.buttonName}
              />
              <Section 
                title={eng ? english.whatsShahlikTitle : ukrainian.whatsShahlikTitle}
                text={eng ? english.whatsShahlikText : ukrainian.whatsShahlikText}
                color = "#FEFDFD"
                icon1 = "fas fa-drumstick-bite"
                icontext1 = {eng ? english.shashlikIcon1 : ukrainian.shashlikIcon1}
                icon2 = "fas fa-utensils"
                icontext2 = {eng ? english.shashlikIcon2 : ukrainian.shashlikIcon2}
                icon3 = "fas fa-weight"
                icontext3 = {eng ? english.shashlikIcon3 : ukrainian.shashlikIcon3}
              />
              <ParallaxBanner2
                url="https://i.imgur.com/DGeWacD.jpg"
                title={eng ? english.historyShashlikTitle : ukrainian.historyShashlikTitle}
                text={eng ? english.historyShashlikText : ukrainian.historyShashlikText}
                height = "65"
                btnName={eng ? english.buttonName : ukrainian.buttonName}
              />
              <Section 
                title={eng ? english.whatsKrowTitle : ukrainian.whatsKrowTitle}
                text={eng ? english.whatsKrowText : ukrainian.whatsKrowText}
                color = "#FEFDFD"
                icon1 = "fas fa-wine-glass-alt"
                icontext1 = {eng ? english.krowIcon1 : ukrainian.krowIcon1}
                icon2 = "fas fa-wine-bottle"
                icontext2 = {eng ? english.krowIcon2 : ukrainian.krowIcon2}
                icon3 = "fas fa-smile-wink"
                icontext3 = {eng ? english.krowIcon3 : ukrainian.krowIcon3}
              />
              <ParallaxBanner2
                url="https://i.imgur.com/fyJyAIa.jpg"
                title={eng ? english.historyKrowTitle : ukrainian.historyKrowTitle}
                text= {eng ? english.historyKrowText : ukrainian.historyKrowText}
                height = "65"
                btnName={eng ? english.buttonName : ukrainian.buttonName}
              />
            </React.Fragment>
          )
        }}
      </ProductConsumer>
    )
  }
}
