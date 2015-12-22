var React = require('react');
var TrackStore = require('../stores/tracks');
var ApiUtils = require('../utils/api_utils.js');
var TrackListItem = require('./track_list_item.jsx');
var PlayActions = require('../actions/play_actions.js');

var TrackList = React.createClass({
  getInitialState: function(){
    return {tracks: []};
  },

  componentDidMount: function(){
    this.listener = TrackStore.addListener(this.tracksChanged);
    ApiUtils.fetchAllTracks();
  },

  componentWillUnmount: function(){
    this.listener.remove();
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
          registerTracks={that.registerTracks}/>);
    });
    return(
      <div className='track-list-container'>
        Track List
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
