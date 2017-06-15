var Promise = require('bluebird');
var db = require('./server/db');
var Cities = require('./server/models/cities')

var data = {
  cities: [
    {name: 'Tokyo', informalityrate: null, fiftypop: '11.275', seventypop: '23.298', ninetypop: '32.530', tenpop: '36.834', thirtypop: '37.190', twentyfiftypop: '32.620', latitude:'35.69', longitude:'139.6917'},
    {name: 'New York', informalityrate: null, fiftypop: '12.338', seventypop: '16.191', ninetypop: '16.086', tenpop: '18.365', thirtypop: '19.885', twentyfiftypop: '24.770', latitude:'40.717', longitude:'-74.0037'},
    {name: 'London', informalityrate: null, fiftypop: '8.361', seventypop: '7.509', ninetypop: '8.054', tenpop: '9.699', thirtypop: null, twentyfiftypop: null, latitude:'51.509', longitude:'-.1257'},
    {name: 'Osaka', informalityrate: null, fiftypop: '7.005', seventypop: '15.272', ninetypop: '18.389', tenpop: '19.492', thirtypop: '19.976', twentyfiftypop: null, latitude:'34.676', longitude:'135.5538'},
    {name: 'Paris', informalityrate: null, fiftypop: '6.283', seventypop: '8.208', ninetypop: '9.330', tenpop: '10.460', thirtypop: null, twentyfiftypop: null, latitude:'48.853', longitude:'2.3488'},
  ]
}

db.sync({force:true})
.then(function() {
  console.log("Dropped old data, now inserting data");
  const creatingCities = Promise.map(data.cities, function (city) {
    return Cities.create(city);
  });
  return Promise.all(creatingCities)
})
.then(function () {
  console.log('Finished inserting data');
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close(); // creates but does not return a promise
  return null; // stops bluebird from complaining about un-returned promise
});
