import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import { FaHeart } from "react-icons/fa";

import bryce from '../bryce.png';

const Footer = (props) => {
  let lastLogin = props.user ? new Date(props.user.lastLogin) : new Date();
  
  return (
    <Container className={'bg-light'}>
      { props.user && <Row>
        <Col>
          <p className={'text-center text-small mb-0'}>
            {/* Signed in as {props.user.displayNameShort}.<br/> */}
            Last login: {lastLogin.toDateString() + ' ' + lastLogin.toLocaleTimeString() }.
          </p>
        </Col>
      </Row> }
      <Row>
        <Col className={'text-center mt-3 mb-2'}>
          <img 
            src={bryce} 
            alt='Bryce St. Pierre' 
            className={'branding-footer'} />
          <p className={'text-center mt-2'}> 
            Copyright &copy; {new Date().getFullYear()} Bryce St. Pierre.<br/>
            Made with <FaHeart className='text-red' /> in Ottawa.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
