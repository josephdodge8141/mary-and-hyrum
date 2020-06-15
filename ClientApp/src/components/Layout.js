import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import concreteBackground from '../images/concreteBackground.png';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div style={{ backgroundImage: `url(${concreteBackground})` }}>
        <NavMenu />
            <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
