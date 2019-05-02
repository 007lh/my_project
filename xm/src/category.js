import React from 'react';
import {Link} from 'react-router-dom'
import Footer from "./component/footer"
import CategoryContent from "./component/categorycontent"
import CC from "./component/cc"
import Head from './component/head'
import './css/home.css';
import {Navs,Navbar,FormGroup,Button,FormControl} from 'react-bootstrap';
//onClick={history.back()}为什么报错
class Category extends React.Component {

  componentWillMount(){
    document.title= "商品分类";
  }

  render() {
    return(
      <div className="app-view-wrap">
        <div className="app-view">
            <Head
              headleftcontent={<a href="javascript:history.back();"><i className="image-icons icon-back" ></i></a>}
              headmiddlecontent={"分类"}
              headrightcontent={<Link to='/search'><i className="image-icons app-header-icon icon-search"></i></Link>}
              elhiddle={"hiddle"}
            />
            <CC/>
            <Footer settingClass="category"/>
          </div>
      </div>);
  }
};

export default Category;
