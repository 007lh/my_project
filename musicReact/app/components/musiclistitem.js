import React from 'react'
import './musiclistitem.less'
import Pubsub from 'pubsub-js'

let MusicListItem = React.createClass({
  playMusic(MusicItem){
    Pubsub.publish('PLAY_MUSIC', MusicItem);
  },
  deleteMusic(MusicItem, e){
    e.stopPropagation();
    Pubsub.publish('DELETE_MUSIC', MusicItem);
  },
  render(){
    let MusicItem = this.props.MusicItem;
    return(
      <li onClick={this.playMusic.bind(this, MusicItem)}
        className={`components-listitem row${this.props.focus ? ' focus' : ''}`}>
        <p><strong>{MusicItem.title}</strong> -- {MusicItem.artist}</p>
        <p onClick={this.deleteMusic.bind(this, MusicItem)}
          className="delete -col-auto"></p>
      </li>
  )}
});

export default MusicListItem;
