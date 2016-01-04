var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var PlayConstants = require('../constants/play_constants.js');


var _track = null;
var _trackQueue = [];
var _idx = null;


var PlayStore = new Store(AppDispatcher);

PlayStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PlayConstants.PLAY:
      _addTracks(payload.tracks, payload.idx);
      break;
    case PlayConstants.NEXT_TRACK:
      _nextTrack();
  }
  PlayStore.__emitChange();
};

var _nextTrack = function(){
  if (_idx < _trackQueue.length){
    _idx += 1;
    _track = _trackQueue[_idx];
  }
};

var _addTracks = function(tracks, idx){
  _idx = idx;
  _trackQueue = tracks;
  _track = _trackQueue[idx];
};

PlayStore.track = function(){
  return _track;
};

PlayStore.idx = function(){
  return _idx;
};



module.exports = PlayStore;
