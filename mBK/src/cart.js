import React from 'react';
import {Link} from 'react-router-dom'
import Footer from "./component/footer"
import Head from './component/head'
import './css/home.css';
import {Navs,Navbar,FormGroup,Button,FormControl} from 'react-bootstrap';

class Cart extends React.Component {
  render() {
    return(
      <div className="app-view-wrap">
          <div className="app-view">
              <Head
                headleftcontent={<a href="javascript:history.back();"><i className="image-icons icon-back" ></i></a>}
                headmiddlecontent={"购物车"}
                headrightcontent={<Link to='/search'><i className="image-icons app-header-icon icon-search"></i></Link>}
                elhiddle={"hiddle"}
              />
              <Footer settingClass="cart"/>
          </div>
      </div>);
  }
};

export default Cart;
