import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
//https://www.w3schools.com/howto/howto_css_image_overlay.asp

export default class ArtCard extends Component {
  render() {
    let data = this.props.data;
    debugger;
    return (
      <div className="hi_item">
        <h3>{data.title}</h3>
        <a href={"/work/" + data.id} >
          <img src={data.image} className="img-responsive" /></a>
        <div className="order clearfix">
          <div className="art_price">{"от " + data.price}<i className="fa fa-rub"></i></div>
          <a href="#order" className="button b_buy">Посмотреть</a>
        </div>
        <p>{data.short}</p>
      </div>
    );
  }
}

