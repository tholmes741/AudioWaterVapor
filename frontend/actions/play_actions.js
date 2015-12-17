var AppDispatcher = require('../dispatcher/dispatcher');
var PlayConstants = require('../constants/play_constants.js');

var PlayActions = {
  playSong: function(trackUrl){
    AppDispatcher.dispatch({
      actionType: PlayConstants.PLAY,
      trackUrl: trackUrl
    });
  }
};

module.exports = PlayActions;
