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

            {marker.showInfo && (
            <InfoWindow onCloseClick={() => this.props.onCityClose(marker)}>
              {
                <div className="row">
                <div className="col-sm-12">
                 <div className="thumbnail" width="100" height="100">
                  <img src={marker.imageURL} />
                    <div className="caption">
                      <h3>{marker.name}</h3>
                        <h4>Population: {marker.population} million</h4>
                        <h4> Rank: {marker.rank}</h4>
                        <h5>Rate of informal employment: {marker.informalityrate}%</h5>
                        <h5>Percent of residents living on less than $5 a day: {marker.dollaraday}%</h5>
                    </div>
                 </div>
                 </div>
                </div>
              }
            </InfoWindow>
          )}


            </Marker>
        ))}
      <Togglebar />
    </GoogleMap>
    )
  }
}

export default withGoogleMap(Map);
