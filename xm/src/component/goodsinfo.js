import React from"react"
import {Link} from 'react-router-dom'
import "../css/goodsinfo.css";
import Data_category from "./bkdata.js";
import PubSub from 'pubsub-js';


function stopBubble(e) {
  //如果提供了事件对象，则这是一个非IE浏览器
  if ( e && e.stopPropagation )
      //因此它支持W3C的stopPropagation()方法
      e.stopPropagation();
  else
      //否则，我们需要使用IE的方式来取消事件冒泡
      window.event.cancelBubble = true;
}

function DataPost(ParamsData, URL){
  var form_page = document.createElement("form");
  form_page.action = URL;
  form_page.method = "post";
  form_page.style.display = "none";
  for(let k in ParamsData){
    var opt = document.createElement("textarea");
    opt.name = k;
    opt.value = ParamsData[k];
    opt.key = 'textarea' + k;
    form_page.appendChild(opt);
  }
  document.body.appendChild(form_page);
  form_page.submit();
  return form_page;
}

class GoodsInfo extends React.Component {
  constructor(props){
    super(props);
    this.state={goodswindow:true,
                btncolor:0,
                btnprotect:true,
                protectstatus:false,
                btnmodel:0,
                buynum:1,
                goods_data:this.props.data_info};
    //存放用户选择的参数
    this.choose_data={name:this.state.goods_data.name, price:this.state.goods_data.discountprice,
                      pic:this.state.goods_data.pic, id: this.props.goods_id, checked:true};//, id:this.props.match.params.id
    //初始化数据
    this.color_data;
    this.hitch_data;
    this.summary_info;
    //btn初始化
  }

  protectClicked(k){
    //console.log("k",k,"protectstatus",this.state.protectstatus,"btnprotect",this.state.btnprotect);
    if(!this.state.protectstatus){
      this.setState({btnprotect: k,protectstatus: true},()=>{
        this.choose_data["protect"] = this.state.goods_data.protect[k];
      });
    }else{
      this.setState({btnprotect: true,protectstatus: false},()=>{
        this.choose_data["protect"] = "";
      });
    }
  }

  colorClicked(k) {
    //stopBubble(e);
    this.setState({btncolor: k});
    this.choose_data["color"] = this.state.goods_data.color[k];
  }

  modelClicked(k){
    this.setState({btnmodel:k});
    this.choose_data["vname"] = this.state.goods_data["vname" + k];
    this.choose_data["vname_type"] = this.state.goods_data["vname_type" + k];
  }

  closeGoodsWindow() {
    this.setState({goodswindow: !this.state.goodswindow});
  }

  addOne(){
    this.setState({buynum: this.state.buynum+1},()=>{
      this.choose_data["buynum"] = this.state.buynum;
    });
  }

  minusOne() {
    if(this.state.buynum>1){
      this.setState({buynum: this.state.buynum-1},()=>{
        this.choose_data["buynum"] = this.state.buynum;
      });
    }
  }

  joinCart(){
    //DataPost(this.choose_data, "/cart");
    let data = localStorage.getItem("userId");
    let choose_dataString = JSON.stringify(this.choose_data);
    if(data){
      let chooseed_data = JSON.parse(data);
      chooseed_data.push(choose_dataString);
      localStorage.removeItem("userId")
    //  console.log("chooseed_data",chooseed_data);
      let chooseed_dataString = JSON.stringify(chooseed_data);
      localStorage.setItem("userId",chooseed_dataString);
    }else{
      let arr = [];
      arr.push(choose_dataString);
      let array_data = JSON.stringify(arr);
      localStorage.setItem("userId",array_data);
    }
  }



componentWillMount(){
    //this.summary_info = this.state.goods_data.name + this.state.goods_data.vname0+this.state.goods_data.color[0];
  this.choose_data["color"] = this.state.goods_data.color[0];
  this.choose_data["buynum"] = this.state.buynum;
  this.choose_data["vname"] = this.state.goods_data["vname0"];
  this.choose_data["vname_type"] = this.state.goods_data["vname_type1"];
//注意：初始化数据，不能将含有运算符的式子放在componentWillMount，下面就是个错误的例子。
   //  this.color_data = this.state.goods_data.color.map((v,i)=>{
   //   return <span className={((this.state.btncolor===i)?"goods-clicked":"") + " gicolor-item"} key={v} onClick={() => {this.dataClicked(i)}}>{v}</span>
   // });
}

componentDidUpdate() {
  //不能放在render,如果导致元素隐藏的话不能设置属性。
  if(this.state.goods_data.protect){
    document.getElementById("gielse").className = "gielse";
  }
  //由于setstate执行后不会立刻改变state(state批量处理)，所以放这里确保state都已经改变
 //this.choose_data["buynum"] = this.state.buynum;
}


componentDidMount(){
//  console.log("data",this.props);
}

  render() {
    this.summary_info = this.state.goods_data.name + this.state.goods_data["vname"+this.state.btnmodel]+this.state.goods_data.color[this.state.btncolor];
    //btncolor
    this.color_data = this.state.goods_data.color.map((v,i)=>{
     return <span className={((this.state.btncolor===i)?"goods-clicked":"") + " gicolor-item"} key={v} onClick={() => {this.colorClicked(i)}}>{v}</span>
   });
   //btnprotect
   if(this.state.goods_data.protect){
     //document.getElementById("gielse").className = "gielse";
      this.hitch_data = this.state.goods_data.protect.map((v, i)=>{
       return (
       <div className={"gielse-item " + ((this.state.btnprotect===i)?"goods-clicked":"")} key={'gielse'+i} onClick={()=>{this.protectClicked(i)}}>
         <span className="gielse-pname">{v.pname}元</span>
         <span className="gielse-pprice">{v.pprice}元</span>
       </div>
     )});
   }else{
     document.getElementById("gielse").className = "gielse hidden";
     this.hitch_data="";
   }

//用hashrouter传值，传过去的值页面不能刷新
   let path = {
            pathname:'/cart',
            state:this.choose_data//要传递的数据
        };
    //console.log("colordata",this.state.btncolor);
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
               <div className="giprice">￥{this.state.goods_data.discountprice}
                 <span className="raw-price">￥{this.state.goods_data.rowprice}</span>
              </div>
              <div className="gitext">{this.summary_info}</div>
            </div>
          </div>
          <div className="gispecificifon">
            <div className="giversion">
              <div className="info-title">版本</div>
              <span className={"version-info "+ (this.state.btnmodel===0? "goods-clicked":"")} onClick={()=>{this.modelClicked(0)}}>{this.state.goods_data.vname0 + '--' + this.state.goods_data.vname_type0}</span>
              <span className={"version-info "+ (this.state.btnmodel===1? "goods-clicked":"")} onClick={()=>{this.modelClicked(1)}}>{this.state.goods_data.vname1 + '--' + this.state.goods_data.vname_type1}</span>
            </div>
            <div className="gicolor" id="gicolor">
              <div className="info-title">颜色</div>
              {this.color_data}
            </div>
            <div className="ginum">
              <div>购买数量</div>
              <div className="ginumwrap">
                <div className="minus" onClick={()=>{this.minusOne()}}>-</div>
                <div className="buynum">{this.state.buynum}</div>
                <div className="add" onClick={()=>{this.addOne()}}>+</div>
              </div>
            </div>
            <div className="gielse" id="gielse">
              <p>意外保护</p>
              <div className="gielse-itemwrap">
                {this.hitch_data}
              </div>
            </div>
          </div>
          <div className="btn-bottom">
            <div className="gibuybtn" onClick={()=>{this.joinCart()}}>
              <Link to={path} className="text" >加入购物车</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoodsInfo;
