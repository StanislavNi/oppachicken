import React from 'react';
import banner from './images/banner.JPG';
const Zakaz = React.lazy(() => import('./Zakaz'));


const KorzinaItem = React.lazy(() => import('./KorzinaItem'));

function Korzina() {
  return (
    <div className="korzina">
        <h2>Корзина</h2>
        <div className='korzinaUp'>
            <img src={banner} className="korzImg" alt="menuImg"/>
            <h5 >Ваш текущий заказ</h5>
        </div>
        <KorzinaItem/>
        <KorzinaItem/>
        <KorzinaItem/>
        <KorzinaItem/>
        <KorzinaItem/>
        <Zakaz/>
    </div>
  );
}

export default Korzina;