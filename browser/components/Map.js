import React, {Component} from 'react'
import {withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps';

class Map extends Component {

  render () {
    const markers = this.props.markers || []

    return (
      <GoogleMap
        defaultZoom={2}
        defaultCenter={{lat: 0, lng: 0}}>
        {markers.map((marker, index) => (
          <Marker {...marker} />
        )
      )}
    </GoogleMap>
    )
  }
}

export default withGoogleMap(Map);
