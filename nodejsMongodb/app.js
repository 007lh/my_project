var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()
var mongoose = require('mongoose')
var Movie = require('./models/Movie')
var _ = require('underscore')

mongoose.connect('mongodb://localhost/movies')
mongoose.connection.on('connected', function () {
    console.log('Connection success!');
});


app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'public')))
app.locals.moment = require("moment")
app.listen(port)

console.log('imooc started on port '+port)

//index page
app.get('/',function(req, res){
  Movie.fetch(function(err, movies){
    if(err){
      console.log(err)
    }
    res.render('index', {
      title: 'imooc 首页',
      movie: movies
    })
  })
})

//detail page
app.get('/movie/:id',function(req, res){
  var id = req.params.id

  Movie.findById(id, function(err, movie){
    res.render('detail', {
      title: 'imooc '+ movie.title,
      movie: movie
    })
  })
})

//admin page
app.get('/admin/movie',function(req, res){
  res.render('admin', {
    title: 'imooc 后台录入页',
    movie: {
      doctor: '',
      country: '',
      title: '',
      year: '',
      poster: '',
      language: '',
      flash: '',
      summary: ''
    }
  })
})

//admin update movie
app.get('/admin/update/:id', function(req, res) {
  var id = req.params.id
  console.log('req.params='+req.params)
  console.log(id)
  //res.send(id)

  if(id) {
    Movie.findById(id, function(err, movie) {
      res.render('admin', {
        title: 'imooc 后台更新页',
        movie: movie
      })
    })
  }

})
//admin post movie
app.post('/admin/movie/new', function(req, res) {
  var id = req.body.movie._id
  var movieObj = req.body.movie
  var _movie
  console.log('req.body='+req.body)
  //condole.log(req.body.movie)

  if(id !=='undefined') {
    Movie.findById(id, function(err, movie) {
      if(err) {
        console.log(err)
      }
      _movie = _.extend(movie, movieObj)
      _movie.save(function(err, movie) {
        if (err){
          console.log(err)
        }

        res.redirect('/movie/' + movie._id)
      })
    })
  }
  else{
    _movie = new Movie({
      doctor: movieObj.doctor,
      country: movieObj.country,
      title: movieObj.title,
      year: movieObj.year,
      poster: movieObj.poster,
      language: movieObj.language,
      flash: movieObj.flash,
      summary: movieObj.summary
    })

    _movie.save(function(err, movie){
      if (err){
        console.log(err)
      }

      res.redirect('/movie/' + movie._id)
    })
  }
})

//list page
app.get('/admin/list',function(req, res){
  Movie.fetch(function(err, movies){
    if(err){
      console.log(err)
    }
  res.render('list', {
    title: 'imooc 列表页',
    movie: movies
  })
  })
})

//list delete movie
app.delete('/admin/list', function(req, res){
  var id = req.query.id

  if(id){
    Movie.remove({_id:id}, function(err,movie){
      if(err){
        console.log(err)
      }
      else{
        res.json({success: 1})
      }
    })
  }else{
    res.json({success: 0, msg: 'id为空'})
  }
})
