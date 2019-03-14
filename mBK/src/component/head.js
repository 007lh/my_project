import React from 'react';
import {Link} from 'react-router-dom';
import HeadNav from './headNav'
import '../css/home.css'

class Head extends React.Component {
  render() {
    return(
      <div className="head">
        <div className="app-head-wrap">
          <div className="app-head-left">
            <div className="app-head-item logo">
              {this.props.headleftcontent}
            </div>
          </div>
          <div className="app-head-middle">
            {this.props.headmiddlecontent}
          </div>
          <div className="app-head-right">
            <div className="app-head-item">
            {this.props.headrightcontent}
            </div>
          </div>
        </div>
        <div className={this.props.elhiddle}>
          <HeadNav />
        </div>
      </div>
    );
  }
};

export default Head;
