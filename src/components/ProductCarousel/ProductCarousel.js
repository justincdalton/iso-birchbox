/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import http from 'superagent';

class ProductCarousel extends React.Component {

  static contextTypes = {
    title: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProductLeftValue = this.productLeftValue();
  }

  componentDidMount() {
    var url = 'https://www.birchbox.com/shop/productapi/data/get/noStockStatus/1/onlyInStock/1/id/' + this.props.ids;
    http
      .get(url)
      .end((err, res) => {
        if (res.ok) {
          this.setState({
            products: res.body
          });
        } else {
          throw err;
        }
      }.bind(this));
  }

  productLeftValue() {
    var val = 0;

    return (index) => {
      if (index > 6) {
        return null;
      } else if (index > 1) {
        val += 160;
      } else if (index === 1) {
        val += 140;
      }

      return val + 'px';
    };
  }

  render() {
    return (
      <div className="carousel-products margin-tout" data-carousel-products="category" data-product-category="999" data-async-loading="">
        <h2 className="title">
          {this.props.title}
          <a href={this.props.url} className="pull-right narrow-hidden">Shop All {this.props.title}</a>
        </h2>
        <div className="carousel-inner bbox-grid-products" style={{height: '282px', opacity: 1}}>

          {this.state.products.map((product, index) => {
            return (
              <div className="span2 bbox-item"
                  data-product-id={product.entity_id}
                  data-favoritable="true"
                  data-grid-pos="1"
                  style={{left: this.getProductLeftValue(index), opacity: 1}}>
                <div className="product-image">
                  <a href="http://www.birchbox.com/shop/jack-black-double-duty-face-moisturizer" title={product.name}>
                  <img data-full-src={'https://www.birchbox.com/shop/media/catalog/product/cache/1/small_image/220x/9df78eab33525d08d6e5fb8d27136e95' + product.small_image} alt={product.name} src={'https://www.birchbox.com/shop/media/catalog/product/cache/1/small_image/220x/9df78eab33525d08d6e5fb8d27136e95' + product.small_image} className="" style={{opacity: 1, display: 'inline'}} />
                  </a>
                </div>
                <div className="product-info">
                  <a href={'http://www.birchbox.com/shop/' + product.url_key} title={product.name} className="product_name">{product.name}</a>
                    <span className="acr-stars acr-stars-small ratings-info" data-rating="4.4000" data-count="207">
                      <span className="ratings-average ratings-stars ratings-4_5" title="4.4000 out of 5 stars"></span>
                      <span className="reviews-count"><a href="/shop/feedback/review/index/product_id/781/" title="Read all reviews" className="prp-link">207</a></span>
                    </span>
                  <div className="product_price">
                    <div className="price-box">
                      <span className="regular-price">
                          <span className="price">${product.price}</span>
                      </span>
                    </div>
                    <span className="label-free-shipping">Ships Free</span>
                  </div>
                </div>
                <div className="favorite-toggle favorite-toggle-add icon-heart-empty" title="@@BBOX_ADD_TO_FAVORITES" style={{display: 'none', opacity: 0}}></div>
                <div className="favorite-toggle favorite-toggle-remove icon-heart" title="@@BBOX_REMOVE_FROM_FAVORITES" style={{display: 'none'}}></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductCarousel;
