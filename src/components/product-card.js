import React from 'react'

import PropTypes from 'prop-types'

import './product-card.css'

const ProductCard = (props) => {
  return (
    <div className={`product-card-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card-image"
      />
      <div className="product-card-container1">
        <span className="product-card-text">{props.newProp}</span>
        <span className="product-card-text1">{props.description}</span>
        <a
          href={props.linkTo}
          target="_blank"
          rel="noreferrer noopener"
          className="button"
        >
          Read more
        </a>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  linkTo: '',
  imageAlt: 'image',
  description:
    'Consectetur sdasd adipiscing elit duis tristique sollicitudin nibhConsectetur sdasd adipiscing elit duis tristique sollicitudin nibh',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fHByb2R1Y3R8ZW58MHx8fHwxNzE1MDE1MjM2fDA&ixlib=rb-4.0.3&w=300',
  newProp: 'Chic sofa designs for 2022',
}

ProductCard.propTypes = {
  linkTo: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  newProp: PropTypes.string,
}

export default ProductCard
