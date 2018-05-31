import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import NavCard from './NavCard'

export default class CardNavigationContainer extends Component {
  render() {
    return (
      <div className="container">
        <Row className="card-nav-title">
          <Col>
            <h2>Услуги мастерской <strong>Линия</strong><span>Сервиса</span></h2>
          </Col>
        </Row>
        <Row >
          <Col>
            {this.props.data.map((obj) => {
              return <NavCard data={obj}></NavCard>
            })}
          </Col>
        </Row>
      </div>
    );

  }
}
/*https://bootsnipp.com/snippets/GX62l

<div className="col-lg-3">
          <div className="panel">
             <div className="panel-heading" style={{'background-color':'teal','color':'#fff'}}><strong>Lorem Ipsum</strong></div>
             <div className="panel-body" style={{'background-color':'#000','color':'#fff', 'box-shadow':'0 -12px 13px teal inset'}}>
             
             <div className="boximg">
              <img src="/assets/card1.jpg" class="img-responsive"/>
              <span className="label label-danger date">25 December 2015</span>
              <span className="likebut glyphicon glyphicon-tag"></span>
              </div>
              
              
        <br/>
             <p className="pull-left">Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
             </p>
             <span class="badge pull-right" style={{'background-color':'teal'}}>25</span>
            
           </div>
          </div>
       </div>


















*/

/*<Card img="/assets/card1.jpg"></Card>
<Row>
          {this.props.data.map((obj, index) => {
            return <Card key={index} img={obj.img} href={obj.href} title={obj.title} text={obj.text} button={obj.button}></Card>
          })}
        </Row>)*/