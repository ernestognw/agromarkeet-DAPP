import React from 'react';

function Buyer (props) {
  return(
    <div className="panel panel-white">
      <div className="panel-heading clearfix"><h4 className="bloque">Lista de productos</h4><button className="btn btn-success bloque float-right">Comprar AgroTokens</button></div>
      <div className="panel-body">La subasta no ha iniciado. Espere</div>
    </div>
  )
}

export default Buyer;