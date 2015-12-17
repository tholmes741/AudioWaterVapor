var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/session_constants');

var _sessionToken = sessionStorage.getItem('session_token');
var _username = sessionStorage.getItem('username');
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

  sessionStorage.setItem('username', username);
  sessionStorage.setItem('session_token', sessionToken);
};

var removeSessionStorage = function(){
  _username = null;
  _sessionToken = null;

  sessionStorage.setItem('user', null);
  sessionStorage.setItem('session_token', null);
};

module.exports = SessionStore;
