import React, { Component } from 'react';

const height = window.innerHeight;
const textStyle = {
    fontSize: height * .1,
    textAlign: 'center',
    fontFamily: 'MoonLight',
    fontWeight: 'Bold',
    color: '#404040'
};

const divStyle = {
    height: height - (height * .1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '100px',
}
export class Graduation extends Component {
    static displayName = Graduation.name;

    render() {
        return (
            <div style={divStyle}>
                <div style={textStyle}>
                    Mary and Hyrum
              </div>
            </div>
        );
    }
}