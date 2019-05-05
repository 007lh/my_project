import React from 'react';
import {Link} from 'react-router-dom';
import {Navs,Navbar,FormGroup,Button,FormControl} from 'react-bootstrap';

function Pictureitem1(props) {
  return (
    <div className={props.wrapstyle}>
      <Link to={props.goods_href} className={props.astyle}>
        <img src={props.src}/>
      </Link>
    </div>)
}

function Goods(props) {
  return (
    <div className="homephonegoods">
      <Link to={props.goods_href} className="imglink">
        <div className="img">
          <img src={props.src}/>
        </div>
        <div className="info">
          <div className="name">{props.name}</div>
          <div className="brief">{props.brief}</div>
          <div className="price">
            {props.price}
            <span className="price old">
            <s>{props.oldPrice}</s>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

class HomePhone extends React.Component {
  render() {

    return(
      <div>
        <Pictureitem1
            goods_href={"/goods/002"}
            wrapstyle={"gallery"}
            astyle={"items1"}
            src={"https://i8.mifile.cn/v1/a1/b88045c6-d57e-012d-b5be-b6a5968a3b5c!720x360.webp"}/>
        <Pictureitem1
            goods_href={"/category"}
            wrapstyle={"gallery"}
            astyle={"items2"}
            src={"https://i8.mifile.cn/v1/a1/2382cc66-1c86-20b4-3bab-7470ddf52bf7!720x280.webp"}/>
        <Pictureitem1
            goods_href={"#"}
            wrapstyle={"gallery"}
            astyle={"items3"}
            src={"https://i8.mifile.cn/v1/a1/801fa2e0-be9c-51e5-6d26-109b6414dc56!720x80.webp"}/>
        <div style={{display:"flex"}}>
        <Goods
            goods_href={"/goods/007"}
            src={"https://i8.mifile.cn/v1/a1/a081da10-3758-e051-7a20-0de017f37476!360x360.webp"}
            name={"红米6"}
            brief={"小屏高性能的双摄手机"}
            price={"$729"}
            oldPrice={"$799"}/>
        <Goods
            goods_href={"/goods/009"}
            src={"https://i8.mifile.cn/v1/a1/2c506517-9477-c928-8e77-bee18b6818a1!360x360.webp"}
            name={"小米6X"}
            brief={"轻薄美观的拍照手机"}
            price={"$1199"}
            oldPrice={"$1499"}/>
        </div>
      </div>);
  }
};

export default HomePhone;
