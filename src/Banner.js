import React from 'react';
import banner from './images/banner.JPG';


function Banner() {
  return (
    <div>
      <div className="bannerDiv">
        <img src={banner} className="bannerImg" alt="banner"/>
      </div>
    </div>
  );
}

export default Banner;