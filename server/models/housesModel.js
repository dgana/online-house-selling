var mongoose = require('mongoose')
var Schema = mongoose.Schema

var housesSchema = new Schema({

module.exports = mongoose.model('houses', housesSchema)