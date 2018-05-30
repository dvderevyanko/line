import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import Card from './Card'

export default class CardArticleContainer extends Component {
  render() {
      return (
        <div className="container home_items" >
        <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="hi_item">
							<h3>Антикоррозийная обработка</h3>
							<a href="/assets/work/card1.jpg" >
              <img src="/assets/work/card1.jpg" className="img-responsive"/></a>
							<div className="order clearfix">
								<div className="price">от 2000 <i className="fa fa-rub"></i></div>
								<a href="#order" className="button b_buy">Посмотреть</a>
							</div>
							<p>Нам под силу виртуозное выполнение такого сложного автотехнического процесса, как антикоррозийная обработка автомобиля! Многие владельцы современных машин считают, что коррозия им не страшна, но это не так.</p>
						</div>  
            </div>  
        </div>
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