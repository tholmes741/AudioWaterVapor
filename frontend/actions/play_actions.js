var AppDispatcher = require('../dispatcher/dispatcher');
var PlayConstants = require('../constants/play_constants.js');

var PlayActions = {
  playSong: function(tracks, idx){
    AppDispatcher.dispatch({
      actionType: PlayConstants.PLAY,
      tracks: tracks,
      idx: idx
    });
  },

  nextTrack: function() {
    AppDispatcher.dispatch({
      actionType: PlayConstants.NEXT_TRACK
    });
  }
};

module.exports = PlayActions;
