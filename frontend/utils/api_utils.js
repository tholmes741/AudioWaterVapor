var UserActions = require('../actions/user_actions.js');
var TrackActions = require('../actions/track_actions.js');

var ApiUtils = {
  fetchAllUsers: function(){
    $.get('api/users', {}, UserActions.receiveAllUsers);
  },

  fetchAllTracks: function(){
    $.get('api/tracks', {}, TrackActions.receiveAllTracks);
  },

  createSession: function(credentials){
    $.post('session/new', {user: credentials}, SessionActions.receiveUser)
  }
};


module.exports = ApiUtils;
