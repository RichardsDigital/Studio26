import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// AIzaSyBYXhSrR7tuKgu1fvFK2QTIJGDoRKy7XS4

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);

    }
    

    render() {
        const containerStyle = {
            width: '70%',
            height: '50%'
        }
        
        return (
            <Map 
                google={this.props.google} 
                zoom={14} 
                containerStyle={containerStyle}
                initialCenter={{
                    lat: 54.97,
                    lng: -1.61
                }}>
    
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
        
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                    <h1>place</h1>
                    </div>
                </InfoWindow>

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBYXhSrR7tuKgu1fvFK2QTIJGDoRKy7XS4')
  })(GoogleMap)