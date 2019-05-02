import React from 'react';
import {Link} from 'react-router-dom'
import Footer from "./component/footer"
import CartFooter from "./component/cartfooter"
import Head from './component/head'
import CartContent from './component/cartcontent'
import './css/home.css';
import PubSub from 'pubsub-js';
import {Navs,Navbar,FormGroup,Button,FormControl} from 'react-bootstrap';

class Cart extends React.Component {
  constructor(){
    super();
    this.state={
                userdata: null,
                allprice: 0
              };

  //  this.deleteGoods.bind(this);
  }

changeALLPrice(){
  let price=0;
  let data = JSON.parse(localStorage.getItem("userId"));
  for(let i=0;i<data.length;i++){
    if(data[i].length>0){
      let bkdata=JSON.parse(data[i]);
      if(bkdata.checked===true){
        price += bkdata.price * bkdata.buynum;
        console.log("bkdata",bkdata.protect);
        if(bkdata.protect){
          price += bkdata.protect.pprice;
        }
      }
    }
  }
  this.setState({allprice:price});
}

  componentWillMount(){
      document.title= "小米 购物车";

    this.changeALLPrice();
    if(localStorage.getItem("userId")){
      let data = JSON.parse(localStorage.getItem("userId"));
      console.log("data",data);
      let bkdata=[],bklocaldata=[];
      for(let i=0;i<data.length;i++){
      //对象里面没有 .length ,所以要确保data[i]为字符串，切记切记data[i]不能为对象
      //"{}".length=2,下方长度为2
        if(data[i].length>2){
          bkdata.push(JSON.parse(data[i]));
          bklocaldata.push(data[i]);
        }
      }
      localStorage.setItem("userId",JSON.stringify(bklocaldata));
      this.setState({userdata: bkdata});
    }

  }

  componentDidMount(){
    // PubSub.subscribe("BuyInfo", (D,msg)=>{
    // console.log("D",D,"msg",msg);
    //});
  }

  componentWillUnmount(){
      // PubSub.unsubscribe("BuyInfo");
  }

  render() {
    // 用hashrouter传值,不能刷新
    //let userdata = this.props.location.state;
    //allprice

    //allprice    end
     console.log(typeof this.state.userdata);
     var user_buy_data, foot_content;
     if(this.state.userdata.length>0){
         user_buy_data = this.state.userdata.map((v, i)=>{
         return <CartContent buy_data={v} key={v.name+i} delete_index={i} change_price={this.changeALLPrice.bind(this)}/>
       });
       foot_content = <CartFooter allprice={this.state.allprice}/>;
     }else{
       user_buy_data =[];
       foot_content =  <Footer settingClass="cart"/>;
     }



    // console.log(user_buy_data);
    return(
      <div className="app-view-wrap">
          <div className="app-view">
              <Head
                headleftcontent={<a href="javascript:history.back();"><i className="image-icons icon-back" ></i></a>}
                headmiddlecontent={"购物车"}
                headrightcontent={<Link to='/search'><i className="image-icons app-header-icon icon-search"></i></Link>}
                elhiddle={"hiddle"}
              />
              <div className="buyinfo-bar">
                <ul>
                  {user_buy_data}
                </ul>
              </div>

              {foot_content}
          </div>
      </div>);
  }
};

export default Cart;
