import React, {Component} from 'react';
import Map from '../components/Map';
import Togglebar from '../components/Togglebar';
import data from '../../data';

export default class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      markers: []
    }
    this.onCityClick = this.onCityClick.bind(this);
  }

componentDidMount(){
  const markerData = data;
  const allMarkers = markerData.map(markerObject => {
    const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}
    return {
      position: latlng
    }
  })
  this.setState({
    markers: allMarkers
  })
}

onCityClick(clickedCity) {
  this.setState({
    markers: this.state.markers.map(marker => {
      if (marker === clickedCity) marker.showInfo = true
      marker.showInfo = (
        <div className="row">
          <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
           <img src={marker.imageURL} />
             <div className="caption">
               <h3>{marker.name}</h3>
                 <h5>Rate of informal employment: {marker.informalityrate}</h5>
                 <h5>Percent of residents living on less than $5 a day: {marker.dollaraday}</h5>
             </div>
          </div>
          </div>
         </div>
      )
      console.log('marker', marker.imageURL)
      return marker;
    })
  })
}

  render(){
    return (
      <div className="main-container">
        <Map
          containerElement={<div style={{height: '100%'}} />}
          mapElement={<div style={{height: '100%'}} />}
          center={{lat: 0, lng: 0}}
          zoom={2}
          markers={this.state.markers}
          onCityClick={this.onCityClick}
        />
      </div>
    )
  }
}
