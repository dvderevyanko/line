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
      this.setContent = this.setContent.bind(this);
    }

    componentWillMount() {
      this.props.onSetCurrentContent(-1);
    }
  
    setContent(id) {
        this.props.onSetCurrentContent(id);
    }

    renderNavItem(nav, index) {
      let within = [];
      if (nav.inner) {
        nav.inner.map((inner, inx) => {
          within.push(<AccordionItem key={'inner_' + inx} title={inner.title}  onClick={() => this.setContent(inner.id)}/>);
        });
        return <AccordionItem key={'root_' + index} title={nav.title}>{within}</AccordionItem>
      } else {
        return <AccordionItem key={'root_' + index} title={nav.title} onExpand={() => this.setContent(nav.id)}/>
      }
    }

    render() {
      var content;
      if (this.props.priceList.error) {
        content = this.props.priceList.error;
      } else {
        content = this.props.priceList.content;
      }
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
              <div dangerouslySetInnerHTML={{__html: content}}/>
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