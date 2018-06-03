import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <span className="logo">Линия сервиса</span><br />
                            <span className="logo-text">© 2018 Все права защищены</span>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="menu">
                                <span>Меню</span>
                                <li>
                                    <Link to="/main">Главная</Link >
                                </li>

                                <li>
                                    <Link to="/about">О нас</Link >
                                </li>

                                <li>
                                    <Link to="/pricelist">Цены</Link >
                                </li>

                                <li>
                                    <Link to="/work">Наши работы</Link >
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="address">
                                <span>Контакты</span>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i> <a>+375232556673</a>
                                </li>
                                <li>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i> <a>г.Гомель,ул.Кленковская,84</a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:sto.serviceline@gmail.com">sto.serviceline@gmail.com</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </footer>




        );
    }
}

/*
<footer className="footer-bs">
              <div className="row">
               <div className="col-md-3 footer-brand animated fadeInLeft">
                  <h2>Линия сервиса</h2>
                    <p>лого</p>
                    <p>© 2018 Все права защищены</p>
                </div>
              <div className="col-md-4 footer-nav animated fadeInUp">
                  <h4>Меню —</h4>
                  <div className="col-md-6">
                        <ul className="pages">
                            <li><a href="#1">Услуги</a></li>
                            <li><a href="#1">Галерея</a></li>
                            <li><a href="#1">Отзывы</a></li>
                            <li><a href="#1">Запчасти</a></li>
                            <li><a href="#1">Акции и скидки</a></li>
                        </ul>
        </div>
                  <div className="col-md-6">
                        <ul className="list">
                            <li><a href="#1">О нас</a></li>
                            <li><a href="#1">Контакты</a></li>
                            <li><a href="#1">Схема проезда</a></li>
                            <li><a href="#1">Услуги</a></li>
    </ul>
                    </div>
                </div>
              <div className="col-md-2 footer-social animated fadeInDown">
                  <h4>Подпишитесь на нас</h4>
                  <ul>
                      <li><a href="#1">Facebook</a></li>
                      <li><a href="#1">Twitter</a></li>
                      <li><a href="#1">Instagram</a></li>
                  </ul>
                </div>
              <div className="col-md-3 footer-ns animated fadeInRight">
                  <h4>Newsletter</h4>
                    <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                    <div className="input-group">
                          <span className="input-group-btn">
                            <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
                          </span>
                  </div>
                  </div>
            </div>
    </footer>*/