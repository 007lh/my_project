import React from 'react'
import { browserHistory } from 'react-router'
import '../../static/css/admin.css'
//import mongoose from 'mongoose'
//import MusicsSchema from './admin/schemas'
//var Musics = mongoose.model('Musics', MusicsSchema)

////let Admin = React.createClass({
//const music=new Object();
var music={};

class Admin extends React.Component {

  constructor(props) {
     super(props);
     this.state= {
       artist: '',
       country: '',
       title: '',
       year: '',
       cover: '',
       language: '',
       file: '',
       summary: ''
     };
   }


   handleSubmit(event) {
    //event.preventDefault();
    console.log(event.target.elements[0].value)
    /*
    let music = new Musics({
          artist: event.target.elements[0].value,
          country: event.target.elements[1].value,
          title: event.target.elements[2].value,
          year: event.target.elements[3].value,
          cover: event.target.elements[4].value,
          language: event.target.elements[5].value,
          file: event.target.elements[6].value,
          summary: event.target.elements[7].value
        });
        music.save(function (err,res,req) {
          if (err) return handleError(err);
          // saved!
          console.log(res)
          console.log(req)
        });*/
  }

  handleChange(name,e){
    //  if(name=='artist'){this.setState(Object.assign({}, this.state.music, {artist: e.target.value}))};
      if(name=='title'){this.setState({title:e.target.value})};//{title:e.target.value}//Object.assign({}, this.state.music, {title: e.target.value})
      if(name=='artist'){this.setState({artist:e.target.value})};
      if(name=='year'){this.setState({year:e.target.value})};
      if(name=='cover'){this.setState({cover:e.target.value})};
      if(name=='language'){this.setState({language:e.target.value})};
      if(name=='country'){this.setState({country:e.target.value})};
      if(name=='summary'){this.setState({summary:e.target.value})};
      if(name=='file'){this.setState({file:e.target.value})};
	  //this.setState({[name]: value});
   }

  render(){
    return (
    <div>
      <div className="centerword">后台录入页</div>
        <div className="container textframe">
          <input type="hidden" name="music[_id]"/>
          <form method="post" action="http://localhost:9000" onSubmit={this.handleSubmit}>
            <div className="samllframe">
              <label htmlFor="inputTitle" className="control-label" className="lab">歌曲名字</label>
              <div className="-col-auto">
                <input id="inputTitle" type="text"  name="music[title]" onChange={this.handleChange.bind(this,'title')} value={this.state.title}/>
              </div>
            </div>
            <div className="samllframe">
              <label htmlFor="inputDoctor" className="lab">歌手</label>
              <div className="col-sm-10">
                <input id="inputDoctor" type="text"  name="music[artist]" onChange={this.handleChange.bind(this,'artist')} value={this.state.artist}/>
              </div>
            </div>
            <div className="samllframe">
              <label htmlFor="inputCountry" className="lab">歌手の国家</label>
              <div className="col-sm-10">
                <input id="inputCountry" type="text"  name="music[country]" onChange={this.handleChange.bind(this,'country')} value={this.state.country}/>
              </div>
            </div>
            <div className="samllframe">
              <label htmlFor="inputLanguage" className="lab">语种</label>
              <div className="col-sm-10">
                <input id="inputLanguage" type="text"  name="music[language]" onChange={this.handleChange.bind(this,'language')} value={this.state.language}/>
              </div>
            </div>
            <div className="samllframe">
              <label htmlFor="inputPoster" className="lab">专辑封面</label>
              <div className="col-sm-10">
                <input id="inputPoster" type="text"  name="music[cover]" onChange={this.handleChange.bind(this,'cover')} value={this.state.cover}/>
              </div>
            </div>
            <div className="samllframe">
              <label htmlFor="inputFlash" className="lab">音乐地址</label>
              <div className="col-sm-10">
                <input id="inputFlash" type="text"  name="music[file]" onChange={this.handleChange.bind(this,'file')} value={this.state.file}/>
              </div>
            </div>
            <div className="samllframe">
              <label htmlFor="inputYear" className="lab">出版年代</label>
              <div className="col-sm-10">
                <input id="inputYear" type="text"  name="music[year]" onChange={this.handleChange.bind(this,'year')} value={this.state.year}/>
              </div>
            </div>
            <div className="samllframe">
              <label htmlFor="inputSummary" className="lab">作者简介</label>
              <div className="col-sm-10">
                <input id="inputSummary" type="text"  name="music[summary]" onChange={this.handleChange.bind(this,'summary')} value={this.state.summary}/>
              </div>
            </div>
            <div className="centerword">
              <div className="col-sm-offset-2 col-sm-10"></div>
                <button type="submit" className="btn btn-default">录入</button>
              </div>
        </form>
      </div>
    </div>
  )}
};

export default Admin;
//modle.exports(Admin)
