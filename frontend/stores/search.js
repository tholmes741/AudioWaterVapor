var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SearchConstants = require('../constants/search_constants.js');

var _tracks = [];
var _users = [];

var SearchStore = new Store(AppDispatcher);

SearchStore.__onDispatch = function(payload){
  switch(payload.actionType) {

    case SearchConstants.SEARCH:
      _tracks = payload.tracks;
      _users = payload.users;
      break;
    case SearchConstants.EMPTY:
      _emptyResults();
      break;
  }
  SearchStore.__emitChange();
};

SearchStore.users = function(){
  return _users.slice(0);
};

SearchStore.tracks = function(){
  return _tracks.slice(0);
};

var _emptyResults = function() {
  _tracks = [];
  _users = [];
};


module.exports = SearchStore;
