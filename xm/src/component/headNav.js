import React from 'react';
import PubSub from 'pubsub-js';


class HeadNav extends React.Component {
  constructor(props){
    super(props);
    this.state={
      btnshow:true,
      btnselect:"Recommend"
    }
    this.handleBtn.bind(this);
    this.selectContent.bind(this);
  }

  handleBtn() {
    this.setState({btnshow:!this.state.btnshow});
  }

  selectContent(k) {
    this.setState({btnselect:k});
    PubSub.publish(k,this.state.btnselect);
  }

  render() {
    return (
      <div>
            <div className="nav-wrap">
              <div className="nav-display" onClick={this.handleBtn.bind(this)}>
                  <i className={(this.state.btnshow?"" : "unfold")+" image-icons icon-arrow-down"}></i>
              </div>

              <div className={"nav-item-layer"+(this.state.btnshow?" hiddle" : "")}>
                <div className="title">全部</div>
                  <div className="btn-wrap">
                    <span
                        onClick={()=>this.selectContent("Recommend")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="Recommend"?"cur":""}`}>推荐</span>
                    <span
                        onClick={()=>this.selectContent("Phone")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="Phone"?"cur":""}`}>手机</span>
                    <span
                        onClick={()=>this.selectContent("Television")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="Television"?"cur":""}`}>电视</span>
                    <span
                        onClick={()=>this.selectContent("Intelligence")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="Intelligence"?"cur":""}`}>智能</span>
                    <span
                        onClick={()=>this.selectContent("PC")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="PC"?"cur":""}`}>笔记本</span>
                    <span
                        onClick={()=>this.selectContent("JiaDian")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="JiaDian"?"cur":""}`}>家电</span>
                    <span
                        onClick={()=>this.selectContent("NewPC")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="NewPC"?"cur":""}`}>新款游戏本</span>
                    <span
                        onClick={()=>this.selectContent("ShuangShe")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="ShuangShe"?"cur":""}`}>双摄</span>
                    <span
                        onClick={()=>this.selectContent("AroundScreen")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="AroundScreen"?"cur":""}`}>全面屏</span>
                    <span
                        onClick={()=>this.selectContent("AroundLife")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="AroundLife"?"cur":""}`}>生活周边</span>
                    <span
                        onClick={()=>this.selectContent("Box")}
                        className={`extra-btn mr-interval ${this.state.btnselect==="Box"?"cur":""}`}>盒子</span>
                  </div>
                </div>

              <div className={"nav"+(this.state.btnshow?"" : " hiddle")}>
                <div className="nav-item" onClick={()=>this.selectContent("Recommend")}>
                  <span className={this.state.btnselect==="Recommend"?"foucs":""}>推荐</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("Phone")}>
                  <span className={this.state.btnselect==="Phone"?"foucs":""}>手机</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("Television")}>
                  <span className={this.state.btnselect==="Television"?"foucs":""}>电视</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("Intelligence")}>
                  <span className={this.state.btnselect==="Intelligence"?"foucs":""}>智能</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("PC")}>
                  <span className={this.state.btnselect==="PC"?"foucs":""}>笔记本</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("JiaDian")}>
                  <span className={this.state.btnselect==="JiaDian"?"foucs":""}>家电</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("NewPC")}>
                  <span className={this.state.btnselect==="NewPC"?"foucs":""}>新款游戏本</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("ShuangShe")}>
                  <span className={this.state.btnselect==="ShuangShe"?"foucs":""}>双摄</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("HugeScreen")}>
                  <span className={this.state.btnselect==="HugeScreen"?"foucs":""}>全面屏</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("AroundLife")}>
                  <span className={this.state.btnselect==="AroundLife"?"foucs":""}>生活周边</span>
                </div>
                <div className="nav-item" onClick={()=>this.selectContent("Box")}>
                  <span className={this.state.btnselect==="Box"?"foucs":""}>盒子</span>
                </div>
                <div className="nav-item-extra"></div>
              </div>
            </div>
      </div>
    )
  }
};

export default HeadNav;
