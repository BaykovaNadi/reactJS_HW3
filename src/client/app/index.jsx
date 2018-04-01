import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import Counter from './components/counter';

class App extends Component {
    render() {
        return <div>
            <Header />
            <Counter />
            Helloworld from ReactJS111111111111
            <Footer />
        </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));