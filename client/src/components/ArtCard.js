import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import {NavLink } from 'react-router-dom';
//https://www.w3schools.com/howto/howto_css_image_overlay.asp

export default class ArtCard extends Component {
  render() {
    let data = this.props.data;
    return (
      <div className="hi_item">
        <h3>{data.title}</h3>
        <NavLink className="main" to={"/work/" + data.id}>
          <img src={data.image} className="img-responsive" />
        </NavLink >
        <div className="order clearfix">
          <div className="art_price">{"от " + data.price}<i className="fa fa-rub"></i></div>
          <NavLink className="button b_buy" to={"/work/" + data.id}>Посмотреть</NavLink >
        </div>
        <p>{data.short}</p>
      </div>
    );
  }
}

