var React = require('react');
var SessionStore = require('../stores/session.js');
var UserStore = require('../stores/user.js');
var ApiUtils = require('../utils/api_utils.js');

var Follow = React.createClass({
  getInitialState: function(){
    var currentUser = UserStore.find(SessionStore.currentUser());
    var follows = [];
    if (currentUser) {
      currentUser.follows.forEach(function(follow){
        follows.push(follow.followee);
      });
    }
    return {
      currentUser: UserStore.find(SessionStore.currentUser()),
      follows: follows
    };
  },

  componentDidMount: function(){
    this.listener = SessionStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  onChange: function(){
    var currentUser = UserStore.find(SessionStore.currentUser());
    var follows = [];
    currentUser.follows.forEach(function(follow){
      follows.push(follow.followee);
    });
    this.setState({currentUser: currentUser, follows: follows});
  },

  follow: function(e){
    e.preventDefault();
    var follow = {
      follower: this.state.currentUser.id,
      followee: this.props.userId
    };
    ApiUtils.createFollow(follow);
  },

  unfollow: function(e){
    e.preventDefault();

  },

  button: function(){
    var button;
    if (SessionStore.currentUser() === null){
      button = <div></div>;
    } else if (this.props.userId === SessionStore.currentUser()) {
      button = <div></div>;
    } else if (this.state.follows.indexOf(this.props.userId) > -1) {
      button = (
        <button className='btn follow-btn'
          onClick={this.unfollow}>Unfollow</button>);
    } else {
      button = (
        <button
          className='btn follow-btn'
          onClick={this.follow}>Follow</button>);
    }

    return button;
  },

  render: function(){

    return (
      <div>
        {this.button()}
      </div>
    );
  }
});

module.exports = Follow;
