import React from 'react'
import {withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps';

const InitialMap = withGoogleMap(props => {

  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={1}
      defaultCenter={{lat: 0, lng: 0}}
    >
    </GoogleMap>
  )
});

export default InitialMap;
