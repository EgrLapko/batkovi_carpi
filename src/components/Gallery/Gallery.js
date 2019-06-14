import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import photos from './photos';
import GalleryPhoto from './GalleryPhoto';
import {ProductConsumer} from '../../context/context';
import ModalImage from './ModalImage';

export default class Gallery extends Component {
 
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="gallery-section section-1">          
              <img className="logo-dark" src="./images/icon.png" alt=""/>
              <Fade>
                <h2>Галерея</h2>
              </Fade>
              <Fade bottom>
                <video width="800" controls>
                  <source src="./videos/Batkovi_Carpi.mp4" type="video/mp4"/>
                </video>
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
