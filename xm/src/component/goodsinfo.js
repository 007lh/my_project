import React from"react"
import {Link} from 'react-router-dom'
import "../css/goodsinfo.css"

class GoodsInfo extends React.Component {
  constructor(props){
    super(props);
    this.state={goodswindow:true,
                buynum:1};
    this.closeGoodsWindow.bind(this);
  }

  closeGoodsWindow() {
    this.setState({goodswindow: !this.state.goodswindow});
  }

  addOne(){
    this.setState({buynum: this.state.buynum+1});
  }

  minusOne() {
    if(this.state.buynum>1){
      this.setState({buynum: this.state.buynum-1});
    }
  }

  render() {
    return(
      <div className={"giwrap "+(this.props.winstate?(this.state.goodswindow?"":"hiddle"):(this.state.goodswindow?"hiddle":""))}>
        <div className="gibg"></div>
        <div className="gicontent">
          <div className="giclose">
            <i className="image-icons close-icon" onClick={this.closeGoodsWindow.bind(this)}></i>
          </div>
          <div className="giname">
            <div className="gipic">
              <img src='//i8.mifile.cn/a1/pms_1530806532.69052620.jpg' className="gi-img"/>
            </div>
            <div className="ginamestyle">
              <div className="giprice">￥1699<span className="raw-price">￥2299</span></div>
              <div className="gitext">小米8 SE 6GB+128GB 深灰 </div>
            </div>
          </div>
          <div className="gispecificifon">
            <div className="giversion">
              <div style={{}} className="info-title">版本</div>
              <div className="version-info"></div>
              <div className="version-info"></div>
            </div>
            <div className="gicolor">
              <div className="info-title">颜色</div>
              <div>深灰</div>
            </div>
            <div className="ginum">
              <div style={{fontSize:"1.5rem"}}>购买数量</div>
              <div className="ginumwrap">
                <div className="minus" onClick={()=>{this.minusOne()}}>-</div>
                <div className="buynum">{this.state.buynum}</div>
                <div className="add" onClick={()=>{this.addOne()}}>+</div>
              </div>
            </div>
            <div className="gielse">adlfhfi</div>
            <div className="gielse">adlfhfi</div>
            <div className="gielse">adlfhfi</div>
            <div className="gielse">adlfhfi</div>
            <div className="gielse">adlfhfi</div>
            <div className="gielse">adlfhfi</div>
          </div>
          <div className="btn-bottom">
            <div className="gibuybtn">
              <Link to="/cart" className="text">加入购物车</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoodsInfo;
