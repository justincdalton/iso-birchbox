/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';

class FeatureItem {

  static propTypes = {
    item: React.PropTypes.object
  }

  render() {
    return (
      <div className="span3">
        <div data-asset-broker-slot="54"
             data-asset-broker-slot-type="json"
             className={'mini-banner loaded text-center mini-banner-' + this.props.item.color + ' mini-banner-bdrtop'}>
        <a href={this.props.item.href}>
          <div className="vertical-center-parent">
            <h2 className="mini-banner-hed vertical-center">{this.props.item.header}</h2>
          </div>
          <span className="mini-banner-cta narrow-hidden">Shop Now ›</span>
        </a>
        </div>
      </div>
    );
  }
}

class Feature {

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
          return <FeatureItem key={item.id} item={item} />;
        })}
      </div>
    );
  }

}

export default Feature;
