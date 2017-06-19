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
                 <div className="thumbnail" width="100px" height="50px">
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
      <div className='legend'>MAPPING THE GLOBE'S URBAN CENTERS FROM 1950 to 2050 </div>

      <div className='title'>view the 30 most populous cities in each year. </div>
      <div id="topthirty" className="btn-group-vertical" role="group" aria-label="...">
        <button type="button" className="btn btn-default" onClick={this.props.handle1950submit}>1950</button>
        <button type="button" className="btn btn-default" onClick={this.props.handle1970submit}>1970</button>
        <button type="button" className="btn btn-default" onClick={this.props.handle1990submit}>1990</button>
        <button type="button" className="btn btn-default" onClick={this.props.handle2010submit}>2010</button>
        <button type="button" className="btn btn-default" onClick={this.props.handle2030submit}>2030</button>
        <button type="button" className="btn btn-default" onClick={this.props.handle2050submit}>2050</button>
      </div>

      <div className='title2'>view the ten most populous cities in each year. </div>
      <div id="topten" className="btn-group-vertical" role="group" aria-label="...">
        <button type="button" className="btn btn-default" onClick={this.props.showTen1950}>1950</button>
        <button type="button" className="btn btn-default" onClick={this.props.showTen1970}>1970</button>
        <button type="button" className="btn btn-default" onClick={this.props.showTen1990}>1990</button>
        <button type="button" className="btn btn-default" onClick={this.props.showTen2010}>2010</button>
        <button type="button" className="btn btn-default" onClick={this.props.showTen2030}>2030</button>
        <button type="button" className="btn btn-default" onClick={this.props.showTen2050}>2050</button>
      </div>

      <div className="otherTitle">view the world's megacities of more than ten million.</div>
      <div id="megacities" className="btn-group-vertical" role="group" aria-label="...">
        <button type="button" className="btn btn-default" onClick={this.props.megacities1950}>1950</button>
        <button type="button" className="btn btn-default" onClick={this.props.megacities1970}>1970</button>
        <button type="button" className="btn btn-default" onClick={this.props.megacities1990}>1990</button>
        <button type="button" className="btn btn-default" onClick={this.props.megacities2010}>2010</button>
        <button type="button" className="btn btn-default" onClick={this.props.megacities2030}>2030</button>
        <button type="button" className="btn btn-default" onClick={this.props.megacities2050}>2050</button>
      </div>
    </GoogleMap>
    )
  }
}

export default withGoogleMap(Map);
