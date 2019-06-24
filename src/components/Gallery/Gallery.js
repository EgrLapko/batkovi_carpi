import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import photos from './photos';
import GalleryPhoto from './GalleryPhoto';
import {ProductConsumer} from '../../context/context';
import ModalImage from './ModalImage';
import { english, ukrainian } from '../../language';

export default class Gallery extends Component {
 
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <ProductConsumer>
        {value => {
          const { eng } = value;
          return (
            <div className="gallery-section section-1">          
              <img className="logo-dark" src="./images/icon.png" alt=""/>
              <Fade>
                <h2> {eng ? english.galleryTitle : ukrainian.galleryTitle} </h2>
              </Fade>
              <Fade bottom>
              <iframe title="carpi-vid" src="https://drive.google.com/file/d/1wvAY5NpbvdwYiYQqOtx8fHE6uB_cLeyN/preview" width="1024" height="580"/>
              </Fade>
              <div className="inner-section">
                <Fade bottom>
                  {
                    photos.map(item => <GalleryPhoto 
                      key = {item.id}
                      imgSrc = {item.photo}
                      photoId = {item.id}
                    />)
                  }
                </Fade>
                <ModalImage />
              </div>      
            </div>
          )
        }}
      </ProductConsumer>
        
    )
  }
}
