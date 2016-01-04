/* global url*/
var React = require('react');
var PlayStore = require('../stores/play.js');
var PlayActions = require('../actions/play_actions');
var Like = require('./like.jsx');

var UserTrackListItem = React.createClass({

  handleClick: function(){
    this.props.registerTracks(this.props.idx);
  },

  button: function(){
    if (this.props.track.id === this.props.currentTrack) {
      return(<span className='fa fa-pause fa-2x' onClick={this.handleClick}></span>);
    } else {
      return(<span className='fa fa-play fa-2x'onClick={this.handleClick}></span>);
    }
  },

  render: function(){
    var image = url + 'w_39,h_39/' + this.props.track.image;
    return (
      <li className="track-list-item">
        <div className='item-content'>
          <span><img
            onClick={this.handleClick}
            src={image}
            className="icon"></img></span>
          {this.button()}
          <span>{this.props.track.title}</span>
          <span><Like track={this.props.track}/></span>
          <span className='play-count'>Play Count: {this.props.track.playCount}</span>
        </div>
      </li>
    );
  }
});

module.exports = UserTrackListItem;
