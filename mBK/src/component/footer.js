import React from 'react';
import {Link} from 'react-router-dom'
import "../css/home.css"


class Footer extends React.Component {
  constructor(props) {
    super(props);
  //  this.state={curr:-1};
  //  this.handleClick.bind(this);
  }
/*  这种适用于一个页面，不会发生跳转的情况
  shouldComponentUpdate(nextProps, nextState) {
    // 优化点击已经curr的不需要重新render
    return !(nextState.curr === this.state.curr)
  }

  handleClick(i) {
    this.setState({curr: i})
  }
*/
  render() {
  //  var curr = this.state.curr;
    return(
      <div>
        <footer className="app-bottom-wrapper">
          <div className="fill-height box-flex align-center">
            <Link to='/' className="flex">
              <i className={(this.props.settingClass==="home"?'icon-focus-home':'icon-home')+' app-bottom-icon image-icons'}></i>
              <span className={this.props.settingClass==="home"?'font-focus':''}>首页</span>
            </Link>
            <Link to='/category' className="flex">
              <i className={(this.props.settingClass==="category"?'icon-focus-category':'icon-category')+' app-bottom-icon image-icons'}></i>
              <span className={this.props.settingClass==="category"?'font-focus':''}>分类</span>
            </Link>
            <Link to='/cart' className="flex">
              <i className={(this.props.settingClass==="cart"?'icon-focus-cart':'icon-cart')+' app-bottom-icon image-icons'}></i>
              <span className={this.props.settingClass==="cart"?'font-focus':''}>购物车</span>
            </Link>
            <Link to='/user' className="flex">
              <i className={(this.props.settingClass==="user"?'icon-focus-user':'icon-user')+' app-bottom-icon image-icons'}></i>
              <span className={this.props.settingClass==="user"?'font-focus':''}>我的</span>
            </Link>
          </div>
        </footer>
      </div>);
  }
};

export default Footer;
