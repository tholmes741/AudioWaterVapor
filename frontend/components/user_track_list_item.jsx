/* global url*/
var React = require('react');
var PlayStore = require('../stores/play.js');
var PlayActions = require('../actions/play_actions');

var UserTrackListItem = React.createClass({

  handleClick: function(){
    this.props.registerTracks(this.props.idx);
  },

  render: function(){
    var image = url + 'w_35,h_35/' + this.props.track.image;
    return (
      <li className="track-list-item">
        {this.props.track.title}
        <br></br>
        <img
          onClick={this.handleClick}
          src={image}
          className="icon"></img>
      </li>
    );
  }
});

module.exports = UserTrackListItem;
