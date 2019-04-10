import React, { Component } from 'react';
import Background from "./img/webdesign.png";
import "./Header.css";

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: "80vh",
    BackgroundSize: "cover"
}
class Header extends Component {
    render() {
        return (

            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>Looking for Entry Level Web Opportunity</p>
                <a href="#button">{this.props.button}</a>
            </header>
        );
    }
}
export default Header;