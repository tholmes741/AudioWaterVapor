var TrackConstants = require('../constants/track_constants');
var AppDispatcher = require('../dispatcher/dispatcher.js');


var TrackActions = {
  receiveAllTracks: function(tracks) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracks
    });
  }
};

module.exports = TrackActions;
