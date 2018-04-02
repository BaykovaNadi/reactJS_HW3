import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

import Header from './components/header';
import Footer from './components/footer';
import Counter from './components/counter';
import Content from './components/content';
import Menu from './components/menu';
import ButtonSignIn from './components/buttonSignIn';

class App extends Component {
    render() {
        return <div>
            <Header />
            <Menu />
            <Content />
            <Footer />
        </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));