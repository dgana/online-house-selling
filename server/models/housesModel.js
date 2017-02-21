var mongoose = require('mongoose')
var Schema = mongoose.Schema

var housesSchema = new Schema({  'name': String,  'price': Number,  'createdAt': Date,  'spec': String,  'image': String,  'lat': Number,  'lng': Number})

module.exports = mongoose.model('houses', housesSchema)
