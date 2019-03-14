var mongoose = require('mongoose')
var MusicsSchema = require('./schemas')
var Musics = mongoose.model('Musics', MusicsSchema)

module.exports = Musics
