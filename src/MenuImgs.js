import React from 'react';
const MenuImg = React.lazy(() => import('./MenuImg'));


function MenuImgs() {
  return (
    <div className="menuImgs">
        <div className="menuDivRow">
          <div className="menuDivImg">
            <MenuImg/>
            <MenuImg/>
            <MenuImg/>
            <MenuImg/>
            <MenuImg/>
            <MenuImg/>
            <MenuImg/>
          </div>
        </div>
      </div>
  );
}

export default MenuImgs;