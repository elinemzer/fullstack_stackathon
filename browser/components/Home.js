import React from 'react';
import { Link } from 'react-router';

export default function Home () {
  return (
    <div id="home-page">
      <img src="files/img/IMG_4690.jpg" />


      <div id="rectangle" className="panel panel-default">
        <div id="rectanglefont" className="panel-body">
           In 2009, the number of city-dwellers around the world passed the number living in rural areas for the first time in history.
        </div>
      </div>

      <div id="center" className="panel panel-default">
        <div id="centerfont" className="panel-body">
           <Link to="/map">EXPLORE</Link>
        </div>
      </div>

      <div id="rectangle2" className="panel panel-default">
        <div id="rectanglefont" className="panel-body">
           With nearly all of the planet’s population growth concentrated in developing countries, demographers and economists estimate that over the next 15 years, cities in emerging economies will create 50% of the world’s economic growth.
        </div>
      </div>


      </div>
  )
}
