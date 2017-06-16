import React, {Component} from 'react'
import {withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps';
import mapStyles from '../../public/mapStyles'
import data from '../../data'
import Togglebar from '../components/Togglebar';

class Map extends Component {

  render () {
    const markers = this.props.markers || []

    return (
      <GoogleMap
        defaultOptions={{ styles: mapStyles }}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}>

        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            onClick={() => this.props.onCityClick(marker)}
            >


            </Marker>
        ))}
      <Togglebar />
    </GoogleMap>
    )
  }
}

export default withGoogleMap(Map);
