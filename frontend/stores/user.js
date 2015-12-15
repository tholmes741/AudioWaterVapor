var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/user_constants.js');

var _users = [];

var UserStore = new Store(AppDispatcher);

UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      break;
  }
  UserStore.__emitChange();
};

var resetUsers = function(users){
  _users = users;
};

UserStore.all = function() {
  return _users.slice(0);
};



module.exports = UserStore;
