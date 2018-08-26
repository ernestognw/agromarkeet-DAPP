import React from "react";

function Admin(props) {
  console.log(props.isBidStarted)
  return (
    <div>
      <div className="panel panel-white">
        <div className="panel-heading clearfix">
          <h4>Administrador de Subasta</h4>
        </div>
        <div className="panel-body">
          <h4 className="col-md-6"> 
            {
              !props.isBidStarted || props.isBidFinished ? 
              'Subasta no está en curso' :
              'Subasta en curso'
            }
          </h4>

          <button onClick={props.handleFinishBid} className="btn btn-danger col-md-6">
            Cerrar subasta
          </button>
        </div>
      </div>
      <div className="col-md-3" />
      <button onClick={props.handleStartBid} className="btn btn-success col-md-6 text-center">
        Abrir subasta
      </button>
    </div>
  );
}

export default Admin;
