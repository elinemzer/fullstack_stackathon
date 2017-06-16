import React, {Component} from 'react';
import Map from '../components/Map'

export default (props) => {

    return (
      <div className="main-container">
        <Map
          containerElement={<div style={{height: '100%'}} />}
          mapElement={<div style={{height: '100%'}} />}
        />
      </div>
    )
  }
