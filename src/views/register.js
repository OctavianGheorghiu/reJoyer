import React, { useEffect, useState } from 'react'

import './register.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { counties } from '../variables/constants';
import Cookies from 'js-cookie';
import { register} from '../api/ContactService';

const Register = (props) => {

  const [ name, setName] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ county, setCounty ] = useState('');
  const [ password, setPassword] = useState('');
  const history = useHistory();

  const handleClick = async () =>{
    const newContact = {
      "name": name,
      "email": email,
      "phone": phone,
      "address": county,
      "password": password
    }
    const result = await register(newContact);
    // console.log("this is the result", result);
    // console.log("this is the result.data.id",result.data.id);
    if(result.status == 201) {
      Cookies.set('userId', result.data.id, { secure: true });
      history.push("/");
    }
  }

  return (
    <div className="app-component-container">
      <div className="app-component-container1">
        <div className="app-component-form-root">
          <div className="app-component-form">
            <div className="app-component-title-root">
              <h2 className="app-component-text thq-heading-2">Sign up</h2>
            </div>
            <form className="app-component-form1">
              <div className="app-component-name">
                <label className="thq-body-large">
                  Name
                </label>
                <input
                  type="text"
                  required={true}
                  placeholder="Name"
                  className="app-component-textinput thq-input thq-body-large"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="app-component-email">
                <label className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  required={true}
                  placeholder="Email address"
                  className="app-component-textinput1 thq-input thq-body-large"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="app-component-phone">
                <label className="thq-body-large">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required={true}
                  placeholder="Phone Number"
                  className="app-component-textinput2 thq-input thq-body-large"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="app-component-county">
                <label className="thq-body-large">
                  County
                </label>
                <select 
                  value={county}
                  className="select-county"
                  size="5"
                  onChange={(e) => setCounty(e.target.value)}
                  >
                    {counties.map((county) => (
                    <option key={county} value={county}>{county}</option>
                ))}
                  </select>
              </div>
              
              <div className="app-component-password">
                <label className="thq-body-large">
                  <span>Password</span>
                  <br></br>
                </label>
                <input
                  type="password"
                  required={true}
                  className="app-component-textinput3 thq-input thq-body-large"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            <div className="app-component-container2">
              <p className="app-component-text15 thq-body-large">
                <span>
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="app-component-button thq-button-filled"
              onClick={handleClick}
            >
              <span className="app-component-text18 thq-body-small">
                Sign up
              </span>
            </button>
            <div>
              <span>Already have an account? </span>
              <span style={{ color: 'blue' }} onClick={() => {history.push("/log-in")}}>Sign in.</span>
            </div>
          </div>
        </div>
        <div className="app-component-container3 thq-section-padding">
          <div className="app-component-list">
            <h2 className="app-component-text20 thq-heading-2">
              Your plan includes
            </h2>
            <div className="app-component-list-item">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <p className="app-component-text21 thq-body-large">
                Feature text goes here
              </p>
            </div>
            <div className="app-component-list-item1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <p className="app-component-text22 thq-body-large">
                Feature text goes here
              </p>
            </div>
            <div className="app-component-list-item2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <p className="app-component-text23 thq-body-large">
                Feature text goes here
              </p>
            </div>
            <div className="app-component-list-item3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <p className="app-component-text24 thq-body-large">
                Feature text goes here
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0NHx8YWJzdHJhY3R8ZW58MHx8fHwxNzEyOTM3OTkzfDA&amp;ixlib=rb-4.0.3&amp;w=1400"
            className="app-component-image thq-img-ratio-1-1"
          />
          <div className="app-component-container4"></div>
        </div>
      </div>
    </div>
  )
}

export default Register
