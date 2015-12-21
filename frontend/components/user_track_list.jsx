var React = require('react');
var UserTrackListItem = require('./user_track_list_item.jsx');
var PlayActions = require('../actions/play_actions.js');

var UserTrackList = React.createClass({

  registerTracks: function(idx){
    PlayActions.playSong(this.props.tracks, idx);
  },

  render: function(){
    var that = this;
    var tracks = this.props.tracks.map( function(track, idx){
      return(< UserTrackListItem
        track={track}
        key={idx}
        idx={idx}
        registerTracks={that.registerTracks}/>);
    });
    return(
      <div className='track-list-container'>
        Tracks
        <ul className='track-list'>
          {tracks}
        </ul>
      </div>
    );
  }
});

module.exports = UserTrackList;
