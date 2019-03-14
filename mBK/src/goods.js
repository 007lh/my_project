import React from 'react';
import GoodsHead from './component/goodshead';
import GoodsFooter from './component/goodsfooter';
import {Link} from 'react-router-dom';

class Goods extends React.Component {
  render() {
    return(
      <div className="app-view-wrap">
        <GoodsHead/>

        <div className="goodscontent">
          <div className="swiper-container gallery-view swiper-container-horizontal">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img className="img" src={"https://i8.mifile.cn/v1/a1/02ae8e94-0832-03a8-b476-dceead2355c0.webp"}/></div>
            </div>
            <div className=""></div>
          </div>

          <div className="section section-detail">
            <div className="product_info_activity_tip">
              <div className="top-banner">
                <a className="exposure">
                  <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/177a8afd6582eec58dd31074b5156a67.jpg" />
                </a>
              </div>
            </div>
          </div>

          <div className="section section-detail">
            <div className="product_info_product_name">
              <div className="overview overview-goods-name">
                <div className="goods-name ui-flex align-center justify-start fz-xl">
                  <img src="https://i8.mifile.cn/b2c-mimall-media/1d0aee92273705ac2c852fb30e3048e0.png"/>
                  小米8 SE
                </div>
              </div>
            </div>
          </div>

          <div className="section section-detail">
              <div className="product_info_product_desc">
                  <div className="overview overview-goods-brief">
                      <div className="goods-brief fz-xs">
                        <font color="#ff4a00">「4GB+64GB，限时秒杀，立减150元」「6GB+64GB，限时秒杀，立减150元」「下单结算显示秒杀价」</font>
                        三星 AMOLED 全面屏 小屏旗舰 / 骁龙710处理器 / AI 超感光双摄 / 前置2000万柔光自拍
                      </div>
                  </div>
              </div>
          </div>

          <div className="section section-detail">
              <div className="product_info_product_price">
                  <div className="overview product_info_product_price">
                      <div className="goods-price layout align-end justify-start">
                          <div className="price cur-price">1899</div>
                          <div className="price origin-price">1999</div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="section section-detail">
              <div className="product_info_class_parameters">
                  <div className="classic-param ui-flex align-center justify-start J_linksign-customize">
                      <div className="classic-param-item">
                          <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png"/>
                          <div className="classic-param-item-name fz-xs">大屏</div>
                          <div className="classic-param-item-value fz-xxs">5.88英寸</div>
                      </div>
                      <div className="classic-param-item bd-left-1px">
                          <img src="https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png"/>
                          <div className="classic-param-item-name fz-xs">双摄像头</div>
                          <div className="classic-param-item-value fz-xxs">1200万+500万像素</div>
                      </div>
                      <div className="classic-param-item bd-left-1px">
                          <img src="https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png"/>
                          <div className="classic-param-item-name fz-xs">持久待机</div>
                          <div className="classic-param-item-value fz-xxs">3120mAh</div>
                      </div>
                      <div className="classic-param-item bd-left-1px">
                          <img src="https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png"/>
                          <div className="classic-param-item-name fz-xs">极速畅玩</div>
                          <div className="classic-param-item-value fz-xxs">6GB</div>
                      </div>
                      <div className="classic-param-item bd-left-1px">
                          <img src="https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png"/>
                          <div className="classic-param-item-name fz-xs">运营商网络</div>
                          <div className="classic-param-item-value fz-xxs">4G全网通</div>
                      </div>
                      <div className="classic-param-item bd-left-1px">
                          <img src="https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png"/>
                          <div className="classic-param-item-name fz-xs">屏幕清晰度</div>
                          <div className="classic-param-item-value fz-xxs">2244×1080</div>
                      </div>
                      <div className="classic-param-item bd-left-1px">
                          <img src="https://i8.mifile.cn/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png"/>
                          <div className="classic-param-item-name fz-xs">CPU核心数</div>
                          <div className="classic-param-item-value fz-xxs">八核</div>
                      </div>
                     <div className="classic-param-item bd-left-1px">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png"/>
                        <div className="classic-param-item-name fz-xs">存储容量</div>
                        <div className="classic-param-item-value fz-xxs">64GB</div>
                    </div>
                    <div className="classic-param-item bd-left-1px">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/52ad10a73685342e437e44ea3d29cbff.png"/>
                        <div className="classic-param-item-name fz-xs">薄</div>
                        <div className="classic-param-item-value fz-xxs">7.5mm</div>
                    </div>
                    <div className="classic-param-item bd-left-1px">
                        <img src="https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png"/>
                    <div className="classic-param-item-name fz-xs">网络模式</div>
                    <div className="classic-param-item-value fz-xxs">双卡双待</div>
                </div>
            </div>
        </div>
    </div>

    <div className="section section-detail">
        <div className="product_info_choose_version">
            <div className="border-1px card-box margin-16-32-0">
                <div className="product-section more padding-24-32 border-bottom-1px">
                    <div className="ui-flex align-center justify-start J_linksign-customize">
                        <div className="title fz-xs">已选</div>
                        <div className="flex fz-xs">
                          <div className="info">小米8 SE 6GB+128GB 金色  x 1</div>
                        </div>
                    </div>
                </div>
                <div className="product-section more padding-24-32 border-bottom-1px">
                    <div className="ui-flex align-center justify-start J_linksign-customize">
                        <div className="title fz-xs">送至</div>
                        <div className="flex fz-xs">
                          <div className="info">
                            <span className="mr1x">北京市 东城区</span>
                            <span className="on"> 有现货</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-section padding-16-32 border-bottom-1px">
                        <div className="ui-flex align-center justify-start J_linksign-customize service-policy-list">
                            <div className="flex service-policy-item">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" className="mr1x img-icon"/>
                              <span className="fsc1">7天无理由退货</span>
                            </div>
                            <div className="flex service-policy-item">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" className="mr1x img-icon"/>
                              <span className="fsc1">15天质量问题换货</span>
                            </div>
                            <div className="flex service-policy-item">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" className="mr1x img-icon"/>
                              <span className="fsc1">365天保修</span>
                           </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>

            <GoodsFooter/>
      </div>);
  }
};

export default Goods;
