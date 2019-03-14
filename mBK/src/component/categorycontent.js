import React from 'react';
import '../css/else.css'
import {Nav,Tab,Row,NavItem,Col} from 'react-bootstrap';

class CategoryContent extends React.Component {
  render() {
    return(
      <div className="categorycontent-wrap">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={3} xs={3}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="new">新品</NavItem>
                <NavItem eventKey="phone">手机</NavItem>
                <NavItem eventKey="television">电视</NavItem>
                <NavItem eventKey="computer">电脑</NavItem>
                <NavItem eventKey="jiadian">家电</NavItem>
              </Nav>
            </Col>
            <Col sm={9} xs={9}>
              <Tab.Content animation>
                <Tab.Pane eventKey="new">new</Tab.Pane>
                <Tab.Pane eventKey="phone">phone</Tab.Pane>
                <Tab.Pane eventKey="television">television</Tab.Pane>
                <Tab.Pane eventKey="computer">computer</Tab.Pane>
                <Tab.Pane eventKey="jiadian">jiadian</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );}
};

export default CategoryContent;
