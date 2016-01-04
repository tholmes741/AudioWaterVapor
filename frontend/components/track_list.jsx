var React = require('react');
var TrackStore = require('../stores/tracks');
var ApiUtils = require('../utils/api_utils.js');
var TrackListItem = require('./track_list_item.jsx');
var PlayActions = require('../actions/play_actions.js');
var PlayStore = require('../stores/play.js');

var TrackList = React.createClass({
  getInitialState: function(){
    return {tracks: [], currentTrack: null};
  },

  componentDidMount: function(){
    this.listener = TrackStore.addListener(this.tracksChanged);
    this.play = PlayStore.addListener(this.playChanged);
    ApiUtils.fetchAllTracks();
  },

  componentWillUnmount: function(){
    this.listener.remove();
    this.play.remove();
  },

  playChanged: function(){
    this.setState({currentTrack: PlayStore.idx()});
  },

  tracksChanged: function() {
    this.setState({tracks: TrackStore.all()});
  },

  registerTracks: function(idx){
    PlayActions.playSong(this.state.tracks, idx);
  },

  render: function(){
    var that = this;
    var tracks = this.state.tracks.map( function(track, idx){
      return(
        < TrackListItem
          track={track}
          key={idx}
          idx={idx}
          registerTracks={that.registerTracks}
          currentTrack={that.state.currentTrack}/>);
    });
    return(
      <div className='track-list-container'>
        <div className='track-list'>
          <ul className='track-list'>
            {tracks}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = TrackList;
