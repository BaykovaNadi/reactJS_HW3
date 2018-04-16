import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
    render() {
        return <footer className="footer">
                <div className="footer-block1">
                    <ul type="none" classNameclass="footer-text">
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Доставка и оплата </a></li>
                        <li><a href="#">Прайс-лист</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>                        
                </div>
        </footer>;
    }
}
