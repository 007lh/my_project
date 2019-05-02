import React from 'react';
import {Link} from 'react-router-dom'
import "../css/home.css"
import "../css/cart.css"


class CartFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
        <footer className="app-bottom-wrapper">
          <div className="fill-height box-flex align-center">
            <div className="all-price">
              总金额:{" "+this.props.allprice}元
            </div>
            <Link to='/' className="continue-buy">
            继续购买
            </Link>
            <div className="buy-goods">
              去结算
            </div>
          </div>
        </footer>);
  }
};

export default CartFooter;
