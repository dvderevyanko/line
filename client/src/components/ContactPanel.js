import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class ContactPanel extends Component {
  render() {
    if (this.props.data.phones) {
      return (
        <div className="top-line-container">
          <div className="container">
            <Row>
              <Col md={4} mdPush={4} sm={4} smPush={4} xs={4}>
                <div className="logo-wrap">
                  <a href="/" className="logo">
                    <img src={this.props.data.image} alt="" />
                  </a>
                </div>
              </Col>
              <Col md={4} mdPull={4} sm={4} smPull={4} xs={8}>
                <div className='top-line'>
                  <strong>{this.props.data.city}</strong>
                  <a href='test'>{this.props.data.street}</a>
                </div>
              </Col>
              <Col md={4} sm={4} xs={8} className="taddr_right">
                <div className='top-line top-line_right'>
                  {this.props.data.phones.map((phone, inx) => {
                    let prefix = phone.substring(0, 6);
                    let number = phone.substring(6, phone.lenght);
                    let operator;
                    if (inx == 0) {
                      operator = 'life ';
                    } else if (inx == 1){
                      operator = 'mts ';
                    } else {
                      operator = 'velcom ';
                    }
                    return <strong><span>{operator}</span>{prefix}<span>{number}</span></strong>
                  })}
                  
                </div>
              </Col>
            </Row>
          </div>
        </div>);
      
    } else {
      return (
        <div className="top-line-container">
          <div className="container">
          </div>
        </div>);
    }
    //<img width={1049} height={400} alt="1049x400" src={obj.img} /> 
  }
}