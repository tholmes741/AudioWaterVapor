var React = require('react');

var TrackListItem = React.createClass({
  render: function(){
    return (
      <div>
        <img src={this.props.track.image}></img>
        <audio src={this.props.track.track_url} controls>
        </audio>
      </div>
    );
  }
});


module.exports = TrackListItem;
