import React from 'react';
import Carousel from '../components/Carousel';
import SC from 'soundcloud';
import event01 from '../images/carousel-Images/event01.jpg';
import event02 from '../images/carousel-Images/event02.jpg';
import event03 from '../images/carousel-Images/event03.jpg';

class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = { music01: null, music02: null };
    }

    componentDidMount () {
        
        SC.initialize({
            client_id: 'YOUR_CLIENT_ID'
          });
          var track_url = 'https://soundcloud.com/user-915016109-716538663/sets/recording-portfolio';

          SC.oEmbed(track_url, { auto_play: true, maxheight: 170, maxwidth: 700}).then((oEmbed) => {
            this.setState({music01: oEmbed.html}, () => {console.log(this.state.music01)});
          });
          SC.initialize({
            client_id: 'YOUR_CLIENT_ID'
          });
          var track_url = 'https://soundcloud.com/user-915016109-716538663/magpie-holly-rees';

          SC.oEmbed(track_url, { auto_play: true, maxheight: 170, maxwidth: 700}).then((oEmbed) => {
            this.setState({music02: oEmbed.html}, () => {console.log(this.state.music02)});
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
                        <br></br><br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Iaculis urna id volutpat lacus laoreet non curabitur. 
                        Cursus risus at ultrices mi tempus imperdiet nulla malesuada. 
                        Vitae justo eget magna fermentum iaculis eu. 
                        Mauris in aliquam sem fringilla ut morbi tincidunt. 
                        Etiam sit amet nisl purus in mollis.
                    </p>

                    <div className="itemBlock">
                        <div className="smallImageBox">
                            <Carousel imageA={event01} imageB={event02} imageC={event03}/>
                        </div>
                    </div>

                    <div className="splitLine"></div>

                    <h4>Example</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. 
                    Ornare quam viverra orci sagittis eu volutpat. Maecenas accumsan lacus vel 
                    facilisis volutpat est velit egestas dui. Suspendisse in est ante in nibh mauris. 
                    Sit amet mattis vulputate enim. Est ultricies integer quis auctor elit sed vulputate. 
                    Est sit amet facilisis magna etiam tempor.
                    <br></br><br></br>
                    Enim ut sem viverra aliquet. Donec ultrices tincidunt arcu non. 
                    Tristique risus nec feugiat in fermentum posuere. Commodo viverra maecenas 
                    accumsan lacus vel facilisis volutpat. Nibh tellus molestie nunc non blandit. 
                    Auctor elit sed vulputate mi sit. Mi tempus imperdiet nulla malesuada pellentesque. 
                    Urna molestie at elementum eu facilisis sed odio morbi.
                    </p>

                    <div className="itemBlock">
                        <div className="soundcloudWidget" dangerouslySetInnerHTML={{__html: this.state.music01}}></div>
                    </div>

                    <div className="itemBlock">
                        <div className="soundcloudWidget" dangerouslySetInnerHTML={{__html: this.state.music02}}></div>
                    </div>

                    <button className="soundcloudButton">View All</button>

                    <div className="splitLine"></div>
                </div>
            </div>
            </section>
        )
    }
}


export default About;