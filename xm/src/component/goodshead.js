import React from 'react';
import '../css/else.css'

class GoodsHead extends React.Component {
  render(){
    return(
      <header className="goodspage">
        <div className="fill-height header-layout align-center">
            <a href="javascript:history.back();" className="header-btn">
              <i className="image-icons header-icon icon-back" ></i>
            </a>
            <div className="app-head-middle">
            </div>
            <a className="header-btn"><i className="image-icons header-icon icon-share"></i></a>
        </div>
      </header>
    );
  }
}

export default GoodsHead;
