import React, {Component} from 'react';
import { Link } from 'react-router';

class Togglebar extends Component {

   render() {
      return (

        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default">1950</button>
          <button type="button" className="btn btn-default">1970</button>
          <button type="button" className="btn btn-default">1990</button>
          <button type="button" className="btn btn-default">2010</button>
          <button type="button" className="btn btn-default">2030</button>
          <button type="button" className="btn btn-default">2050</button>
        </div>
  )
 }
}
 export default Togglebar;
