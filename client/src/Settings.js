import React, { Component } from 'react'

import { 
  Container, Row, Col, Form, FormGroup, 
  Label, Input, Button, Alert
} from 'reactstrap';

import { FaLock, FaLockOpen } from 'react-icons/fa';
import send from './utils/send';

class Settings extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      toggle: false,
      mismatch: false,
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  componentDidMount () {
    document.title = 'Settings | Bryce St. Pierre';
  }

  toggleChangePassword = () => {
    this.setState({ toggle: true });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangePassword = (e) => {
    e.preventDefault();

    if (this.state.newPassword !== this.state.confirmPassword)
      return this.setState({ mismatch: true });

    send('/api/settings/password', {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword
    }, res => {
      
    });
  };

  render() {
    return (
      <Container className={'mt-4'}>
        <Row className={'mb-3'}>
          <Col>
            <h3>Settings</h3>
          </Col>
        </Row>        
        <Row className={'justify-content-center mb-3'}>
          <Col xs={12} sm={10} md={8} lg={8} xl={6}>
            <h5 className={'mb-3'}>Change Password</h5>
            { !this.state.toggle && <Button onClick={this.toggleChangePassword}>
              Change <FaLockOpen />
            </Button> }
            { this.state.toggle && <Form onSubmit={this.handleChangePassword}>
              <FormGroup>
                <Label for='oldPassword'>Current Password</Label>
                <Input 
                  type='password'
                  id='oldPassword'
                  name='oldPassword'
                  value={this.state.oldPassword}
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for='newPassword'>New Password</Label>
                <Input 
                  type='password'
                  id='newPassword'
                  name='newPassword'
                  value={this.state.newPassword}
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for='confirmPassword'>Confirm</Label>
                <Input 
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  value={this.state.confirmPassword}
                  onChange={this.handleChange} />
              </FormGroup>
              <Button
                type='submit'
                color='primary'>
                Change&ensp;<FaLock />
              </Button>
            </Form> }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Settings;
