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
      var cover = url + 'w_900,h_300/' + user.cover;
      return(
        <div className='profile-container'>
          <div >
            <img className='cover'
               src={cover}></img>
            <img className='avatar'src={avatar}></img>
            <h2 className='username'>{user.username}</h2>
          </div>
          <div>
            <div className='bio col-sm-offset-2 col-sm-offset-10'>
              <h3>Bio</h3>
              {user.bio}
            </div>
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
