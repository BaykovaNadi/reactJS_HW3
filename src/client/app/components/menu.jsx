import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default class Menu extends Component {
    render() {
        return <section className='name-company contents'>
                <div className="telephons"> 
                    <p id="tele">+7(499) 777-77-77</p>
                    <p id="tele">+7(499) 777-77-77</p>
                </div>
            </section>
            <menu type="context">
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