import React, {Component} from 'react';
import InitialMap from '../components/InitialMap'

export default class MapContainer extends Component{

  render() {
    return (
      <div>
        <InitialMap
          containerElement={
            <div style={{height: "100%"}} />
          }
          mapElement={
            <div style={{height: "100%"}} />
          }
          />
          </div>
    )
  }
}
