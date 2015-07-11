/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './LandingPage.less';
import withStyles from '../../decorators/withStyles';
import Skyline from '../Skyline';
import Feature from '../Feature';
import Spotlight from '../Spotlight';
import ProductCarousel from '../ProductCarousel';
import Nav from '../Nav';

@withStyles(styles)
class LandingPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Birchbox';
    this.context.onSetTitle(title);
    return (
      <div id="site-content">
        <Skyline />
        <div className="container position-relative">
          <div className="row">
            <div className="span3">
              <Nav />
            </div>
            <div className="span9">
              <Feature />
              <Spotlight />
            </div>
          </div>
          <div>
            <ProductCarousel
              title="Best Sellers"
              url="/men/featured/best-sellers"
              ids="781,3128,4812,5314,5326,6295,6817,7434,7779,11049,12762,13882,14770,14884,17150,1321,8403,10122,16821,17025,17512,18736,18942,1305" />
            <ProductCarousel
              title="Beard & Shave"
              url="men/shave"
              ids="3240,3817,4771,782,12834,13648,7108,7621,7936,7937,8631,10122,11006,11007,11088,13896,16354,18642,18739,18960,2278,3820,3823,7772" />
            <ProductCarousel
              title="Style"
              url="men/style"
              ids="16292,16396,20228,20229,20783,20955,13761,15725,16890,18919,19277,2566,10036,10448,10477,11083,11242,11390,11608,11993,12516,12542,12545,12553" />
          </div>
        </div>
      </div>
    );
  }

}

export default LandingPage;
