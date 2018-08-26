import React from "react";
import "./content-layout.css";

function ContentLayout(props) {
  return (
    <div className="page-content">
      <div className="page-inner">{props.children}</div>
    </div>
  );
}

export default ContentLayout;
