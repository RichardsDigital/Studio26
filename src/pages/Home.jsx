import React from 'react';
import logoFull from '../images/logoFull.png'
import Carousel from '../components/Carousel';

import studio from '../images/carousel-Images/studio.png';

function Home() {
    return (
        <section className="homePage">
            <div className="homeBanner">
                <img src={logoFull}/>
            </div>
            <div className="innerContent">
                    <Carousel />
            </div>
            <div className="homeInfo">
                <div className="divide">
                    <div className="infoBox">
                        <h3>Studio 26</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Iaculis urna id volutpat lacus laoreet non curabitur. 
                        Cursus risus at ultrices mi tempus imperdiet nulla malesuada. 
                        Vitae justo eget magna fermentum iaculis eu.
                        <br></br>
                        <br></br>
                        Mauris in aliquam sem fringilla ut morbi tincidunt. 
                        Etiam sit amet nisl purus in mollis. Amet aliquam id diam maecenas ultricies mi. 
                        Id diam vel quam elementum. Diam volutpat commodo sed egestas.
                        </p>
                        <button>Get in touch</button>
                    </div>
                    <div className="smallImageBox">
                        <img src={studio}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
