import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types'
import { logIn } from '../api/ContactService';

import './sign-in.css'

const SignIn = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogIn = async() => { 
    const result = await logIn(email, password) 
    //console.log(result);
    Cookies.set('userId', result.data, { secure: true });
    console.log(Cookies.get('userId'));
    history.push(`/`);
  };
  const handleRegister = () => { history.push('/register') }

  return (
    <>
    <div className="sign-in-container thq-section-padding">
      <div className="sign-in-max-width thq-section-padding thq-section-max-width">
        <div className="sign-in-form-root">
          <div className="sign-in-form">
            <h2 className="sign-in-text thq-heading-2">Sign in</h2>
            <form className="sign-in-form1">
              <div className="sign-in-email">
                <label
                  htmlFor="thq-sign-in-1-password"
                  className="thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-3-email"
                  required={true}
                  placeholder="Email address"
                  className="sign-in-textinput thq-input thq-body-large"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="sign-in-password">
                <div className="sign-in-container1">
                  <label
                    htmlFor="thq-sign-in-3-password"
                    className="thq-body-large"
                  >
                    Password
                  </label>
                  <div className="sign-in-hide-password">
                    <svg viewBox="0 0 1024 1024" className="sign-in-icon">
                      <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                    </svg>
                    <span className="thq-body-small">Hide</span>
                  </div>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-3-password"
                  required={true}
                  placeholder="Password"
                  className="sign-in-textinput1 thq-input thq-body-large"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            <div className="sign-in-container2">
              <button
                type="submit"
                className="sign-in-button thq-button-filled"
                onClick={handleLogIn}
              >
                <span className="sign-in-text4 thq-body-small">
                  Sign in
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="sign-in-container3">
          <div className="sign-in-divider">
            <div className="sign-in-divider1"></div>
            <p className="thq-body-large">New to our community</p>
            <div className="sign-in-divider2"></div>
          </div>
          <button type="button" className="sign-in-button1 thq-button-outline"
            onClick={handleRegister}
          >
            <span className="sign-in-text6 thq-body-small">
              Create an account
            </span>
          </button>
        </div>
      </div>
      <img
        alt='SignUp Image'
        src='https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTI5MzQyOTB8MA&ixlib=rb-4.0.3&w=1500'
        className="sign-in-sign-up-image thq-img-ratio-16-9"
      />
      <div className="sign-in-container4"></div>
    </div>
    <div className='bottom'></div>
    </>
  )
}



export default SignIn

