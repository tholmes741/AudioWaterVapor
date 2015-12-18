var React = require('react');
var UserStore = require('../stores/user.js');
var UserTrackList = require('./user_track_list.jsx');

var UserPage = React.createClass({
  getInitialState: function(){
    return {
      user: UserStore.find(parseInt(this.props.params.userId))
    };
  },

  render: function(){
    var user = this.state.user;
    return (
      <div>
        <h2>{user.username}</h2>
        <img src={user.avatar}></img>
        <p>{user.bio}</p>
        <UserTrackList tracks={user.tracks}/>
      </div>
    );
  }

});

module.exports = UserPage;
