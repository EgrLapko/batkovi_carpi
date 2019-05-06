import React, { Component } from 'react';

import ParallaxBanner from '../ParallaxBanner/ParallaxBanner';
import ParallaxBanner2 from '../ParallaxBanner/ParallaxBanner2';
import Section from '../Section/Section';

export default class LandingPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
    <React.Fragment>
        <ParallaxBanner
            url="./images/img1_overlayed.jpg"
            title="Batkovi Carpi" 
            text="What are your wishes? Where are you going? What are you aiming for? 
            Do you strive for greatness or power? Your life begins, your life ends ... 
            but the answer to everything is just one. And it`s..."
            height = "100"
          />
        <Section 
            title="What is 'Batkovi Carpi'?"
            text="Batkovi Carpi - it`s not just a grilled fish. It`s a philosophy.
            Philosophy of living, philosophy of thinking. This is the way of life.
            Whoever you are, whatever you do, wherever you go - Batkovi Carpi, after
            you try it, will be always in your mind."
            color = "#FEFDFD"
            icon1 = "fas fa-fish"
            icontext1 = "Not a fish, but a philosophy"
            icon2 = "fas fa-brain"
            icontext2 = "Perfect for your brain"
            icon3 = "fas fa-globe-europe"
            icontext3 = "Best quality in Europe"
        />
        <ParallaxBanner2
            url="./images/img2_overlayed.jpg"
            title="Brief history of Batkovi Carpi" 
            text="The history of 'Batkovi Carpi' dates back to August 2018. At that time, the head of the family, 
            Alexander, was at his dacha, and one sunny day he got an idea. An idea that changed the world. 
            'What will happen if I cook some carps on the fire?', he thought. Despite the fact that it was the first 
            experiment with cooking carps, the result was not only a culinary miracle, but a phenomen that 
            started a whole philosophy trend.
            'If you want to do it, just do it', said Alexander. 
            With these words, he changed the world as soon as the last carp was prepared and moved from fire to a plate."
            height = "65"
        />
        <Section 
            title="'Batkiv Shaslik' - decades of proven quality"
            text="If 'Batkovi Carpi' is a legendary product, but still a new one, then 'Batkiv shashlik' 
            is a true legend. A product whose quality is the quintessence of years of experience, 
            endeavor, experimentation, and love. And these are not empty words."
            color = "#FEFDFD"
            icon1 = "fas fa-drumstick-bite"
            icontext1 = "Pure, magnifficent taste"
            icon2 = "fas fa-utensils"
            icontext2 = "Feels really good on your tongue"
            icon3 = "fas fa-weight"
            icontext3 = "Good for your health and weight"
        />
        <ParallaxBanner2
            url="./images/img3_overlayed.jpg"
            title="Brief history of Batkiv Shashlik" 
            text="The history of the 'Batkiv Shashlik' is so old that hardly anyone will tell about it. 
            It is an elder book, forgotten on the shelf of an ancient library, hidden in the sands. 
            But decades of practice, sharpening skills and experiments do their job. 
            If you'll just try 'Batkiv Shashlik', you cannot look at other meat again. You will be reborn, 
            will feel light, refresh your head, and start a clean slate of life. A life full of harmony, 
            taste, and emotions.
            'Just try it', says Alexander.
            And your life will no longer be the same."
            height = "65"
        />
        <Section 
            title="Good Wine - it`s in our blood"
            text="So, what makes a good wine good? And someone will exclaim- good grapes, tart flavor, noble aftertaste. 
            Of course, they will be right, but ... would you really not want something more? 
            Something memorable, something completely unbelievable? Something from which life will 
            change with the first sip? Something... legendary? It's all about our wine, about our blood 
            ... about 'Lapko's blood'."
            color = "#FEFDFD"
            icon1 = "fas fa-wine-glass-alt"
            icontext1 = "International proven quality"
            icon2 = "fas fa-wine-bottle"
            icontext2 = "Rare, magical taste and aftertaste"
            icon3 = "fas fa-smile-wink"
            icontext3 = "Good for your mood and happiness"
        />
        <ParallaxBanner2
            url="./images/img4_overlayed.jpg"
            title="Brief history of 'Krow Lapkiv'" 
            text="The story of 'Krow Lapkiv' '(Lapko`s Blood)' may seem trivial to someone, but do not be deceived. 
            One day, the head of the family, Alexander, was walking throuigh his Mother`s garden, and saw some grapes, 
            which was tearing 
            through the thickness of an iron wicker fence, as if fleeing from the shadows in an earnest desire 
            to come out into the light. Alexander stretched his hand to the grapes, tried it, and realized that 
            this was exactly what he was looking for. He decided to try to make wine from this grape ... 
            And from that moment on, the world has changed. 'Just try it', said Alexander. And indeed, the explanations 
            are superfluous. Just try it."
            height = "65"
        />
    </React.Fragment>
    
    )
  }
}
