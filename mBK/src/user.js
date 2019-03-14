import React from 'react';
import {Link} from 'react-router-dom'
import Footer from "./component/footer"
import './css/user.css';
import './css/home.css';


class User extends React.Component {
  render() {
    return(
      <div style={{height:"100%"}}>
        <div className="app-view-wrapper">
          <div className="content app-view app-view-with-footer">
            <header className="hd">
              <div className="ui-flex align-center">
                <div className="img">
                  <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png"/>
                </div>
                <Link to="/login">
                  <div className="name">登陆/注册</div>
                </Link>
              </div>
            </header>
            <div className="b1 ui-flex align-center justify-space-between">
              <div className="cite">我的订单</div>
              <div className="span ui-flex align-center"><a href="">全部订单 &gt;</a></div>
            </div>
            <ul className="b2 ui-flex align-center justify-space-between">
              <li><Link to='/login'>
                <div className="icon icon-pay"></div>
                <span>待付款</span>
              </Link></li>
              <li><Link to='/login'>
                <div className="icon icon-takegoods"></div>
                <span>待收货</span>
              </Link></li>
              <li><Link to='/login'>
                <div className="icon icon-fix"></div>
                <span>退换修</span>
              </Link></li>
            </ul>

            <ul className="items">
              <li className="i-member">
                <Link to='/login'>
                  <cite>会员中心</cite>
                </Link>
              </li>
              <li className="i-wallet">
                <Link to='/login'>
                  <cite>我的优惠</cite>
                </Link>
              </li>
            </ul>
            <div className="ui-line"></div>
            <ul className="items">
              <li className="i-service">
                <Link to='/login'>
                  <cite>服务中心</cite>
                </Link>
              </li>
              <li className="i-mihome">
                <Link to='/login'>
                  <cite>小米之家</cite>
                </Link>
              </li>
            </ul>
            <div className="ui-line"></div>
            <ul className="items">
              <li className="i-fcode">
                <Link to='/login'>
                  <cite>F码通信</cite>
                </Link>
              </li>
            </ul>
            <div className="ui-line"></div>
            <ul className="items">
              <li className="i-setting">
                <Link to='/'>
                  <cite>设置</cite>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Footer settingClass="user"/>
    </div>
    );
  }
};

export default User;
