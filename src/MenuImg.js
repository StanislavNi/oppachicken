import React from 'react';
import banner from './images/banner.JPG';


function MenuImg() {
  return (
    <div className="menuImg">
        <img src={banner} className="menuImgSrc" alt="menuImg"/>
        <div className='menuItem'>
            <p>Фрайд чикен</p>
        </div>
        <div className='menuItem'>
            <p>UZS 68 000</p>
        </div>
        <div className='minusPlus'>
          <div className='minus'>
            -
          </div>
          <div className='plus'>
            +
          </div>
        </div>
    </div>
  );
}

export default MenuImg;