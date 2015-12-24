/* global url */
var React = require('react');
var UserStore = require('../stores/user.js');
var UserTrackList = require('./user_track_list.jsx');
var ApiUtils = require('../utils/api_utils.js');
var FollowButton = require('./follow_button.jsx');
var Following = require('./following.jsx');

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

  componentWillReceiveProps: function(newProps){
    this.setState({user: UserStore.find(parseInt(newProps.params.userId))});
  },

  // shouldComponentUpdate: function(nextProps, nextState){
  //   return true;
  // },

  onChange: function(){
    this.setState({user: UserStore.find(parseInt(this.props.params.userId))});
  },

  userPage: function(){
    if (this.state.user) {
      var user = this.state.user;
      var avatar = url + 'w_180,h_200/' + user.avatar;
      var cover = url + 'w_1196,h_400/' + user.cover;
      return(
        <div className='profile-container'>
          <div>
            <img className='cover'
               src={cover}></img>
            <img className='avatar'src={avatar}></img>
            <h2 className='username'>{user.username}</h2>
          </div>
          <div>
            <div className='bio  col-sm-offset-10'>
              <h3>Bio</h3>
              {user.bio}
            </div>
          </div>
          <div>
            <div className='following col-sm-2'>
              <h3>Following</h3>
              <Following follows={this.state.user.follows}/>
            </div>
          </div>
          <UserTrackList tracks={user.tracks}/>
          <FollowButton userId={this.state.user.id} />
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
