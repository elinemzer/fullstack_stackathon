// var Promise = require('bluebird');
// var db = require('./server/db');
// var Cities = require('./server/models/cities')
//
// var data = {
//   cities: [
//     {name: 'Tokyo', imageURL:null, informalityrate: null, dollaraday: null, latitude:'35.69', longitude:'139.6917'},
//     {name: 'New York', imageURL:null, informalityrate: null, dollaraday:null, latitude:'40.717', longitude:'-74.0037'},
//     {name: 'London', imageURL:null, informalityrate: null, dollaraday: null, latitude:'51.509', longitude:'-.1257'},
//     {name: 'Osaka', imageURL:null, informalityrate: null, dollaraday: null, latitude:'34.676', longitude:'135.5538'},
//     {name: 'Paris', imageURL:null, informalityrate: null, dollaraday: null, latitude:'48.853', longitude:'2.3488'},
//   ]
// }
//
// db.sync({force:true})
// .then(function() {
//   console.log("Dropped old data, now inserting data");
//   const creatingCities = Promise.map(data.cities, function (city) {
//     return Cities.create(city);
//   });
//   return Promise.all(creatingCities)
// })
// .then(function () {
//   console.log('Finished inserting data');
// })
// .catch(function (err) {
//   console.error('There was totally a problem', err, err.stack);
// })
// .finally(function () {
//   db.close(); // creates but does not return a promise
//   return null; // stops bluebird from complaining about un-returned promise
// });


//london fiftypop: '8.361', seventypop: '7.509', ninetypop: '8.054', tenpop: '9.699', thirtypop: null, twentyfiftypop: null,
//osaka fiftypop: '7.005', seventypop: '15.272', ninetypop: '18.389', tenpop: '19.492', thirtypop: '19.976', twentyfiftypop: null,
//paris fiftypop: '6.283', seventypop: '8.208', ninetypop: '9.330', tenpop: '10.460', thirtypop: null, twentyfiftypop: null,
