var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/session_constants');

var _sessionToken = null;
var _username = window.currentUsername;
var _errors = [];

var SessionStore = new Store(AppDispatcher);

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SessionConstants.RECEIVED_CURRENT_USER:
      if(payload.user.errors) {
        _errors = payload.user.errors;
      } else {
        setSessionStorage(payload.user.username, payload.user.sessionToken);
      }
      break;
    case SessionConstants.LOGOUT:
      removeSessionStorage();
      break;
  }
  SessionStore.__emitChange();
};

SessionStore.currentUser = function(){
  return _username;
};

SessionStore.errors = function(){
  return _errors.slice(0);
};

var setSessionStorage = function(username, sessionToken){
  _username = username;
  _sessionToken = sessionToken;
  _errors = [];
};

var removeSessionStorage = function(){
  _username = null;
  _sessionToken = null;
};

module.exports = SessionStore;
