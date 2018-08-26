import React from "react";
import './sidebar.css';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="page-sidebar">
      <a className="logo-box" href="/">
        <img className="logo-image" src="images/isotype.png" alt="isotype"/>
        <span><img className="logo-image" src="images/logotype.png" alt="logotype"/></span>     
      </a>
      <a id="sidebar-toggle-button-close" className="close-button">
        <i className="fa fa-times"></i>
      </a>
      <div className="slimScrollDiv"><div className="page-sidebar-inner">
        <div className="page-sidebar-menu">
            <ul className="accordion-menu">
                <li className="active-page open">
                    <a href="/">
                        <i className="menu-icon fa fa-user-circle"></i><span>Comprador</span>
                    </a>
                </li>
                <li className="active-page open">
                    <a href="/producer">
                        <i className="menu-icon fa fa-user-circle-o"></i><span>Productor</span>
                    </a>
                </li>
                <li className="active-page open">
                    <a href="/admin">
                        <i className="menu-icon fa fa-dashboard"></i><span>Admin</span>
                    </a>
                </li>
            </ul>
        </div>
      </div>
      <div className="slimScrollBar"></div>
      <div className="slimScrollRail"></div>
      </div>
    </div>
  );
}

export default Navbar;
