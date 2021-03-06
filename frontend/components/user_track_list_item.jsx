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
      return(<img src='http://res.cloudinary.com/tholmes741/image/upload/w_30,h_30/black-white-equaliser_xwtouk.png'></img>);
    } else {
      return(<span className='fa fa-play fa-2x'onClick={this.handleClick}></span>);
    }
  },

  render: function(){
    var image = url + 'w_50,h_50/' + this.props.track.image;
    var color = 'item-content';
    if (this.props.track.id === this.props.currentTrack) {
      color += ' playing';
    }
    return (
      <li className="track-list-item">
        <div className={color}>
          <span><img
            onClick={this.handleClick}
            src={image}
            className="icon"></img></span>
          {this.button()}
          <span><strong>{this.props.track.title}</strong></span>
          <span><Like track={this.props.track}/></span>
          <span className='play-count'>Play Count: {this.props.track.playCount}</span>
        </div>
      </li>
    );
  }
});

module.exports = UserTrackListItem;
