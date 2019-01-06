import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { FaHeart } from "react-icons/fa";
import bryce from './bryce.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container fluid className={'mt-4 bg-light'}>
      <Row>
        <Col className={'text-center mt-4 mb-2'}>
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
