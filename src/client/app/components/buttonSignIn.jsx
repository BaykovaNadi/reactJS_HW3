import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default class ButtonSignIn extends Button {
    render() {
        return <div className="btn-group">
        <button type="button" className="btn btn-primary">Sign in</button>
        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
          <span className="caret"></span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Login</a>
          <a className="dropdown-item" href="#">Passport</a>
        </div>
      </div>;
    }
}