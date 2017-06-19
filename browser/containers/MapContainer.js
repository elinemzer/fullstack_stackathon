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
    this.showTen1950 = this.showTen1950.bind(this);
    this.showTen1970 = this.showTen1970.bind(this);
    this.showTen1990 = this.showTen1990.bind(this);
    this.showTen2010 = this.showTen2010.bind(this);
    this.showTen2030 = this.showTen2030.bind(this);
    this.showTen2050 = this.showTen2050.bind(this);
    this.megacities1950 = this.megacities1950.bind(this);
    this.megacities1970 = this.megacities1970.bind(this);
    this.megacities1990 = this.megacities1990.bind(this);
    this.megacities2010 = this.megacities2010.bind(this);
    this.megacities2030 = this.megacities2030.bind(this);
    this.megacities2050 = this.megacities2050.bind(this);
  }


  megacities1950(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.fiftypop[0].population && markerObject.fiftypop[0].population >= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.fiftypop[0].population,
          rank: markerObject.fiftypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  megacities1970(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.seventypop[0].population && markerObject.seventypop[0].population >= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.seventypop[0].population,
          rank: markerObject.seventypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  megacities1990(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.ninetypop[0].population && markerObject.ninetypop[0].population >= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.ninetypop[0].population,
          rank: markerObject.ninetypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  megacities2010(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.tenpop[0].population && markerObject.tenpop[0].population >= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.tenpop[0].population,
          rank: markerObject.tenpop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  megacities2030(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.thirtypop[0].population && markerObject.thirtypop[0].population >= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.thirtypop[0].population,
          rank: markerObject.thirtypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  megacities2050(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.twentyfiftypop[0].population && markerObject.twentyfiftypop[0].population >= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.twentyfiftypop[0].population,
          rank: markerObject.twentyfiftypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }


  showTen1950(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.fiftypop[0].rank && markerObject.fiftypop[0].rank <= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.fiftypop[0].population,
          rank: markerObject.fiftypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  showTen1970(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.seventypop[0].rank && markerObject.seventypop[0].rank <= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.seventypop[0].population,
          rank: markerObject.seventypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  showTen1990(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.ninetypop[0].rank && markerObject.ninetypop[0].rank <= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.ninetypop[0].population,
          rank: markerObject.ninetypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  showTen2010(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.tenpop[0].rank && markerObject.tenpop[0].rank <= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.tenpop[0].population,
          rank: markerObject.tenpop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  showTen2030(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.thirtypop[0].rank && markerObject.thirtypop[0].rank <= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.thirtypop[0].population,
          rank: markerObject.thirtypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
    })
  }

  showTen2050(){
    const markerData = data
    const filteredMarkers = markerData.filter(markerObject => {
      if (markerObject.twentyfiftypop[0].rank && markerObject.twentyfiftypop[0].rank <= 10){
        return markerObject
      }
    })
    const selectedMarkers = filteredMarkers.map(markerObject => {
        const latlng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}

        return {
          position: latlng,
          name: markerObject.name,
          imageURL: markerObject.imageURL,
          informalityrate: markerObject.informalityrate,
          dollaraday: markerObject.dollaraday,
          population: markerObject.twentyfiftypop[0].population,
          rank: markerObject.twentyfiftypop[0].rank
        }
      })
    this.setState({
      markers: selectedMarkers
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
      return {
        position: latlng,
        name: markerObject.name,
        imageURL: markerObject.imageURL,
        informalityrate: markerObject.informalityrate,
        dollaraday: markerObject.dollaraday,
        population: markerObject.fiftypop[0].population,
        rank: markerObject.fiftypop[0].rank
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
      return {
        position: latlng,
        name: markerObject.name,
        imageURL: markerObject.imageURL,
        informalityrate: markerObject.informalityrate,
        dollaraday: markerObject.dollaraday,
        population: markerObject.seventypop[0].population,
        rank: markerObject.seventypop[0].rank
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
      return {
        position: latlng,
        name: markerObject.name,
        imageURL: markerObject.imageURL,
        informalityrate: markerObject.informalityrate,
        dollaraday: markerObject.dollaraday,
        population: markerObject.ninetypop[0].population,
        rank: markerObject.ninetypop[0].rank
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
      return {
        position: latlng,
        name: markerObject.name,
        imageURL: markerObject.imageURL,
        informalityrate: markerObject.informalityrate,
        dollaraday: markerObject.dollaraday,
        population: markerObject.tenpop[0].population,
        rank: markerObject.tenpop[0].rank
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
      return {
        position: latlng,
        name: markerObject.name,
        imageURL: markerObject.imageURL,
        informalityrate: markerObject.informalityrate,
        dollaraday: markerObject.dollaraday,
        population: markerObject.thirtypop[0].population,
        rank: markerObject.thirtypop[0].rank
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
      return {
        position: latlng,
        name: markerObject.name,
        imageURL: markerObject.imageURL,
        informalityrate: markerObject.informalityrate,
        dollaraday: markerObject.dollaraday,
        population: markerObject.twentyfiftypop[0].population,
        rank: markerObject.twentyfiftypop[0].rank
      }
    })
  this.setState({
    markers: selectedMarkers
  })
}

onCityClick(clickedCity) {
  this.setState({
    markers: this.state.markers.map(marker => {
      if (marker === clickedCity) marker.showInfo = true
      console.log(this.state.markers)
      return marker;
    })
  })
}

onCityClose(clickedCity){
  this.setState({
    markers: this.state.markers.map(marker => {
      if (marker === clickedCity) marker.showInfo = false
      return marker;
    }),
  })
}

  render(){
    const popup = (this.state.visible ? <Popup clickedCity={this.state.clickedCity} /> : null)
    return (
      <div className="main-container">
        <Map
          containerElement={<div style={{height: '100%'}} />}
          mapElement={<div style={{height: '100%'}} />}
          center={{lat: 0, lng: 0}}
          zoom={2}
          markers={this.state.markers}
          onCityClick={this.onCityClick}
          onCityClose={this.onCityClose}
          handle1950submit={this.handle1950submit}
          handle1970submit={this.handle1970submit}
          handle1990submit={this.handle1990submit}
          handle2010submit={this.handle2010submit}
          handle2030submit={this.handle2030submit}
          handle2050submit={this.handle2050submit}
          megacities1950={this.megacities1950}
          megacities1970={this.megacities1970}
          megacities1990={this.megacities1990}
          megacities2010={this.megacities2010}
          megacities2030={this.megacities2030}
          megacities2050={this.megacities2050}
          showTen1950={this.showTen1950}
          showTen1970={this.showTen1970}
          showTen1990={this.showTen1990}
          showTen2010={this.showTen2010}
          showTen2030={this.showTen2030}
          showTen2050={this.showTen2050}

        />
        <Togglebar
          handle1950submit={this.handle1950submit}
          handle1970submit={this.handle1970submit}
          handle1990submit={this.handle1990submit}
          handle2010submit={this.handle2010submit}
          handle2030submit={this.handle2030submit}
          handle2050submit={this.handle2050submit}
          showTen1950={this.showTen1950}
          showTen1970={this.showTen1970}
          showTen1990={this.showTen1990}
          showTen2010={this.showTen2010}
          showTen2030={this.showTen2030}
          showTen2050={this.showTen2050}
        />
        {popup}
      </div>
    )
  }
}
