import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
          <h2 className="logo"> Preston Edwards, Jr. Portfolio</h2>
          <ul>
            <li><a href= "#"> Home </a></li>
            <li><a href= "#"> About </a></li>
            <li><a href= "#"> Backgroud </a> </li>
            <li><a href= "#"> Contact </a> </li>
          </ul>
      </nav>
      
      
    );
  }
}

export default Navigation;
