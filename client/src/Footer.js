import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import { FaHeart } from "react-icons/fa";

import bryce from './bryce.png';

const Footer = (props) => (
  <Container className={'bg-light'}>
    { props.user && <Row>
      <Col className={'text-center mt-4'}>
        <p className={'text-small mb-0'}>
          Signed in as {props.user.displayNameShort}.<br/>Last login: {new Date(props.user.lastLogin).toLocaleString()}.
        </p>
      </Col>
    </Row> }
    <Row>
      <Col className={'text-center mt-2 mb-2'}>
        <img 
          src={bryce} 
          className={'branding-footer'} 
          alt='Bryce St. Pierre' />
        <p className={'text-center mt-2'}> 
          Copyright &copy; {new Date().getFullYear()} Bryce St. Pierre.<br/>Made with <FaHeart className='text-red' /> in Ottawa.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
