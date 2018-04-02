import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default class Menu extends Component {
    render() {
        return <menu type="context">
                    <p className="menu-text">
                        <a href="#"> Главная </a> | 
                        <a href="#"> Каталог </a> | 
                        <a href="#"> Доставка и оплата </a> | 
                        <a href="#"> Прайс-лист </a> | 
                        <a type="button" href="#"> Sign in </a>
                    </p>
            </menu>;
    }
}