import React from 'react'
import ListItem from '../components/MusicListItem'

let MusicList = React.createClass({
  render(){
    let listElement=null;
    listElement = this.props.musicList.map((item)=>{
      return <ListItem key={item.id}
                       MusicItem={item}
                       focus={item===this.props.currentMusicItem}></ListItem>
    });
    return (
      <div>
        <ul>
          {listElement}
        </ul>
      </div>
    );
  }
});

export default MusicList;
