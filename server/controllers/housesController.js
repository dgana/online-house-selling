var housesModel = require('../models/housesModel.js')
const seedData = require('../seed/houseSeed')
const mongoose = require('mongoose')

module.exports = {
  seed: function(req, res) {
    mongoose.connection.db.dropCollection('houses', (err, result) => {
      if (err) throw err
      console.log('Dropped collection: houses')
    })

    housesModel.create(seedData, (err, houses) => {
      if (err) throw err
      res.json(houses)
    })
  },

  list: function (req, res) {
    housesModel.find(function (err, houses) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting houses.',
          error: err
        })
      }
      return res.json(houses)
    })
  },

  show: function (req, res) {
    var id = req.params.id
    housesModel.findOne({_id: id}, function (err, houses) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting houses.',
          error: err
        })
      }
      if (!houses) {
        return res.status(404).json({
          message: 'No such houses'
        })
      }
      return res.json(houses)
    })
  },

  create: function (req, res) {
    var houses = new housesModel({      name: req.body.name,      price: req.body.price,      createdAt: new Date(),      spec: req.body.spec,      image: req.body.image,      lat: req.body.lat,
      lng: req.body.lng
    })

    houses.save(function (err, houses) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating houses',
          error: err
        })
      }
      return res.status(201).json(houses)
    })
  },

  update: function (req, res) {
    var id = req.params.id
    housesModel.findOne({_id: id}, function (err, houses) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting houses',
          error: err
        })
      }
      if (!houses) {
        return res.status(404).json({
          message: 'No such houses'
        })
      }

      houses.name = req.body.name || houses.name;      houses.price = req.body.price || houses.price;      houses.createdAt = new Date() || houses.createdAt;      houses.spec = req.body.spec || houses.spec;      houses.image = req.body.image || houses.image;      houses.lat = req.body.lat || houses.lat
      houses.lng = req.body.lng || houses.lng

      houses.save(function (err, houses) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating houses.',
            error: err
          })
        }

        return res.json(houses)
      })
    })
  },

  remove: function (req, res) {
    var id = req.params.id
    housesModel.findByIdAndRemove(id, function (err, houses) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the houses.',
          error: err
        })
      }
      return res.status(200).json(houses)
    })
  }
}
