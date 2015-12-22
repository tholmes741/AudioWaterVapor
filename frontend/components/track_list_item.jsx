/* global url*/
var React = require('react');
var PlayStore = require('../stores/play.js');
var PlayActions = require('../actions/play_actions');
var History = require('react-router').History;
var Like = require('./like.jsx');

var TrackListItem = React.createClass({
  mixins: [History],

  handleClick: function(){
    this.props.registerTracks(this.props.idx);
  },

  userProfile: function(){
    this.history.pushState(null, 'users/' + this.props.track.user.id);
  },


  render: function(){
    var image = url + 'w_35,h_35/' + this.props.track.image;
    var avatar = url + 'w_35,h_35/' + this.props.track.user.avatar;
    return (
      <li className="track-list-item">
        <div className='item-content'>
          {this.props.track.title}
          <br></br>
          Play
          <img
            onClick={this.handleClick}
            src={image}
            className="icon"></img>
          <div>{this.props.track.user.username}</div>
          <img
            src={avatar}
            className="icon"
            onClick={this.userProfile}></img>
          <Like track={this.props.track}/>
        </div>
      </li>
    );
  }
});


module.exports = TrackListItem;
