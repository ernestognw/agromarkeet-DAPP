import React from 'react';

function Producer (props) {
  return(
    <div>
    <div className="panel panel-white">
      <div className="panel-heading clearfix"><h4>Vista del productor</h4></div>
      <div className="panel-body">
        <div className="col-md-4">Producto</div>
        <div className="col-md-4">Mayor oferta</div>
        <div className="col-md-4">Ofertante</div>
        <div className="col-md-4">
        {
          props.batchesPlaced ?
          <h4>{props.batchesPlaced.name}</h4>:
          <h4>Vacío</h4>
        }
        </div>
        <div className="col-md-4">
        {
          props.batchesPlaced ?
          <h4>{props.batchesPlaced.price}</h4>:
          <h4>Vacío</h4>
        }
        </div>
        <div className="col-md-4">
        {
          props.batchesPlaced ?
          <h4>{props.batchesPlaced.finalOwner}</h4>:
          <h4>Vacío</h4>
        }
        </div>
      </div>
    </div>
    <div className="panel panel-white">
        <div className="panel-body">
          <div className="form-group col-md-4">
            <input
              type="number"
              className="form-control"
              id="kg"
              onChange={props.handleInputChange}
              value={props.kg}
              placeholder="Kilogramos de producto"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={props.handleInputChange}
              value={props.name}
              placeholder="Nombre del producto"
            />
          </div>
          <button onClick={props.handlePlaceBatch} className="btn btn-primary col-md-4">Agregar</button>
        </div>
      </div>
      </div>
  )
}

export default Producer;