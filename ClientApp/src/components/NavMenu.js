import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from '../images/logo.png';

const headerBackground = {
    backgroundColor: "white"
}
var isWedding;
var isGraduation;
export class NavMenu extends Component
{
    static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    }
    toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
    }
    toggleNavText() {
        isWedding = window.location.href.includes('wedding') ? true : false;
        isGraduation = window.location.href.includes('graduation') ? true : false;
    }
  render () {
      return (
          <header style={headerBackground}>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                <Container onClick={this.toggleNavText}>
                    <NavbarBrand tag={Link} to="/"><img src={logo} alt="poop" width="50px" height="50px" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            {!isWedding && !isGraduation &&
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/wedding">Wedding</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/graduation">Graduation</NavLink>
                                    </NavItem>
                                </>
                            }
                            {isWedding &&
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/wedding/gallery">Gallery</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/wedding/registry">Gifts</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/wedding/faq">Faq</NavLink>
                                    </NavItem>
                                </>
                            }
                            {isGraduation &&
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/graduation/gallery">Gallery</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/graduation/academics">Academics</NavLink>
                                    </NavItem>
                                </>
                            }
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
  }
}
