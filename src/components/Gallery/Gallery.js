import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ReactBnbGallery from 'react-bnb-gallery';
import photos from './photos';
import GalleryPhoto from './GalleryPhoto';

export default class Gallery extends Component {

  state = {
    galleryOpened: false
  }
 
  toggleGallery = () => {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const photoList = photos.map(item => <GalleryPhoto
      key = {item.id}
      imgSrc = {item.photo}
      toggleGallery = {this.toggleGallery}
      activePhotoPressed={this.activePhotoPressed} 
    />);

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
            <button className="btn" onClick={this.toggleGallery}>Відкрити галерею</button>
          </Fade>


          <div className="inner-section">
            <Fade bottom>
              {photoList} 
              <ReactBnbGallery
                show={this.state.galleryOpened}
                photos={photos}
                onClose={this.toggleGallery}
                activePhotoPressed={this.activePhotoPressed} 
              /> 
            </Fade>
          </div>      

        </div>
    )
  }
}
