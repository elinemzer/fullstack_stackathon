import React, {Component} from 'react';
import { Link } from 'react-router';

class Togglebar extends Component {

   render() {
      return (

        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default" onClick={this.props.handle1950submit}>1950</button>
          <button type="button" className="btn btn-default" onClick={this.props.handle1970submit}>1970</button>
          <button type="button" className="btn btn-default" onClick={this.props.handle1990submit}>1990</button>
          <button type="button" className="btn btn-default" onClick={this.props.handle2010submit}>2010</button>
          <button type="button" className="btn btn-default" onClick={this.props.handle2030submit}>2030</button>
          <button type="button" className="btn btn-default" onClick={this.props.handle2050submit}>2050</button>
        </div>
  )
 }
}
 export default Togglebar;