var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/session_constants');

var _sessionToken = null;
var _userId = window.currentUserId;
var _errors = [];

var SessionStore = new Store(AppDispatcher);

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SessionConstants.RECEIVED_CURRENT_USER:
      if(payload.user.errors) {
        _errors = payload.user.errors;
      } else {
        setSessionStorage(payload.user.id);
      }
      break;
    case SessionConstants.LOGOUT:
      removeSessionStorage();
      break;
  }
  SessionStore.__emitChange();
};

SessionStore.currentUser = function(){
  return _userId;
};

SessionStore.errors = function(){
  return _errors.slice(0);
};

var setSessionStorage = function(userId){
  _userId = userId;
  _errors = [];
};

var removeSessionStorage = function(){
  _userId = null;
};

module.exports = SessionStore;
