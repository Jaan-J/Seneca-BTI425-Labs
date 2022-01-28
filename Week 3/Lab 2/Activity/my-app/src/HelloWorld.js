import React, { Component } from 'react';
class HelloWorld extends Component {
    render() {
        var myStyle = { color: 'red' };
        return (
            <div className="helloContainer">
                <h1 style={myStyle}>Hello World</h1>
                <h2>My Name is Jaan</h2>
                <h3>My Student ID is 100131192</h3>
            </div >
        );
    }
}
export default HelloWorld;

