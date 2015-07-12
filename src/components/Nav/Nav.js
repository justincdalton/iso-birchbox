/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';

class NavLink {

  static propTypes = {
    link: React.PropTypes.object
  }

  render() {
    return <a href={this.props.link.url} title={this.props.link.text}>{this.props.link.text}</a>;
  }
}

class SubNav {

  static propTypes = {
    subNav: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <div></div>
        <h3>{this.props.subNav.title}</h3>
        <div>
          {this.props.subNav.links.map((link) => {
            return <NavLink key={link.url} link={link} />;
          })}
        </div>
      </div>
    );
  }
}

class Nav {

  constructor() {
    this.state = {
      subNavs: [
        {
          title: 'Birchbox Man Shop',
          links: [
            { url: '/men/shave', text: 'Beard &amp; Shave' },
            { url: '/men/style', text: 'Style' },
            { url: '/men/haircare', text: 'Hair' },
            { url: '/men/skincare', text: 'Skincare' },
            { url: '/men/tools', text: 'Tools' },
            { url: '/men/home', text: 'Home' },
            { url: '/men/fragrance-1', text: 'Fragrance' },
            { url: '/men/body', text: 'Body' },
            { url: '/men/gadgets', text: 'Gadgets &amp; Games' }
          ]
        },
        {
          title: 'Featured',
          links: [
            { url: '/birchbox-man-summer-shop', text: 'The Summer Shop' },
            { url: '/men/featured/birchbox-man-bonus-shop', text: 'Bonus Shop' },
            { url: '/men/25-and-under', text: '$25 and Under' },
            { url: '/men/featured/sampled-this-month', text: 'Sampled This Month' },
            { url: '/men/best-sellers', text: 'Best Sellers' },
            { url: '/men/featured/value-kits', text: 'Value Kits' },
            { url: '/men/featured/birchbox-exclusives', text: 'Birchbox Exclusives' },
            { url: '/men/featured/top-rated', text: 'Top Rated' }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div className="span3 narrow-hidden king-nav sidebar">
        {this.state.subNavs.map((subNav) => {
          return <SubNav key={subNav.title} subNav={subNav} />;
        })}
      </div>
    );
  }

}

export default Nav;
