import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';

export default class GalleryPhoto extends Component {
  render() {

    const {imgSrc, photoId} = this.props;

    return (
      <ProductConsumer>
        {value => {
          const {handleModal} = value;
          return (
            <div className="gallery-image">
              <img onClick={() => handleModal(photoId, imgSrc)} id={photoId} src={imgSrc} alt="" />
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
