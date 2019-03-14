import React from 'react';
import Header from './components/header'
import Player from './page/player'
import MUSIC_LIST from './config/musiclist'
import MusicList from './page/musiclist'
import Admin from './page/admin'
import {IndexRoute, Link, Router, Route, hashHistory} from 'react-router'
import Pubsub from 'pubsub-js'

//var MUSIC_LIST=[];
let App = React.createClass({
  getInitialState() {
    alert(MUSIC_LIST)
    return {currentMusicItem:MUSIC_LIST[0],
						musicList:MUSIC_LIST
			}
  } ,
  playMusic(MusicItem){
    $('#player').jPlayer('setMedia',{
      mp3:MusicItem.file}).jPlayer('play');
      this.setState({currentMusicItem:MusicItem});
  },
  playNext(type='next'){
    let index = this.findMusicItem(this.state.currentMusicItem);
    let musicListLength = this.state.musicList.length;
    let newIndex = null;
    if(type==='next'){
      newIndex = (index+1)%musicListLength;
    }else{
      newIndex = (index-1+musicListLength)%musicListLength;
    }
    this.playMusic(this.state.musicList[newIndex]);
  },
  findMusicItem(MusicItem){
    return this.state.musicList.indexOf(MusicItem);
  },
  componentDidMount() {
    $('#player').jPlayer({
      supplied: 'mp3',
      wmode: "window"
    });
    this.playMusic(this.state.currentMusicItem);
    $('#player').bind($.jPlayer.event.ended, e=>{
      this.playNext();
    });
    Pubsub.subscribe('DELETE_MUSIC',(msg, MusicItem)=>{
      this.setState({musicList:this.state.musicList.filter(item=>{
        return item !== MusicItem;
      })})
    });
    Pubsub.subscribe('PLAY_MUSIC',(msg, MusicItem)=>{
        this.playMusic(MusicItem);
    });
    Pubsub.subscribe('PLAY_PREV',(msg, MusicItem)=>{
        this.playNext('prev');
    });
    Pubsub.subscribe('PLAY_NEXT',(msg, MusicItem)=>{
        this.playNext('next');
    });

  } ,

  componentWillUnMount(){
      Pubsub.unsubscribe('DELETE_MUSIC');
      Pubsub.unsubscribe('PLAY_MUSIC');
      Pubsub.unsubscribe('PLAY_NEXT');
      Pubsub.unsubscribe('PLAY_PREV');
  } ,

  render(){
    return (
      <div>
          <Header/>
          {React.cloneElement(this.props.children, this.state)}
      </div>
    )
  }
})
let Root = React.createClass({
  render(){
    return(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Player}></IndexRoute>
        <Route path='/list' component={MusicList}></Route>
        <Route path='/admin/music' component={Admin}></Route>
      </Route>
    </Router>);
  }
});

export default Root;


//player 播放页面
//musicList  歌单
//
