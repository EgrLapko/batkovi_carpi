import React, { Component } from 'react'

export default class GalleryPhoto extends Component {
  render() {

    const {imgSrc, openLightbox, index} = this.props;

    return (
      <div className="gallery-image">
        <img onClick={openLightbox} index={index} src = {imgSrc} alt="" />
      </div>
    )
  }
}
