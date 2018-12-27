import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {
  Navbar, NavbarBrand, NavbarToggler, Collapse,
  Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import bryce from './bryce.png';

class Navigation extends Component {
  render() {
    return (
      <Navbar color='light' light expand='sm'>
        <Link className='navbar-brand' to='/'>
          <img src={bryce} className={'branding'} alt='Bryce' />
          Data Collection
        </Link>
        <NavbarToggler onClick={this.props.onToggle} />
        <Collapse isOpen={this.props.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link className='nav-link' to='/collection'>Collection</Link>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
