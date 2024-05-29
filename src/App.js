import React from 'react';
import './App.css';
const Header = React.lazy(() => import('./Header'));
const Banner = React.lazy(() => import('./Banner'));
const MenuName = React.lazy(() => import('./MenuName'));
const MenuImgs = React.lazy(() => import('./MenuImgs'));
const Zakaz = React.lazy(() => import('./Zakaz'));
// const Korzina = React.lazy(() => import('./Korzina'));
// const BackButton = React.lazy(() => import('./BackButton'));
// const Complete = React.lazy(() => import('./Complete'));



function App() {
  return (
      <div className="App">
        <Header/>
        <Banner/>
        <MenuName/>
        <MenuImgs/>
        <Zakaz/>
        {/* <Korzina/>
        <BackButton/> */}
        {/* <Complete/> */}
      </div>
  );
}

export default App;
