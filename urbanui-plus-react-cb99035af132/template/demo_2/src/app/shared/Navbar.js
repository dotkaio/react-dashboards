import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  render () {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper">
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-chevron-double-left"></span>
          </button>
          <ul className="navbar-nav">
          <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <i className="mdi mdi-email-outline"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <h6 className="p-3 mb-0"><Trans>Messages</Trans></h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face4.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>Mark send you a message</Trans></h6>
                      <p className="text-gray mb-0">
                        <Trans>1 Minutes ago</Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face2.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>Cregh send you a message</Trans></h6>
                      <p className="text-gray mb-0">
                        <Trans>15 Minutes ago</Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face3.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>Profile picture updated</Trans></h6>
                      <p className="text-gray mb-0">
                        <Trans>18 Minutes ago</Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center cursor-pointer"><Trans>4 new messages</Trans></h6>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item ml-3">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <i className="mdi mdi-bell-outline"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                  <h6 className="p-3 mb-0"><Trans>Notifications</Trans></h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="mdi mdi-calendar"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1"><Trans>Event today</Trans></h6>
                      <p className="text-gray ellipsis mb-0">
                        <Trans>Just a reminder that you have an event today</Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="mdi mdi-settings"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1"><Trans>Settings</Trans></h6>
                      <p className="text-gray ellipsis mb-0">
                        <Trans>Update dashboard</Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="mdi mdi-link-variant"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1"><Trans>Launch Admin</Trans></h6>
                      <p className="text-gray ellipsis mb-0">
                        <Trans>New admin wow!</Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center cursor-pointer"><Trans>See all notifications</Trans></h6>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="d-md-block d-none mr-3 nav-item">
              <button className="btn btn-link nav-link"><Trans>Status</Trans></button>
            </li>
            <li className="d-md-block d-none nav-item">
              <button className="btn btn-danger btn-sm"><Trans>Trailing</Trans></button>
            </li>
            <li className="nav-item language-dropdown">
              <Dropdown alignRight>
                <Dropdown.Toggle className=" btn btn-link nav-link">
                  <Trans>English</Trans>
                </Dropdown.Toggle>

                <Dropdown.Menu className="navbar-dropdown">
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="flag-icon flag-icon-fr mr-3"></i>
                    <Trans>French</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="flag-icon flag-icon-cn mr-3"></i>
                    <Trans>Chinese</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="flag-icon flag-icon-de mr-3"></i>
                    <Trans>German</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="flag-icon flag-icon-es mr-3"></i>
                    <Trans>Spanish</Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <button className="btn btn-link nav-link">
                <i className="mdi mdi-home-circle"></i>
              </button>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
