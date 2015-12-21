/* global url */
var React = require('react');
var UserStore = require('../stores/user.js');
var UserTrackList = require('./user_track_list.jsx');
var ApiUtils = require('../utils/api_utils.js');

var UserPage = React.createClass({
  getInitialState: function(){
    return {
      user: UserStore.find(parseInt(this.props.params.userId))
    };
  },

  componentDidMount: function(){
    this.listener = UserStore.addListener(this.onChange);
    ApiUtils.fetchAllUsers();
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  componentWillReceiveProps: function(){
    this.setState({user: UserStore.find(parseInt(this.props.params.userId))});
  },

  onChange: function(){
    this.setState({user: UserStore.find(parseInt(this.props.params.userId))});
  },

  userPage: function(){
    if (this.state.user) {
      var user = this.state.user;
      var avatar = url + 'w_150,h_180/' + user.avatar;
      return(
        <div>
          <h2>{user.username}</h2>
          <img className='avatar'src={avatar}></img>
          <div>
            <h3>Bio</h3>
            <p>{user.bio}</p>
          </div>
          <UserTrackList tracks={user.tracks}/>
        </div>
      );
    }
  },



  render: function(){
    return (
      <div>
        {this.userPage()}
      </div>
    );
  }

});

module.exports = UserPage;
