import React from 'react'
import bannerImage from '../assets/banner-image.svg'
const Banner = () => {
  return (
    <div className="banner-container">
        <div className="title-section">
            <h1>Smarter without distractions</h1>
            <p>Newsfeed for ortho experts</p>
        </div>
        <div className="image-section">
        <img
          src={bannerImage}
          alt="Example"
          className="img-fluid" 
        />
        </div>
    </div>  
  )
}

export default Banner