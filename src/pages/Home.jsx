import React from 'react';
import logoFull from '../images/logoFull.png'
import Karousel from '../components/Carousel';

function Home() {
    return (
        <section className="homeIntro">
            <div className="homeBanner">
                <img src={logoFull}/>
            </div>
            <div className="innerContent">
                    <Karousel />
            </div>
        </section>
    )
}

export default Home;
