import React from 'react';
import logoFull from '../images/logoFull.png'
import Carousel from '../components/Carousel';

function Home() {
    return (
        <section className="homeIntro">
            <div className="homeBanner">
                <img src={logoFull}/>
            </div>
            <div className="innerContent">
                    <Carousel />
            </div>
        </section>
    )
}

export default Home;
