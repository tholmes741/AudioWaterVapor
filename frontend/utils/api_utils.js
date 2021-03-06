var UserActions = require('../actions/user_actions.js');
var TrackActions = require('../actions/track_actions.js');
var SessionActions = require('../actions/session_actions.js');
var SearchActions = require('../actions/search_actions.js');


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

  createUser: function(user, cb){
    $.ajax({
      url: 'api/users',
      type: 'POST',
      data: {user: user},
      success: function(response) {
        UserActions.receiveNewUser(response);
        cb();
      }
    });
  },

  updateUser: function(user, id, cb) {
    $.ajax({
      url: 'api/users/' + id,
      type: 'PATCH',
      data: {user: user},
      success: function(response) {
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
  },

  createFollow: function(follow){
    $.ajax({
      url: 'api/follow',
      type: 'POST',
      data: {follow: follow},
      success: UserActions.updateUser
    });
  },

  destroyFollow: function(follow){
    $.ajax({
      url: 'api/follow',
      type: 'DELETE',
      data: {follower: follow.follower, followee: follow.followee},
      success: UserActions.updateUser
    });
  },

  createTrack: function(track, cb) {
    $.ajax({
      url: 'api/tracks',
      type: 'POST',
      data: {track: track},
      success: function(response){
        UserActions.updateUser(response);
        cb();
      }
    });
  },

  updateTrackCounter: function(trackId){
    $.ajax({
      url: '/api/tracks/' + trackId,
      type: 'PATCH',
      data: {},
      success: function(response) {
        UserActions.updateUser(response);
        var playedTrack;
        response.tracks.forEach(function(track){
          if(track.id === trackId) {
            playedTrack = track;
          }
        });
        TrackActions.updateTrack(playedTrack);
      }
    });
  },

  search: function(search){
    $.ajax({
      url: 'api/search',
      type: 'GET',
      data: {search: search},
      success: SearchActions.search
    });
  }
};


module.exports = ApiUtils;
