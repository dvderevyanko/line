import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
//https://www.w3schools.com/howto/howto_css_image_overlay.asp

export default class NavCard extends Component {
  render() {
    let data = this.props.data;
    return (
      <div className="mc_item inline">
        <NavLink className="main" to={"/work/" + data.id}>
          <img src={data.icon} className="inner" />
          <h4 className="inner">{data.title}</h4>
        </NavLink >
        {/*<div className="mc_toggle inner" />*/}
      </div>
    );
  }
}

/*

      <Col xs={4} md={3} sm={3}>
        <div className="mc_item">
            <a href="/" className="inner">
              <img src="assets/card_nav.png" />
              
              <h4 className="inner">test</h4>
            </a>
            <div className="mc_toggle inner"/>
          </div>
      </Col>









  <div className="card-outer">
               <Thumbnail src={this.props.img} alt="300x200" href={this.props.href} style={{textDecoration : 'none'}}>
                {/*<Link to={this.props.href}>
                  <span className="overlay">
                  <span className="text">Узнать больше</span>
                  </span>
                </Link>}


                  <h3>{this.props.title}</h3>
                  <p>{this.props.text}</p>
                  {/*<p>
                    <Button bsStyle="primary">{this.props.button}</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>}
                 
                </Thumbnail>
              </div>*/