import React from 'react';


function KorzinaItem() {
  return (
    <div className="korzinaItem">
        <div className='itemText'>
            <div className='menuItem'>
                <p>Фрайд чикен</p>
            </div>
            <div className='menuItem'>
                <p>UZS 68 000</p>
            </div>
        </div>
        <div className='itemRight'> 
            <div className='minusPlus'>
            <div className='minus'>
                <p className='pItem'>-</p>
            </div>
            <div className='plus'>
                <p className='pItem'>+</p>
            </div>
            </div>
            <div className='many'>
                <p>22</p>
            </div>
        </div>
    </div>
  );
}

export default KorzinaItem;