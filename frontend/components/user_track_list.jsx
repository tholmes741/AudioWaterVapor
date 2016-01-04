var React = require('react');
var UserTrackListItem = require('./user_track_list_item.jsx');
var PlayActions = require('../actions/play_actions.js');
var PlayStore = require('../stores/play.js');

var UserTrackList = React.createClass({
  getInitialState: function(){
    return {currentTrack: null};
  },

  componentDidMount: function() {
    this.listener = PlayStore.addListener(this.trackChanged);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  trackChanged: function() {
    if (PlayStore.track()) {
      this.setState({currentTrack: PlayStore.track().id});
    }
  },

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
        registerTracks={that.registerTracks}
        currentTrack={that.state.currentTrack}/>);
    });
    return(
      <div className='user-track-list-container'>
        <ul className='track-list'>
          {tracks}
        </ul>
      </div>
    );
  }
});

module.exports = UserTrackList;
