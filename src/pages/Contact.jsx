import React from 'react';
import GoogleMap from '../components/GoogleMap';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.emailOpen = this.emailOpen.bind(this);
    }

    emailOpen(){
        window.location.href = `mailto:${'RichardsDigital.info@gmail.com'}`;
    }

    render() {
        return (
            <section className="contactPage">
                <div className="contactInfo">
                    <div className="infoBox">
                        <h3>Get in touch</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Iaculis urna id volutpat lacus laoreet non curabitur. 
                        Cursus risus at ultrices mi tempus imperdiet nulla malesuada. 
                        </p>

                        <div className="splitLine"></div>

                        <button onClick={this.emailOpen}>Email Us</button>

                        <h4>Location</h4>

                        <div id="googleMap">
                            <GoogleMap />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;