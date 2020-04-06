import React from 'react';


const GalleryPhoto = ({ imgSrc, photoId }) => {
  return (
    <div className="gallery-image">
      <img id={photoId} src={imgSrc} alt="" />
    </div>
  )
}

export default GalleryPhoto;