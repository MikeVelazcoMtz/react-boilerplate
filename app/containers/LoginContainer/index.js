/*
 *
 * LoginContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLoginContainer from './selectors';

import Login from '../../components/Login';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  login() {
    console.log('Login!');
  }

  render() {
    return (
      <div>
        <Login login={this.login} emailRef={this.emailRef} />
      </div>
    );
  }
}

const mapStateToProps = selectLoginContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
