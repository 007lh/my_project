import React from 'react';
import {Link} from 'react-router-dom'
import Footer from "./component/footer"
import Head from './component/head'
import CartContent from './component/cartcontent'
import './css/home.css';
import PubSub from 'pubsub-js';
import {Navs,Navbar,FormGroup,Button,FormControl} from 'react-bootstrap';

class Cart extends React.Component {
  constructor(){
    super();
    this.state={
                userdata: {}
              };
  }



  componentWillMount(){
    let data = JSON.parse(localStorage.getItem("userId"));
    console.log("data",data);
    let bkdata=[];
    for(let i=0;i<data.length;i++){
      bkdata.push( JSON.parse(data[i]));
    }

    this.setState({userdata: bkdata});
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
     console.log(typeof this.state.userdata);
     var user_buy_data = this.state.userdata.map((v, i)=>{
       return <CartContent buy_data={v} key={v.name+i}/>
     });
     console.log(user_buy_data);
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

              <Footer settingClass="cart"/>
          </div>
      </div>);
  }
};

export default Cart;
