import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class MainContent extends Component {
    render() {
        let leftColumn = this.props.data.leftColumn;
        let rightColumn = this.props.data.rightColumn;
        return (
          <div className="container">
            <Row>
              <Col md={12}>
                <h2>Услуги мастерской <strong>Авто</strong><span>Ремонт</span></h2>
              </Col>
            </Row>
          </div>
        );
    }
  }

  /*
            <Row>
             <Col sm={8}>
                <h2>{leftColumn.title}</h2>
                <p>{leftColumn.desc}</p>
                <p></p>
                <p>
                  <a className="btn" href={leftColumn.link}>{leftColumn.button}</a>
                </p>
              </Col>
              <Col sm={4}>
                <h2>{rightColumn.title}</h2>
                <p>{rightColumn.address}</p>
                <p>{rightColumn.phone}</p>
                <p><a href="mailto:#">{rightColumn.mail}</a></p>
              </Col>
          </Row>
  
  */