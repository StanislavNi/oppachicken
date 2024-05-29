import React from 'react';
import complete from './images/complete.png';


function Banner() {
  return (
    <div className='complete'>
        <img src={complete} className="completeImg" alt="complete"/>
        <div className='completeText'>
            <p>Спасибо за заказ!🤗</p>
            <p>Оператор свяжется с вами для подтверждения заказа.</p>
        </div>
        <div className='completeButton'>
            OK
        </div>
    </div>
  );
}

export default Banner;