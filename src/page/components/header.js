import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="page-header">
      <div className="search-form">
        <form action="/" method="GET">
          <div className="input-group">
            <input
              type="text"
              name="search"
              className="form-control search-input"
              placeholder="Type something..."
            />
            <span className="input-group-btn">
              <button
                className="btn btn-default"
                id="close-search"
                type="button"
              >
              <i className="icon-close" />
              </button>
            </span>
          </div>
        </form>
      </div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="logo-sm">
              <a id="sidebar-toggle-button">
                <i className="fa fa-bars" />
              </a>
              <a className="logo-box" href="index.html">
                <img className="logo-image" src="images/isotype.svg" alt="isotype" />
                <span>
                  <img className="logo-image" src="images/logotype.svg" alt="logotype" />
                </span>
              </a>
            </div>
            {/* <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="/bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <i className="fa fa-angle-down" />
            </button> */}
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a
                  id="collapsed-sidebar-toggle-button"
                >
                  <i className="fa fa-bars" />
                </a>
              </li>
              {/* <li>
                <a id="toggle-fullscreen">
                  <i className="fa fa-expand" />
                </a>
              </li>
              <li>
                <a id="search-button">
                  <i className="fa fa-search" />
                </a>
              </li> */}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {/* <li>
                <a
                  className="right-sidebar-toggle"
                  data-sidebar-id="main-right-sidebar"
                >
                  <i className="fa fa-envelope" />
                </a>
              </li>
              <li className="dropdown">
                <a
                
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell" />
                </a>
                <ul className="dropdown-menu dropdown-lg dropdown-content">
                  <li className="drop-title">
                    Notifications<a href="/" className="drop-title-link">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <div className="slimScrollDiv">
                    <li className="slimscroll dropdown-notifications notification">
                      <ul className="list-unstyled dropdown-oc">
                        <li>
                          <a href="/">
                            <span className="notification-badge bg-primary">
                              <i className="fa fa-photo" />
                            </span>
                            <span className="notification-info">
                              Finished uploading photos to gallery{" "}
                              <b>"South Africa"</b>.
                              <small className="notification-date">20:00</small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <span className="notification-badge bg-primary">
                              <i className="fa fa-at" />
                            </span>
                            <span className="notification-info">
                              <b>John Doe</b> mentioned you in a post "Update
                              v1.5".
                              <small className="notification-date">06:07</small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <span className="notification-badge bg-danger">
                              <i className="fa fa-bolt" />
                            </span>
                            <span className="notification-info">
                              4 new special offers from the apps you follow!
                              <small className="notification-date">
                                Yesterday
                              </small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <span className="notification-badge bg-success">
                              <i className="fa fa-bullhorn" />
                            </span>
                            <span className="notification-info">
                              There is a meeting with <b>Ethan</b> in 15
                              minutes!
                              <small className="notification-date">
                                Yesterday
                              </small>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <div className="slimScrollBar" />
                    <div className="slimScrollRail" />
                  </div> 
                </ul>
              </li> */}
              <li className="dropdown user-dropdown">
                <a
                  href="/"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={props.photoURL ? props.photoURL : "http://via.placeholder.com/36x36"}
                    alt=""
                    className="img-circle"
                  />
                </a>
                <ul className="dropdown-menu">
                  {/* <li>
                    <a href="/">Profile</a>
                  </li>
                  <li>
                    <a href="/">Calendar</a>
                  </li>
                  <li>
                    <a href="/">
                      <span className="badge pull-right badge-danger">42</span>Messages
                    </a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <a href="/">Account Settings</a>
                  </li> */}
                  <li>
                    <a onClick={props.signOut}>Log Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {
        <div className={!props.showNotif ? 'alert alert-warning alert-dismissible fade' : 'alert alert-warning alert-dismissible fade in'} role="alert">
        <button
          onClick={props.notifHandler}
          type="button"
          className="close"
          action="close"
        >
          <span aria-hidden="true" action="close">×</span>
        </button>
        ¡Alto ahí vaquero! Esta funcionalidad aún no está lista, pero estamos trabajando en ella.
      </div>
      }
    </div>
  );
}

export default Header;
