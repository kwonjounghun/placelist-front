import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: {
                name: null
            },
            location:{
                lat: 37.5650172,
                lng: 126.8494652
            }
        }

    }
    render() {
        const MapStyle = {
            "width": "100%",
            "height": "500px"
        }

        return (
            <Map
                google={this.props.google}
                initialCenter={this.props.marker.length > 0 ? this.props.marker[0].location : this.state.location}
                zoom={14}
                style={MapStyle}
            >
                {this.props.marker.map((places, i) => {
                    return (<Marker onClick={this.onMarkerClick}
                        name={places.name}
                        index = {i}
                        position={places.location}
                    />)
                })}

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>


            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8gmDrzadTXNJ58dPFynb2qwc6Qh_xRew'
})(MapContainer)