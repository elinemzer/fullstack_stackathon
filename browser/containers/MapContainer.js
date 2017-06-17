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
    this.handle1950submit = this.handle1950submit.bind(this);
    this.handle1970submit = this.handle1970submit.bind(this);
    this.handle1990submit = this.handle1990submit.bind(this);
    this.handle2010submit = this.handle2010submit.bind(this);
    this.handle2030submit = this.handle2030submit.bind(this);
    this.handle2050submit = this.handle2050submit.bind(this);
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

handle1950submit(){
  const markerData = data
  const filteredMarkers = markerData.filter(markerObject => {
    if (markerObject.fiftypop[0].population){
      return markerObject
    }
  })
  const selectedMarkers = filteredMarkers.map(markerObject => {
      const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}
      console.log(latlng)
      return {
        position: latlng
      }
    })
  this.setState({
    markers: selectedMarkers
  })
}

handle1970submit(){
  const markerData = data
  const filteredMarkers = markerData.filter(markerObject => {
    if (markerObject.seventypop[0].population){
      return markerObject
    }
  })
  const selectedMarkers = filteredMarkers.map(markerObject => {
      const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}
      console.log(latlng)
      return {
        position: latlng
      }
    })
  this.setState({
    markers: selectedMarkers
  })
}

handle1990submit(){
  const markerData = data
  const filteredMarkers = markerData.filter(markerObject => {
    if (markerObject.ninetypop[0].population){
      return markerObject
    }
  })
  const selectedMarkers = filteredMarkers.map(markerObject => {
      const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}
      console.log(latlng)
      return {
        position: latlng
      }
    })
  this.setState({
    markers: selectedMarkers
  })
}

handle2010submit(){
  const markerData = data
  const filteredMarkers = markerData.filter(markerObject => {
    if (markerObject.tenpop[0].population){
      return markerObject
    }
  })
  const selectedMarkers = filteredMarkers.map(markerObject => {
      const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}
      console.log(latlng)
      return {
        position: latlng
      }
    })
  this.setState({
    markers: selectedMarkers
  })
}

handle2030submit(){
  const markerData = data
  const filteredMarkers = markerData.filter(markerObject => {
    if (markerObject.thirtypop[0].population){
      return markerObject
    }
  })
  const selectedMarkers = filteredMarkers.map(markerObject => {
      const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}
      console.log(latlng)
      return {
        position: latlng
      }
    })
  this.setState({
    markers: selectedMarkers
  })
}


handle2050submit(){
  const markerData = data
  const filteredMarkers = markerData.filter(markerObject => {
    if (markerObject.twentyfiftypop[0].population){
      return markerObject
    }
  })
  const selectedMarkers = filteredMarkers.map(markerObject => {
      const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}
      console.log(latlng)
      return {
        position: latlng
      }
    })
  this.setState({
    markers: selectedMarkers
  })
}


  render(){
    console.log('markerstate: ', this.state.markers)
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
        <Togglebar
          handle1950submit={this.handle1950submit}
          handle1970submit={this.handle1970submit}
          handle1990submit={this.handle1990submit}
          handle2010submit={this.handle2010submit}
          handle2030submit={this.handle2030submit}
          handle2050submit={this.handle2050submit}
        />
      </div>
    )
  }
}










// componentDidMount(){
//   const markerData = data;
//   const allMarkers = markerData.map(markerObject => {
//     const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}
//     return {
//       position: latlng
//     }
//   })
//   this.setState({
//     markers: allMarkers
//   })
// }
