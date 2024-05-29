import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function Zakaz() {
  return (
    <div className="zakazDiv">
        <div className="summa">
          <p className="summaP">Общая сумма</p>
          <p className="summaUzs">UZS 120 800</p>
        </div>
        <div className="zakazButton">
          ЗАКАЗАТЬ
        </div>
      </div>
  );
}

export default Zakaz;