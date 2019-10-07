/**
*
* Login
*
*/

import React from 'react';
import PropTypes from 'prop-types';


import styles from './styles.css';

function Login({ login }) {
  return (
    <div className={styles.login}>
      <div
        className={styles.heading}
      >
        Login with your email
      </div>
      <input
        className={styles.input}
        placeholder="Your email"
        type="text"
      />
      <div
        className={styles.actionContainer}
      >
        <div
          className={styles.button}
        >
          cancel
        </div>
        <div
          className={styles.button}
          onClick={() => login()}
        >
          log in
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
