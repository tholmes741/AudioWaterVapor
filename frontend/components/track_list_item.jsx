var React = require('react');

var TrackListItem = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.track.title}
        <br></br>
        <img src={this.props.track.image} className="thumbnail"></img>
        <audio src={this.props.track.track_url} controls>
        </audio>
      </div>
    );
  }
});


module.exports = TrackListItem;
