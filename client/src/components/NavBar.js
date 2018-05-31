import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
/*https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav*/
export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      hideListLinks : true
    }
    this.navHandler = this.navHandler.bind(this);
    this.collectRefs = this.collectRefs.bind(this);
  }

  collectRefs(idx) {
    return (node) => {
      this.linkIds[idx] = node;
    };
  }


  render() {
    this.linkIds = [];
     return (
      <div className="topnav" id="myTopnav" ref="myTopnav">
        <div className="container">
          <Row>
            <Col md={12}>
              <a href="javascript:void(0);" className="icon"
                onClick={() => this.showMenu()}>&#9776;   меню</a>
              <span className="empty"></span>
              <div className="waranty" ref="waranty">
                <div className="waranty-left"><span>1</span> год</div>
                <div className="waranty-right">Гарантия <br />на все работы</div>
              </div>
              <div className="services_mnu" ref="notMain"><NavLink  to="/main">Услуги автосервиса</NavLink ></div>
              <div onClick={(e) => this.navHandler(e)}>
                <NavLink className="main" to="/main">Главная</NavLink >
                <NavLink className="about-nav" to="/about">О нас</NavLink >
                <NavLink className="price" to="/pricelist">Цены</NavLink >
                <NavLink className="work" to="/work">Наши работы</NavLink >
                <NavLink className="partner" to="/partner">Партнеры</NavLink >
                <NavLink className="contact" to="/contact">Контакты</NavLink >
                </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  showMenu() {
    let menu = this.refs.myTopnav;
    if (menu.className === "topnav") {
      menu.className += " responsive";
    } else {
      menu.className = "topnav";
    }      
  }

  navHandler(e) {
    let menu = this.refs.myTopnav;
    let waranty = this.refs.waranty;
    let notMain = this.refs.notMain;
    if (menu.className.includes("responsive")) {
      menu.className = "topnav";
    }
    if (e.target.href.includes('/main')) {
      notMain.style.display = "none";
      notMain.firstChild.style.display = "none";
      waranty.style.display = "block";
    } else {
      notMain.style.display = "block";
      notMain.firstChild.style.display = "block";
      waranty.style.display = "none";
    }
  }
}



/*
 <nav className="top-nav">
            <div className="container">
              <Row>
                <Col md={12}>
                    <div className="top-menu">
                      <ul>
                        <li><a href="http://avtohall.com/">Главная</a></li>
                        <li><a href="http://test">О нас</a></li>
                        <li><a href="http://test">Цены</a></li>
                        <li><a href="http://test">Наши работы</a></li>
                        <li><a href="http://test">Партнеры</a></li>
                        <li><a href="http://test">Контакты</a></li>
                      </ul>
                    </div>
                    <div className="waranty">
                      <div className="waranty-left"><span>1</span> год</div>
                      <div className="waranty-right">Гарантия <br/>на все работы</div>
                    </div>
                </Col>
              </Row>
              
            </div>
          </nav>

*/

/*
<Navbar inverse collapseOnSelect className="top-nav navbar-static-top">
<Navbar.Header>
      <Navbar.Brand>
        <NavLink to='/'>Ремонт авто</NavLink>  
      </Navbar.Brand>
    <Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
<Nav>
  <LinkContainer to='/pricelist'>
    <NavItem eventKey={1}>Услуги</NavItem>
  </LinkContainer>
  <LinkContainer to='/1'>
    <NavItem eventKey={2}>Test</NavItem>
  </LinkContainer>
  <NavDropdown eventKey={4} title="O нас" id="basic-nav-dropdown">
    <LinkContainer to='/2'>
      <MenuItem eventKey={4.1}>Как доехать</MenuItem>
    </LinkContainer>
    <LinkContainer to='/3'>
      <MenuItem eventKey={4.2}>Оплата</MenuItem>
    </LinkContainer>
  </NavDropdown>
</Nav>
<Nav pullRight>
  <LinkContainer to='/4'>
    <NavItem eventKey={1} href="#">Test</NavItem>
  </LinkContainer>
</Nav>
</Navbar.Collapse>
</Navbar> */