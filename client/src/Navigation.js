import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {
  Container, 
  Navbar, NavbarToggler, 
  Collapse, Nav, NavItem
} from 'reactstrap';

import bryce from './bryce.png';

class Navigation extends Component {
  render () {
    return (
      <Navbar color='light' light expand='sm'>
        <Container>
          <Link className='navbar-brand' to='/'>
            <img src={bryce} className={'branding'} alt='Bryce St. Pierre' />
            Data Collection
          </Link>
          <NavbarToggler onClick={this.props.onToggle} />
          <Collapse isOpen={this.props.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link className='nav-link' to='/about'>About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
