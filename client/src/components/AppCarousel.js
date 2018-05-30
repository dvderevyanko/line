import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

export default class MainCarousel extends Component {
    render() {
        return (
          <Carousel nextIcon='' prevIcon=''>
            {this.props.data.map((obj, index) => {
              return <Carousel.Item key={index}>
                        <img style={{width: '100%'}} src={obj.image} />
                        <Carousel.Caption>
                          <h3>{obj.description}</h3>
                          <p>{obj.text}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
            })}
            </Carousel> 
        );
       //<img width={1049} height={400} alt="1049x400" src={obj.img} /> 
    }
  }