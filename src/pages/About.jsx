import React from 'react';
import SC from 'soundcloud';
import studio from '../images/carousel-Images/studio.png';

class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = { music: null };
    }

    componentDidMount () {
        
        SC.initialize({
            client_id: 'YOUR_CLIENT_ID'
          });
          var track_url = 'https://soundcloud.com/user-915016109-716538663/sets/recording-portfolio';

          SC.oEmbed(track_url, { auto_play: true, maxheight: 200, maxwidth: 500}).then((oEmbed) => {
            this.setState({music: oEmbed.html}, () => {console.log(this.state.music)});
          });
    }

    render() {

        return (
            <section className="aboutPage">

            <div className="aboutInfo">
                <div className="infoBox">
                    <h3>About Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Iaculis urna id volutpat lacus laoreet non curabitur. 
                        Cursus risus at ultrices mi tempus imperdiet nulla malesuada. 
                        Vitae justo eget magna fermentum iaculis eu. 
                        Mauris in aliquam sem fringilla ut morbi tincidunt. 
                        Etiam sit amet nisl purus in mollis. Amet aliquam id diam maecenas ultricies mi. 
                        Id diam vel quam elementum. Diam volutpat commodo sed egestas.
                    </p>

                    <div className="divide">
                        <div className="smallImageBox left">
                            <img src={studio}/>
                        </div>
                        <div className="smallImageBox right">
                            <div className="soundcloudWidget" dangerouslySetInnerHTML={{__html: this.state.music}}></div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}


export default About;