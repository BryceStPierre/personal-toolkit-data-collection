import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { FaHeart } from "react-icons/fa";
import bryce from './bryce.png';

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <Container fluid className={'mt-4 bg-light'}>
      { props.user && <Row>
        <Col className={'text-center mt-4'}>
          <p id='user-display'>Signed in as {props.user.displayNameShort}.<br/>Last login: {props.user.lastLogin}.</p>
        </Col>
      </Row> }
      <Row>
        <Col className={'text-center mt-2 mb-2'}>
          <img src={bryce} className={'branding-footer'} alt='Bryce St. Pierre' />
          <p className={'text-center mt-2'}> 
            Copyright &copy; {year} Bryce St. Pierre.<br/>Made with <FaHeart className='text-red' /> in Ottawa.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
