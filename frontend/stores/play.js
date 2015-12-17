var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var PlayConstants = require('../constants/play_constants.js');


var _track = null;


var PlayStore = new Store(AppDispatcher);

PlayStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PlayConstants.PLAY:
      _addTrack(payload.trackUrl);
      break;
  }
  PlayStore.__emitChange();
};

var _addTrack = function(track){
  _track = track;
};

PlayStore.track = function(){
  return _track;
};



module.exports = PlayStore;
