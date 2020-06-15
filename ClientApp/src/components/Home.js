/*es-lint disable*/
import React, { Component } from 'react';

const height = window.innerHeight;
const textStyle = {
    fontSize: height * .1,
    textAlign: 'center',
    fontFamily: 'MoonLight',
    fontWeight: 'Bold'
};

const divStyle = {
    height: height-(height * .1),
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
