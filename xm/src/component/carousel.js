import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class ImgCarousel extends React.Component {
  render() {
    return(
        <Carousel style={{margin:"0 auto",textAlign:"center"}}>
            <Carousel.Item>
              <Link to="/goods/009">
                <img style={{width:"31.25rem",height:"16rem"}} alt="小米" src="https://i8.mifile.cn/v1/a1/7111f462-a1a8-2cd5-d565-a5264e14b374!720x360.webp" />
              </Link>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="/goods/006">
                <img style={{width:"31.25rem",height:"16rem"}} alt="小米" src="https://i8.mifile.cn/v1/a1/44363eec-fc22-bcd8-d662-385533d6e7fd!720x360.webp" />
              </Link>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="/goods/002">
                <img style={{width:"31.25rem",height:"16rem"}} alt="小米" src="https://i8.mifile.cn/v1/a1/1b5e146c-dd02-0fc3-d1f5-da1d284b8ee1!720x360.webp" />
              </Link>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      );
  }
};

export default ImgCarousel;
