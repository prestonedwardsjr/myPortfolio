import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["Home","About", "Portfolio","Contact"];
    const navLinks = sections.map(section  => {
return(
  <li key={section}> <a href = {"#" + section}>{section}</a></li>
)
    });
    return (
      <nav>
          <h2 className="logo"> {this.props.logoTitle} </h2>
          <ul>
            {navLinks}
          </ul>
      </nav>
      
      
    );
  }
}

export default Navigation;
