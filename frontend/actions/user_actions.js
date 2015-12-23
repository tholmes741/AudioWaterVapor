var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants.js');

var UserActions = {
  receiveAllUsers: function(users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveNewUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.NEW_USER_RECEIVED,
      user: user
    });
  },

  updateUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_UPDATED,
      user: user
    });
  }
};

module.exports = UserActions;
