import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/bootstrap/bootstrap.min.css';

import mixer from '../images/carousel-Images/mixer.png';
import guitar from '../images/carousel-Images/guitar.png';
import studio from '../images/carousel-Images/studio.png';

function Karousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 carouselImage"
                src={mixer}
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100 carouselImage"
                src={guitar}
                alt="Third slide"
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                className="d-block w-100 carouselImage"
                src={studio}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Karousel;