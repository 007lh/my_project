var mongoose = require('mongoose')
var MusicsSchema = require('./schemas')
var Music = mongoose.model('Music', MusicsSchema)
var express = require('express')
var app = express();
var port = process.env.PORT || 9000;

app.listen(port)

//var bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
const router = express.Router();
var bodyParser = require('body-parser');

 app.use(bodyParser());//解析body数据

//
//app.use(express.static(path.join(__dirname, 'public')))
//console.log(bodyParser)
//console.log(router)
mongoose.connect('mongodb://localhost/MUSIC_LIST');
mongoose.connection.on('connected', function () {
    console.log('Mongodb Connection success!');
});

app.get('/', function(req, res){
  /**设置响应头允许ajax跨域访问**/
res.setHeader("Access-Control-Allow-Origin","*");
/*星号表示所有的异域请求都可以接受，*/
res.setHeader("Access-Control-Allow-Methods","GET,POST");
  Music.fetch(function(err, music){
    //console.log(music)
    //res.send(music);
    res.send("cb("+JSON.stringify(music)+")");

  })

 });

 app.post('/', function(req, res){
   console.log(req.body);
   console.log(req.body.music);
   var musicObj = req.body.music;
   var _music
  _music = new Music({
         artist: musicObj.artist,
         country: musicObj.country,
         title: musicObj.title,
         year: musicObj.year,
         cover: musicObj.cover,
         language: musicObj.language,
         file: musicObj.file,
         summary: musicObj.summary
       });
     //console.log(req.body);
     //console.log(res.body);
     _music.save(function (err,music) {
       console.log(music)
       if (err) return handleError(err);
       // saved!
     });
     console.log('saved!')
     //res.send(req.body);
     res.send('hello data')
  });
/*
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.use('/list', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next()
});

router.get('/list', function(req, res){
  res.send('Hello World');
  console.log(req)
});



router.post("/list",function(req,res){
    consloe.log("hello");
    var musicObj = req.body.music;
    var music = new Musics({
          artist: musicObj.artist,
          country: musicObj.country,
          title: musicObj.title,
          year: musicObj.year,
          cover: musicObj.poster,
          language: musicObj.language,
          file: musicObj.flash,
          summary: musicObj.summary
        });
  console.log(res)
  console.log(req)
  console.log(musicObj)
  music.save(function (err,res,req) {
    if (err) return handleError(err);
    // saved!
  });
})
*/
