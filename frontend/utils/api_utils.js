var UserActions = require('../actions/user_actions.js');
var TrackActions = require('../actions/track_actions.js');
var SessionActions = require('../actions/session_actions.js');
var UserActions = require('../actions/user_actions.js');

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
      success: function(response){
        SessionActions.receiveCurrentUser(response);
        ApiUtils.fetchAllUsers();
      }
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

  updateUser: function(user, id, cb) {
    $.ajax({
      url: 'api/users/' + id,
      type: 'PATCH',
      data: {user: user},
      success: function(response) {
        console.log('yay');
        UserActions.updateUser(response);
        cb && cb();
      },
      error: function(response) {
      }
    });
  },

  createLike: function(like){
    $.ajax({
      url: 'api/likes',
      type: 'POST',
      data: {like: like},
      success: function(response){
        UserActions.updateUser(response);
        var likedTrack;
        response.tracks.forEach(function(track){
          if(track.id === like.track_id) {
            likedTrack = track;
          }
        });
        TrackActions.updateTrack(likedTrack);
      }
    });
  },

  destroyLike: function(likeId, trackId) {
    $.ajax({
      url: 'api/likes/' + likeId,
      type: 'DELETE',
      data: {},
      success: function(response){
        UserActions.updateUser(response);
        var unlikedTrack;
        response.tracks.forEach(function(track){
          if(track.id === trackId) {
            unlikedTrack = track;
          }
        });
        TrackActions.updateTrack(unlikedTrack);
      }
    });
  }


};


module.exports = ApiUtils;
