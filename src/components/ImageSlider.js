import React from 'react';
import Slider from "react-slick";

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="/images/alege.png" alt="Image 1" />
            </div>
            <div>
                <img src="/images/cumpara.png" alt="Image 2" />
            </div>
            <div>
                <img src="/images/vinde.png" alt="Image 3" />
            </div>
        </Slider>
    );
}

export default ImageSlider;