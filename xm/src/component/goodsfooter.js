import React from 'react';
import {Link} from 'react-router-dom';

class GoodsFooter extends React.Component {
  render() {
    return(
      <footer className="goodsfooter">
          <div className="fill-height layout align-center bgw">
              <Link to="/" className="footer-btn router-link-active">
                  <i className="image-icons footer-icon icon-home"></i>
                  <span>首页</span>
              </Link>
              <a className="footer-btn">
                  <i className="image-icons footer-icon icon-cart"></i>
                  <span>购物车</span>
              </a>
              <div className="action-box flex">
                  <a className="btn buy-btn">加入购物车</a>
              </div>
          </div>
      </footer>);
  }
};

export default GoodsFooter;
