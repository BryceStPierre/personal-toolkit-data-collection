import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, 
  Navbar, NavbarToggler, 
  Collapse, Nav, NavItem
} from 'reactstrap';

import bryce from './bryce.png';

const Navigation = (props) => (
  <Navbar color='light' light expand='xs'>
    <Container>
      <Link className='navbar-brand' to='/'>
        <img src={bryce} className={'branding'} alt='Bryce St. Pierre' />
        Data Collection
      </Link>
      <NavbarToggler onClick={props.onToggle} />
      <Collapse isOpen={props.isOpen} navbar>
        <Nav className='ml-auto' navbar>
        <NavItem>
            <Link className='nav-link' to='/collection'>Collection</Link>
          </NavItem>
          <NavItem>
            <Link className='nav-link' to='/about'>About</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
