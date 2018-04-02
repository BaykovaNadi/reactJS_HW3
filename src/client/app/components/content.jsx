import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Content extends Component {
    render() {
        return 
        <section className="content">
            <div className="news"> 
                <h1>Новости</h1>
                <p></p>
                <p></p>
                <p></p>   
                <p id="right">        
                    Архив новостей
                </p>
            </div>
        
            <div className="article"> 
                <h1>Компания «Пиксель Плюс»</h1>
                <p></p>
                <p></p>
            </div>
        </section>;
    }
}
