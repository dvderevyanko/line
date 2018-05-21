import React, { Component } from 'react';
import {Accordion, AccordionItem} from 'react-sanfona';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setPricelistContent} from "../actions/pricelistActions"

//https://github.com/daviferreira/react-sanfona
class PriceList extends Component {

    constructor() {
      super();
      this.renderNavItem = this.renderNavItem.bind(this);
      this.findContent = this.findContent.bind(this);
      this.setContent = this.setContent.bind(this);
    }
  
    setContent(title) {
        this.props.onSetCurrentContent(title);
    }

    renderNavItem(nav, index) {
      let within = [];
      if (nav.inner) {
        nav.inner.map((inner, inx) => {
          within.push(<AccordionItem key={'inner_' + inx} title={inner.title}  onClick={() => this.setContent(inner.title)}/>);
        });
        return <AccordionItem key={'root_' + index} title={nav.title}>{within}</AccordionItem>
      } else {
        return <AccordionItem key={'root_' + index} title={nav.title} onExpand={() => this.setContent(nav.title)}/>
      }
    }

    findContent(title) {
      let list = this.props.priceList.navList;
      let content;
      loop:
      for (let i = 0; i < list.length; i++) {
        console.log("list[i].title : " + list[i].title);
        console.log("this.props.priceList.title : " + this.props.priceList.title); 
        if (list[i].title == this.props.priceList.currentContent) {
          content = list[i].content;
          break;
        } else {
          if (list[i].inner) {
            for (let j = 0; j < list[i].inner.length; j++) {
              if (list[i].inner[j].title == this.props.priceList.currentContent) {
                content = list[i].inner[j].content;
                break loop;
              }
            }
          }
        }
      }
      console.log("find content : " + content);
      if (content) {
        return <div dangerouslySetInnerHTML={{__html: content}} />;
      } else {
        return <div dangerouslySetInnerHTML={{__html: this.props.priceList.currentContent}} />;
      }
      
    }

    /*<Row>
        <img style={{width: '100%'}} src='/assets/3.jpg'/>
        </Row>*/  
    render() {
      return (
        <div className="greyBackground">
          <div className="container">
            <div className="page-content-title">{this.props.priceList.title}</div>
          <Row>
            <Col sm={4}>
              <Accordion>
                {this.props.priceList.navList.map((obj, index) => {
                  return this.renderNavItem(obj, index);
                })}
              </Accordion>
            </Col>
            <Col sm={8}>
              {this.findContent(this.props.priceList.currentContent)}
            </Col>
          </Row>
          </div>
        </div>
      );
    }
  }

  const mapToStateProps = state => {
    return {
      priceList : state.priceListState
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onSetCurrentContent: title => {
        dispatch(setPricelistContent(title))
      }
    }
  }
  
  export default connect(mapToStateProps, mapDispatchToProps)(PriceList);