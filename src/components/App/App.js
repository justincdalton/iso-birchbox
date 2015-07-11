/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import LandingPage from '../LandingPage';
// import AppStore from '../../stores/AppStore';
// import Header from '../Header';
// import ContentPage from '../ContentPage';
// import ContactPage from '../ContactPage';
// import LoginPage from '../LoginPage';
// import RegisterPage from '../RegisterPage';
// import NotFoundPage from '../NotFoundPage';
// import Feedback from '../Feedback';
// import Footer from '../Footer';


@withContext
@withStyles(styles)
class App {

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  // shouldComponentUpdate(nextProps) {
  //   return this.props.path !== nextprops.path;
  // }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

  render() {
    return <LandingPage />;
  }

}

export default App;
