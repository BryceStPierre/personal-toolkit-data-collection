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
      resultMessage: '',
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
      this.setState({
        mismatch: false,
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        resultMessage: res.message
      });
    });
  };

  render() {
    return (
      <Container> 
        <Row className={'justify-content-center mb-3'}>
          <Col xs={12} sm={10} md={8} lg={8} xl={6}>
            <h3 className={'mb-4'}>Settings</h3>
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
                  placeholder='Current Password'
                  value={this.state.oldPassword}
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for='newPassword'>New Password</Label>
                <Input 
                  type='password'
                  id='newPassword'
                  name='newPassword'
                  placeholder='New Password'
                  invalid={this.state.mismatch}
                  value={this.state.newPassword}
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for='confirmPassword'>Confirm</Label>
                <Input 
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  invalid={this.state.mismatch}
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
        { this.state.resultMessage !== '' && <Row>
          <Col>
            <Alert color={this.state.resultMessage.includes('Error') ? 'danger' : 'success'}>
              {this.state.resultMessage}
            </Alert>
          </Col>
        </Row> }
      </Container>
    );
  }
}

export default Settings;
