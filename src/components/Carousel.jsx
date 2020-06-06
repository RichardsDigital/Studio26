import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import mixer from '../images/carousel-Images/mixer.png';
import guitar from '../images/carousel-Images/guitar.png';
import studio from '../images/carousel-Images/studio.png';

function Karousel() {
    return (
        <Carousel>
            <div>
                <img src={mixer} />
            </div>
            <div>
                <img src={guitar} />
            </div>
            <div>
                <img src={studio} />
            </div>
        </Carousel>
    )
}

export default Karousel;