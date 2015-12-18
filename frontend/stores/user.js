var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/user_constants.js');

var _users = {};

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
  users.forEach(function(user){
    _users[user.id] = user;
  });
};

UserStore.all = function() {
  var users = [];
  Object.keys(_users).forEach(function(key){
    users.push(_users[key]);
  });
  return users;
};

UserStore.find = function(id){
  return _users[id];
};



module.exports = UserStore;
