import React from 'react';

class CartContent extends React.Component {
  constructor(props){
    super(props);
    this.state={buynum: this.props.buy_data.buynum};
  }


  addOne(){
    this.setState({buynum:this.state.buynum+1});
  }

  minusOne() {
    if(this.state.buynum>1){
      this.setState({buynum: this.state.buynum-1});
    }
  }

  deleteGoods(){

  }
  render() {
    return(
          <li className="buyinfo-baritem">
            <div className="buyinfo-layout">
              <div className="choosebtn checked"></div>
              <a href="" className="buyinfo-pic">
                <img src={this.props.buy_data.pic} alt="商品图片"/>
              </a>
              <div className="info">
                  <div className="info-text">
                  {this.props.buy_data.name+" "+this.props.buy_data.vname+' '+this.props.buy_data.vname_type +
                   " " + this.props.buy_data.color
                  }
                  </div>
                  <div className="price">
                    <span>售价：</span>
                    <span>{this.props.buy_data.price}元</span>
                  </div>
                  <div className="num">
                    <div className="num-wrap">
                      <div className="num-minus" onClick={()=>{this.minusOne()}}>-</div>
                      <div className="num-buynum">{this.props.buy_data.buynum}</div>
                      <div className="num-add" onClick={()=>{this.addOne()}}>+</div>
                    </div>
                    <div className="delete" onClick={()=>{this.deleteGoods()}}></div>
                  </div>
              </div>
            </div>
          </li>
      );
  }
};

export default CartContent;
