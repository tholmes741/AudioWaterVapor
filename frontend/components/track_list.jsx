var React = require('react');
var TrackStore = require('../stores/tracks');
var ApiUtils = require('../utils/api_utils.js');
var TrackListItem = require('./track_list_item.jsx');

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

  render: function(){
    var tracks = this.state.tracks.map( function(track, idx){
      return(< TrackListItem track={track} key={idx} />);
    });
    return(
      <div className='track-list-container'>
        Track List
        <ul className='track-list'>
          {tracks}
        </ul>
      </div>
    );
  }
});

module.exports = TrackList;
