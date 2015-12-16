var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/session_constants');

var _currentUser = null;
var _errors = [];

var SessionStore = new Store(AppDispatcher);

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SessionConstants.RECEIVED_CURRENT_USER:
      _currentUser = payload.currentUser;
      break;
    case SessionConstants.RECEIVED_ERRORS:
      _errors = payload.errors;
      break;
  }
  SessionStore.__emitChange();
};


SessionStore.currentUser = function(){
  return _currentUser;
};

SessionStore.errors = function(){
  return _error.slice(0);
};
