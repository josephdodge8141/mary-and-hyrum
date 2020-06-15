/*es-lint disable*/
import React, { Component } from 'react';
import concreteBackground from '../images/concreteBackground.png';

const height = window.innerHeight;
const textStyle = {
    fontSize: '100px',
    textAlign: 'center',
    fontFamily: 'MoonLight',
    fontWeight: 'Bold'
};

const divStyle = {
    height: height-150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '100px',
}
export class Home extends Component {
    static displayName = Home.name;

  render () {
      return (
          <div style={divStyle}>
              <div style={textStyle}>
                  Mary and Hyrum
              </div>
          </div>
    );
  }
}
