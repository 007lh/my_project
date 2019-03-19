import React from 'react';
import '../css/else.css'
import {Nav,Tab,Row,NavItem,Col} from 'react-bootstrap';

import Data_category from'./bkdata';

function PictureWrap(props) {
  return(
        <div className="product">
          <a className="exposure item">
            <div className="img">
              <img className="big" src={props.imgSrc}/>
            </div>
            <div className="name">{props.name}</div>
          </a>
        </div>
  )
}

class CC extends React.Component {
  constructor(props){
    super(props);
    this.state={active_key:1}
    this.scrollToAnchor.bind(this);
    this.handleSelect.bind(this);
  }


  scrollToAnchor(anchorName){

      if (anchorName) {
          let anchorElement = document.getElementById(anchorName);
          //let fanchorElement = document.getElementById("component-list-main");
          if(window.scrollTo && anchorElement) {

            //window.scrollTo(0, anchorElement.offsetTop - window.innerHeight / 2);
            //上面的方法没有效果，window.srcollTop() is not function???????,不知其影响因素
          // anchorElement.scrollIntoView();
          anchorElement.scrollIntoView({block: 'center', behavior: 'smooth'});
          console.log(document.getElementById('testaddress').srcollTop);
          }
      }else {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }

    handleSelect(selectedKey) {
        this.setState({active_key:selectedKey});
      }

  render() {
    const phoneData = Data_category["phone"].map((i)=>{return <PictureWrap key={i.name} name={i.name} imgSrc={i.src}/>});
    const televisionData = Data_category["television"].map((i)=>{return <PictureWrap key={i.name} name={i.name} imgSrc={i.src}/>});
    const computerData = Data_category["computer"].map((i)=>{return <PictureWrap key={i.name} name={i.name} imgSrc={i.src}/>});
    const jiadianData = Data_category["jiadian"].map((i)=>{return <PictureWrap key={i.name} name={i.name} imgSrc={i.src}/>});
    return(
      <div className="categorycontent-wrap" id="testaddress">
          <Row className="clearfix">
            <Col sm={3} xs={3}>
              <Nav bsStyle="pills" stacked activeKey={this.state.active_key} onSelect={k => this.handleSelect(k)} style={{position:"fixed",top:"50px"}}>
                <NavItem eventKey={1} onClick={()=>this.scrollToAnchor('cc_phone')}>
                  手机
                </NavItem>
                <NavItem eventKey={2} onClick={()=>this.scrollToAnchor('cc_television')}>
                  电视
                </NavItem>
                <NavItem eventKey={3} onClick={()=>this.scrollToAnchor('cc_computer')}>
                  电脑
                </NavItem>
                <NavItem eventKey={4} onClick={()=>this.scrollToAnchor('cc_jiadian')}>
                  家电
                </NavItem>
              </Nav>
            </Col>
            <Col sm={9} xs={9}>
              <div className="list-wrap">
                <div className="component-list-main">
                  <div className="cells_auto_fill" >
                    <a className="exposure items" >
                      <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/711275806886438be20e33ec943a904a.jpg?thumb=1&amp;w=500&amp;h=200" style={{height: "7rem", width: "17rem"}} />
                    </a>
                  </div>
                  <div className="category_title" id="cc_phone"><span>手机</span></div>
                  <div className="category_group box-flex">
                    <div className="box">
                    {phoneData}
                    </div>
                  </div>
                  <div className="category_title cc_television" id="cc_television"><span>电视</span></div>
                  <div className="category_group box-flex">
                    <div className="box">
                    {televisionData}
                    </div>
                  </div>
                  <div className="category_title" id="cc_computer"><span>电脑</span></div>
                  <div className="category_group box-flex">
                    <div className="box">
                    {computerData}
                    </div>
                  </div>
                  <div className="category_title" id="cc_jiadian"><span>家电</span></div>
                  <div className="category_group box-flex">
                    <div className="box">
                    {jiadianData}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

      </div>
    );}
};

export default CC;
