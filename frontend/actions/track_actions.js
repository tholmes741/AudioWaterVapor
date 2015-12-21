var TrackConstants = require('../constants/track_constants');
var AppDispatcher = require('../dispatcher/dispatcher.js');


var TrackActions = {
  receiveAllTracks: function(tracks) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracks
    });
  },

  updateTrack: function(track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACK_UPDATED,
      track: track
    });
  }
};

module.exports = TrackActions;
