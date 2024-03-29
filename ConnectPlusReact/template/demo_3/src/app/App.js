import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Header from './shared/Header';
import SettingsPanel from './shared/SettingsPanel';
import Footer from './shared/Footer';
import { withTranslation } from "react-i18next";

class App extends Component {
  state = {}
  closeBanner() {
    document.querySelector(".buy-now-banner").remove();
  }
  componentDidMount() {
    this.onRouteChanged();
  }
  render () {
    let headerComponent = !this.state.isFullPageLayout ? <Header/> : '';
    let SettingsPanelComponent = !this.state.isFullPageLayout ? <SettingsPanel/> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    return (
      <div>
        <div className="buy-now-banner">
          <div className="buynow-content">
            <img src={require("../assets/images/banner-logo.svg")} className="card-img-absolute" alt="circle" />
            <div>
              <a href="https://www.bootstrapdash.com/product/connect-plus-react/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-primary font-weight-medium text-white">Buy now</a>
              <button className="btn btn-sm close-btn" onClick={this.closeBanner}><span className="mdi mdi-close"></span><span className="d-none d-sm-inline-block ml-2">Close</span></button>
            </div>
          </div>
        </div>
        <div className="container-scroller">
          { headerComponent }
          <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
              <div className="content-wrapper">
                <AppRoutes/>
                { SettingsPanelComponent }
              </div>
              { footerComponent }
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    const { i18n } = this.props;
    const body = document.querySelector('body');
    if(this.props.location.pathname === '/layout/RtlLayout') {
      body.classList.add('rtl');
      i18n.changeLanguage('ar');
    }
    else {
      body.classList.remove('rtl')
      i18n.changeLanguage('en');
    }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }

}

export default withTranslation() (withRouter(App));
