import React from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import User from './user';
import Home from './home';
import Login from './login';
import Category from './category';
import Cart from './cart';
import Search from './search';
import Goods from './goods';

class Root extends React.Component {
  componentWillMount(){
    (function (doc, win) {
            var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth<=750) {
              docEl.style.fontSize = 12 * (clientWidth / 375) + 'px';  //以宽度375适配 12是基础的（html）frontsize
            } else {
                docEl.style.fontSize = 12 * (750 / 375) + 'px';
            }
        };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
  }

  render() {
    return(
      <HashRouter>
         <div className="app-shell">
           <Route exact path="/" component={Home} />
           <Route path="/user" component={User} />
           <Route path="/login" component={Login} />
           <Route path="/category" component={Category} />
           <Route path="/cart" component={Cart} />
           <Route path="/search" component={Search} />
           <Route path="/goods/:id" component={Goods} />
         </div>
      </HashRouter >
      );
  }
};

export default Root;
