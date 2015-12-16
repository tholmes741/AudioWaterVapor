var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var TrackConstants = require('../constants/track_constants.js');


var _tracks = [];

var TrackStore = new Store(AppDispatcher);

TrackStore.__onDispatch = function (payload){
  switch(payload.actionType) {
    case TrackConstants.TRACKS_RECEIVED:
      resetTracks(payload.tracks);
      break;
  }
  TrackStore.__emitChange();
};

var resetTracks = function(tracks) {
  _tracks = tracks;
};

TrackStore.all = function() {
  return _tracks.slice(0);
};

module.exports = TrackStore;
