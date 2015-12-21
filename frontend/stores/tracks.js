var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var TrackConstants = require('../constants/track_constants.js');


var _tracks = {};

var TrackStore = new Store(AppDispatcher);

TrackStore.__onDispatch = function (payload){
  switch(payload.actionType) {
    case TrackConstants.TRACKS_RECEIVED:
      resetTracks(payload.tracks);
      break;
    case TrackConstants.TRACK_UPDATED:
      trackUpdate(payload.track);
      break;
  }
  TrackStore.__emitChange();
};

var resetTracks = function(tracks) {
  tracks.forEach(function(track){
    _tracks[track.id] = track;
  });
};

var trackUpdate = function(track){
  _tracks[track.id] = track;
};

TrackStore.all = function() {
  var tracks = [];
  Object.keys(_tracks).forEach(function(key){
    tracks.push(_tracks[key]);
  });
  return tracks;
};

module.exports = TrackStore;
