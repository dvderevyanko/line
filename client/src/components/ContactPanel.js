import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ServceMap from './ServiceMap';
import Modal from 'react-responsive-modal';

export default class ContactPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
    this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    if (this.props.data.phones) {
      return (
        <div className="top-line-container">
          <div className="container">
            <Row>
              <Col md={4} mdPush={4} sm={4} smPush={4} xs={4}>
                <div className="logo-wrap">
                  <a href="/" className="logo">
                    {/*<img src={this.props.data.logo} alt="" />*/}
                  </a>
                </div>
              </Col>
              <Col md={4} mdPull={4} sm={4} smPull={4} xs={8}>
                <div className='top-line'>
                  <strong>{this.props.data.city}</strong>
                  <a onClick={() => this.togglePopup()}>{this.props.data.street}</a>
                </div>
              </Col>
              <Col md={4} sm={4} xs={8} className="taddr_right">
                <div className='top-line top-line_right'>
                  {this.props.data.phones.map((phone, inx) => {
                    let prefix = phone.substring(0, 6);
                    let number = phone.substring(6, phone.lenght);
                    let operator;
                    if (inx == 0) {
                      operator = 'mts ';
                    } else if (inx == 1) {
                      operator = 'velcom ';
                    } else {
                      operator = 'life ';
                    }
                    return <strong key={"controlpanel." + inx}><span>{operator}</span>{prefix}<span>{number}</span></strong>
                  })}

                </div>
              </Col>
            </Row>
          </div>
          {this.state.showPopup ?
            <Modal open={this.state.showPopup} onClose={() => this.togglePopup()} center closeIconSize={20}>
              <ServceMap />
            </Modal>
            : null}
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