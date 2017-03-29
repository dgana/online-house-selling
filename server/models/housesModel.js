var mongoose = require('mongoose')
var Schema = mongoose.Schema

var housesSchema = new Schema({  'name': String,  'price': Number,  'createdAt': Date,  'spec': String,  'image': String,  'lat': String,  'lng': String})

module.exports = mongoose.model('houses', housesSchema)
