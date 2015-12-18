var React = require('react');
var PlayStore = require('../stores/play.js');
var PlayActions = require('../actions/play_actions');

var TrackListItem = React.createClass({

  handleClick: function(){
    PlayActions.playSong(this.props.track);
  },

  render: function(){

    return (
      <li className="track-list-item">
        {this.props.track.title}
        <br></br>
        <img
          onClick={this.handleClick}
          src={this.props.track.image}
          className="icon"></img>
      </li>
    );
  }
});


module.exports = TrackListItem;
