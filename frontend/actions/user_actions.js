var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants.js');

var UserActions = {
  receiveAllUsers: function(users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  }
};

module.exports = UserActions;
