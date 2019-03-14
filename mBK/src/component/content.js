import React from 'react';
import ImgCarousel from './carousel';
import HomePhone from './homephone';
import {Link} from 'react-router-dom';
import PubSub from 'pubsub-js';
import '../css/home.css';




class HomeContent extends React.Component {
  constructor() {
    super();
    this.state={btnshowblock:"Recommend"}
  }

  componentDidMount(){
    PubSub.subscribe("Recommend", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("Phone", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("Television", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("Intelligence", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("PC", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("JiaDian", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("NewPC", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("ShuangShe", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("AroundScreen", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("AroundLife", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
    PubSub.subscribe("Box", (D,msg)=>{
      console.log("D",D,"msg",msg);
      this.setState({btnshowblock:D})
    });
  }

  componentWillUnmount(){
    PubSub.unsubscribe("Recommend");
    PubSub.unsubscribe("Phone");
    PubSub.unsubscribe("Television");
    PubSub.unsubscribe("PC");
    PubSub.unsubscribe("JiaDian");
    PubSub.unsubscribe("NewPC");
    PubSub.unsubscribe("ShuangShe");
    PubSub.unsubscribe("AroundScreen");
    PubSub.unsubscribe("AroundLife");
    PubSub.unsubscribe("Box");
    PubSub.unsubscribe("Intelligence");
  }
  render() {
    return(
      <div className="app-body-wrap">
      {/*推荐*/}
        <div style={{display:(this.state.btnshowblock==="Recommend"?"block":"none")}}>
          <ImgCarousel/>
          <div className="cells_auto_fill multi_cell" style={{width:"31.25rem",height:"6.4rem"}}>
              <Link to="/goods/768768768" className="exposure items1">
                <img src="//i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp"/>
              </Link>
              <a className="exposure items1">
                <img src="https://i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp"/>
              </a>
              <a className="exposure items1">
                <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?thumb=1&amp;w=144&amp;h=152"/>
              </a>
              <a className="exposure items1">
                <img src="//i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp"/>
              </a>
              <a className="exposure items1">
                <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3df8f589521ea019b3b2d6231af17926.png?thumb=1&amp;w=144&amp;h=152"/>
              </a>
            </div>

            <div className="cells_auto_fill multi_cell" style={{width:"30rem",height:"22.2rem"}}>
              <a className="items2" style={{width:"15rem",height:"22rem"}}>
                <img style={{width:"15rem",height:"22.2rem"}} src='https://i8.mifile.cn/v1/a1/1bc285b1-2a9e-00de-57bf-23d322094a74!358x508.webp'/>
              </a>
              <a className="items2" style={{width:"15rem",height:"11rem",left:"15.7rem"}}>
                <img style={{width:"15rem",height:"11rem"}} src='https://i8.mifile.cn/v1/a1/9929be9b-7a4e-9f80-5f37-0c9e3848d48f!358x252.webp'/>
              </a>
              <a className="items2" style={{width:"15rem",height:"11rem",left:"15.7rem",top:"11.2rem"}}>
                <img style={{width:"15rem",height:"11rem"}} src='https://i8.mifile.cn/v1/a1/0f1662cf-40c9-fe38-b05e-7a59788a1e28!358x252.webp'/>
              </a>
            </div>
        </div>
        {/*手机*/}
        <div style={{display:(this.state.btnshowblock==="Phone"?"block":"none")}}>
          <HomePhone/>
        </div>
        {/*电脑*/}
        {/*智能*/}
        {/*笔记本*/}
        {/*家电*/}
        {/*新款游戏本*/}
        {/*双摄*/}
        {/*全面屏*/}
        {/*生活周边*/}
        {/*盒子*/}


      </div>
    );}
};

export default HomeContent;
