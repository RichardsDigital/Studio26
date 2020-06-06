import React from 'react';
import logoFull from '../images/logoFull.png'

function Home() {
    return (
        <section className="homeIntro">
            <div className="homeBanner">
                <img src={logoFull}/>
            </div>
            <div className="innerContent">
                <h1>carousel</h1>
            </div>
        </section>
    )
}

export default Home;