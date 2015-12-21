var UserActions = require('../actions/user_actions.js');
var TrackActions = require('../actions/track_actions.js');
var SessionActions = require('../actions/session_actions.js');

var ApiUtils = {
  fetchAllUsers: function(){
    $.get('api/users', {}, UserActions.receiveAllUsers);
  },

  fetchAllTracks: function(){
    $.get('api/tracks', {}, TrackActions.receiveAllTracks);
  },

  createSession: function(credentials){
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: {user: credentials},
      success: SessionActions.receiveCurrentUser,
    });
  },

  destroySession: function() {
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      data: {},
      success: SessionActions.logout
    });
  },

  createUser: function(user){
    $.ajax({
      url: 'api/users',
      type: 'POST',
      data: {user: user},
      success: SessionActions.receiveCurrentUser
    });
  },

  createLike: function(like){
    $.ajax({
      url: 'api/likes',
      type: 'POST',
      data: {like: like},
      success: function(response){
        console.log(response);
      }
    });
  },

  destroyLike: function(like){
    $.ajax({
      url: 'api/likes',
      type: 'DELETE',
      data: {like: like},
      success: function(response){
        console.log('deleted', response);
      }
    });
  }
};


module.exports = ApiUtils;
