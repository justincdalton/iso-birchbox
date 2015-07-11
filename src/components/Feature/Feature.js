/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

class Feature {

  static contextTypes = {
    title: PropTypes.string
  };

  constructor() {
    this.state = {
      items: [
        { id: 1, header: 'Top Picks Under $25', color: 'maroon', href: '/men/featured/25-and-under' },
        { id: 2, header: 'Grooming Value Kits', color: 'teal', href: '/men/featured/value-kits' },
        { id: 3, header: 'Sampled This Month', color: 'gold', href: '/men/featured/sampled-this-month' }
      ]
    };
  }

  render() {
    return (
      <div className="row">
        {this.state.items.map((item) => {
          return (
            <div key={item.id} className="span3">
              <div data-asset-broker-slot="54"
                   data-asset-broker-slot-type="json"
                   className={'mini-banner loaded text-center mini-banner-' + item.color + ' mini-banner-bdrtop'}>
              <a href={item.href}>
                <div className="vertical-center-parent">
                  <h2 className="mini-banner-hed vertical-center">{item.header}</h2>
                </div>
                <span className="mini-banner-cta narrow-hidden">Shop Now ›</span>
              </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

}

export default Feature;
