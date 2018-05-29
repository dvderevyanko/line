import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class ContactPanel extends Component {
  render() {
    return (
      <div className="top-line-container">
        <div className="container">
          <Row>
            <Col md={4} mdPush={4} sm={4} smPush={4} xs={4}>
              <div className="logo-wrap">
                <a href="/" className="logo">
                  <img src="/assets/logo.png" alt="" />
                </a>
              </div>
            </Col>
            <Col md={4} mdPull={4} sm={4} smPull={4} xs={8}>
              <div className='top-line'>
                <strong>Гомель</strong>
                <a href='test'>ул. Кленковская, 84</a>
              </div>
            </Col>
            <Col md={4} sm={4} xs={8} className="taddr_right">
              <div className='top-line top-line_right'>
                <strong>+37544<span>7366673</span></strong>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );

    //<img width={1049} height={400} alt="1049x400" src={obj.img} /> 
  }
}