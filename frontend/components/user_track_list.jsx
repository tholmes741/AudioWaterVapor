var React = require('react');
var TrackListItem = require('./track_list_item.jsx');

var UserTrackList = React.createClass({


  render: function(){
    var tracks = this.props.tracks.map( function(track, idx){
      return(< TrackListItem track={track} key={idx} />);
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
