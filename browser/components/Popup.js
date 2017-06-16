import React, {Component} from 'react';
import { Link } from 'react-router';
import data from '../../data'

export default class Popup extends Component {

   render() {
      return (
                 <div className="row">
                  <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                   <img src={data.imageURL} />
                     <div className="caption">
                       <h3>{data.name}</h3>
                         <h5>Rate of informal employment: {data.informalityrate}</h5>
                         <h5>Percent of residents living on less than $5 a day: {data.dollaraday}</h5>
                     </div>
                  </div>
                  </div>
                 </div>
      )
    }
}
