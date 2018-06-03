import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { NavLink } from 'react-router-dom';
//https://www.w3schools.com/howto/howto_css_image_overlay.asp

export default class ArtCard extends Component {
  render() {
    let data = this.props.data;
    let imgComp;
    let buttonComp;
    if (this.props.action) {
      imgComp = <img src={data.image} className="img-responsive" onClick={() => this.props.action(data.id)} />
      buttonComp = <a className="button b_buy" onClick={() => this.props.action(data.id)}>Посмотреть</a >
    } else {
      imgComp = <NavLink className="main" to={"/work/" + data.id}>
        <img src={data.image} className="img-responsive" />
      </NavLink >
      buttonComp = <NavLink className="button b_buy" to={"/work/" + data.id}>Посмотреть</NavLink >
    }
    return (
      <div className="hi_item">
        <h3>{data.title}</h3>
        {imgComp}
        <div className="order clearfix">
          <div className="art_price">{"от " + data.price}<i className="fa fa-rub"></i></div>
          {buttonComp}
        </div>
        <p>{data.short}</p>
      </div>
    );
  }
}

