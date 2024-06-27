import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer ${props.rootClassName} `}>
      <div className="max-width-container">
        <footer className="footer-footer1">
          <div className="footer-container">
            <h3 className="footer-text Heading-3">{props.heading}</h3>
            <span className="footer-text01">
              <span className="">
                4517 Washington Ave. Manchester, Kentucky 39495,
              </span>
              <br className=""></br>
              <span className="">United States</span>
            </span>
            <span className="footer-text04">{props.text}</span>
            <span className="footer-text05">{props.text1}</span>
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <span className="footer-text06">{props.text2}</span>
              <span className="footer-text07">{props.text3}</span>
              <span className="footer-text08">{props.text4}</span>
              <span className="footer-text09">{props.text5}</span>
              <span className="footer-text10">{props.text6}</span>
              <span className="footer-text11">{props.text7}</span>
              <span className="footer-text12">{props.text8}</span>
            </div>
            <div className="footer-container2">
              <span className="footer-text13">{props.text9}</span>
              <span className="footer-text14">{props.text10}</span>
              <span className="footer-text15">{props.text11}</span>
              <span className="footer-text16">{props.text12}</span>
              <span className="footer-text17">{props.text13}</span>
              <span className="footer-text18">{props.text14}</span>
            </div>
            <div className="footer-container3">
              <span className="footer-text19">{props.text15}</span>
              <span className="footer-text20">{props.text16}</span>
              <span className="footer-text21">{props.text17}</span>
              <span className="footer-text22">{props.text18}</span>
              <span className="footer-text23">{props.text19}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  heading: 'MOBILLIO',
  text14: 'Blog',
  text3: 'Collections',
  text5: 'Furniture',
  text15: 'Resources',
  rootClassName: '',
  text17: 'Order',
  text13: 'About',
  text7: 'Plants',
  text2: 'Categories',
  text4: 'Desks',
  text16: 'Contact us',
  text19: 'Shipping & Delivery',
  text10: 'Shop',
  text: '(671) 555-0110',
  text6: 'Lamps',
  text18: 'Track your order',
  text8: 'Decoration',
  text1: 'contact@mobillio.com',
  text9: 'Company',
  text11: 'Lookbook',
  text12: 'Specials',
}

Footer.propTypes = {
  heading: PropTypes.string,
  text14: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text15: PropTypes.string,
  rootClassName: PropTypes.string,
  text17: PropTypes.string,
  text13: PropTypes.string,
  text7: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text16: PropTypes.string,
  text19: PropTypes.string,
  text10: PropTypes.string,
  text: PropTypes.string,
  text6: PropTypes.string,
  text18: PropTypes.string,
  text8: PropTypes.string,
  text1: PropTypes.string,
  text9: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
}

export default Footer
