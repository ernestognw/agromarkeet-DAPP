import React from 'react';

function AppLayout (props) {
  return (
    <div className="page-container">    
      {props.children}
    </div>
  )
}

export default AppLayout;