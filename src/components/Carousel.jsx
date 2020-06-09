import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/bootstrap/bootstrap.min.css';



class Karousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carouselImage"
                    src={this.props.imageA}
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100 carouselImage"
                    src={this.props.imageB}
                    alt="Third slide"
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100 carouselImage"
                    src={this.props.imageC}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Karousel;