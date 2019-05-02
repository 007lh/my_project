import React from 'react';
import {Link} from 'react-router-dom';

class CartContent extends React.Component {
  constructor(props){
    super(props);
    this.state={buy_data: this.props.buy_data,
                btndelete:false};
  }

  updataLocalStorage(){
    let data = localStorage.getItem("userId");
    let chooseed_data = JSON.parse(data);
    chooseed_data.splice(this.props.delete_index,1,JSON.stringify(this.state.buy_data));
    localStorage.setItem("userId",JSON.stringify(chooseed_data));
    console.log("cartcc",chooseed_data);
  }

  addOne(){
    let data = this.state.buy_data;
    data.buynum = this.state.buy_data.buynum+1;
    this.setState({buy_data: data},()=>{
      this.updataLocalStorage();
      this.props.change_price();
    });
  }

  minusOne() {
    if(this.state.buy_data.buynum>1){
      let data = this.state.buy_data;
      data.buynum = this.state.buy_data.buynum-1;
      this.setState({buy_data: data},()=>{
        this.updataLocalStorage();
        this.props.change_price();
      });
    }
  }

  deleteGoods(){
    this.setState({btndelete: true, buy_data:{}},()=>{
      this.updataLocalStorage();
      this.props.change_price();
    });
    //浏览器强制刷新location.reload();
  }

  isChecked(){
    let data = this.state.buy_data;
    data.checked = !this.state.buy_data.checked;
    this.setState({buy_data: data},()=>{
      this.updataLocalStorage();
      this.props.change_price();
    });

  }

  render() {
    return(
          <li className={"buyinfo-baritem "+(this.state.btndelete?"hidden":"")}>
            <div className="buyinfo-layout">
              <div className={"choosebtn " + (this.state.buy_data.checked?"checked":"")} onClick={()=>{this.isChecked()}}></div>
              <Link to={"/goods/"+this.state.buy_data.id} className="buyinfo-pic">
                <img src={this.state.buy_data.pic} alt="商品图片"/>
              </Link>
              <div className="info">
                  <div className="info-text">
                  {this.props.buy_data.name+" "+this.state.buy_data.vname+' '+this.state.buy_data.vname_type +
                   " " + this.state.buy_data.color
                  }
                  </div>
                  <div className="price">
                    <span>售价：</span>
                    <span>{this.state.buy_data.price}元</span>
                  </div>
                  <div className="num">
                    <div className="num-wrap">
                      <div className="num-minus" onClick={()=>{this.minusOne()}}>-</div>
                      <div className="num-buynum">{this.state.buy_data.buynum}</div>
                      <div className="num-add" onClick={()=>{this.addOne()}}>+</div>
                    </div>
                    <div className="delete" onClick={()=>{this.deleteGoods()}}></div>
                  </div>
              </div>
            </div>
            <div className={(this.state.buy_data.protect?"":"hidden ")+"protect-bar"}>
              <img src="https://i1.mifile.cn/a1/pms_1540200763.66852830.jpg" alt="icon"/>
              <span>{this.state.buy_data.protect?this.state.buy_data.protect.pname:""}</span>
              <span className="f_right">{this.state.buy_data.protect?(this.state.buy_data.protect.pprice+"元"):""}</span>
            </div>
            <div className="line-1"></div>
          </li>
      );
  }

  componentWillUnmount(){
    // let data = localStorage.getItem("userId");
    // let chooseed_data = JSON.parse(data);
    // let bkdata=[];
    // for(let i=0;i<chooseed_data.length;i++){
    //   if(chooseed_data[i].length>0){
    //     bkdata.push(chooseed_data[i]);
    //   }
    // }
    // localStorage.setItem("userId",JSON.stringify(bkdata));
  }
};

export default CartContent;
