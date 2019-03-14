var mongoose = require('mongoose')

var MusicsSchema = new mongoose.Schema({
  title:String,
  artist: String,
  luanguage: String,
  country: String,
  summary: String,
  file: String,
  cover: String,
  year: Number,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

MusicsSchema.pre('save', function(next){
  if(this.isNew) {
    console.log(this.isNew)
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else{
    this.meta.updateAt = Date.now()
  }

  next()
})

MusicsSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb)
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}

//var Musics = mongoose.model('Musics', MusicsSchema)
//module.exports = Musics
module.exports = MusicsSchema
