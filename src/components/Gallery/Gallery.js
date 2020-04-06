import React, {useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import photos from './photos';
import GalleryPhoto from './GalleryPhoto';
import {ProductConsumer} from '../../context/context';
import { english, ukrainian } from '../../language';
import Title from '../Title';
import LogoDark from '../LogoDark';

const Gallery = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})  
  }, [])

  const options = {
    showCaption: false,
    showThumbnails: false,
    transitionSpeed: 400,
    transitionTimingFunction: "linear",
  };

  return (
    <ProductConsumer>
      {value => {
        const { eng } = value;
        return (
          <div className="gallery">          
            <LogoDark />
            <Title title={eng ? english.galleryTitle : ukrainian.galleryTitle}/>
            <Fade bottom>
            <div className="gallery__videos">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Cit8WjjoE0k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>            
              <iframe width="560" height="315" src="https://www.youtube.com/embed/SOAYTogN8yo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>
            </Fade>

            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <div className="gallery__image-container">
                  <Fade bottom>
                    {
                      photos.map(item => <GalleryPhoto 
                        key = {item.id}
                        imgSrc = {item.photo}
                        photoId = {item.id}
                      />)
                    }
                  </Fade>
                </div>      
              </SRLWrapper>
            </SimpleReactLightbox>

          </div>
        )
      }}
    </ProductConsumer>
  )
}


export default Gallery;