import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Content extends Component {
    render() {
        return <section className="content">
            <div className="news"> 
                <h1>Новости</h1>
            </div>
        
            <article className="article"> 
                <h1>Компания «Пиксель Плюс»</h1>
            </article>
        </section>;
    }
}
