import React from 'react';
import Head from './component/head';
import {Link} from 'react-router-dom';
import './css/home.css'

class Search extends React.Component {
  componentWillMount(){
    document.title= "小米 搜索";
  }

  render() {
    return(
      <Head
        headleftcontent={<a href="javascript:history.back();"><i className="image-icons icon-back" ></i></a>}
        headmiddlecontent={
          <div className="search-item">
            <input type="search" autoComplete="off" placeholder="搜索商品名称" autoCapitalize="off"/>
          </div>}
        headrightcontent={
          <a>
            <i className="image-icons app-header-icon icon-search"></i>
          </a>
          }
          elhiddle={"hiddle"}
      />

    );
  }
};

export default Search;
