import React from 'react';
import {Link} from 'react-router-dom';


class GoodsFooter extends React.Component {
 constructor(props) {
   super(props);
   this.state={btnstate:true};
   this.cartbtn.bind(this);
 }

 cartbtn(){
   this.setState({btnstate: !this.state.btnstate});
 }

  render() {
    return(
      <footer className="goodsfooter">
          <div className="fill-height layout align-center bgw">
              <Link to="/" className="footer-btn router-link-active">
                  <i className="image-icons footer-icon icon-home"></i>
                  <span>首页</span>
              </Link>
              <Link to='/cart' className="footer-btn">
                    <i className="image-icons footer-icon icon-cart"></i>
                    <span>购物车</span>
              </Link>
              <div className="action-box flex">
                  <a className="btn buy-btn" onClick={()=>{//console.log(this.state.btnstate);
                                                            this.props.putGoodsToCart({joincartbtn: this.state.btnstate});
                                                            //this.cartbtn.bind(this);
                                                            this.setState({btnstate: !this.state.btnstate});
                                                          }}>加入购物车</a>
              </div>
          </div>
      </footer>);
  }
};

export default GoodsFooter;
