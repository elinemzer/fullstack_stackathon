const db = require('../db');
const Sequelize = require('sequelize');

const cities = db.define('City', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  informalityrate: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  fiftypop: {
    type: Sequelize.DECIMAL
  },
  seventypop: {
    type: Sequelize.DECIMAL
  },
  ninetypop: {
    type: Sequelize.DECIMAL
  },
  tenpop: {
    type: Sequelize.DECIMAL
  },
  thirtypop: {
    type: Sequelize.DECIMAL
  },
  twentyfiftypop: {
    type: Sequelize.DECIMAL
  },
  populationrank: {
    type: Sequelize.DECIMAL
  },
  latitude: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    defaultValue: null,
    validate: { min: -90, max: 90 }
  },
  longitude: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    defaultValue: null,
    validate: { min: -180, max: 180 }
  },
}, {
  validate: {
    bothCoordsOrNone() {
      if ((this.latitude === null) !== (this.longitude === null)) {
        throw new Error('Require either both latitude and longitude or neither')
      }
    }
  }
})

module.exports = cities;
