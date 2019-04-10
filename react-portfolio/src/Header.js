import React, { Component } from 'react';
import Background from "./img/webdesign.png";


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
                <p></p>
                <a href="#button"></a>
            </header>
        );
    }
}
export default Header;