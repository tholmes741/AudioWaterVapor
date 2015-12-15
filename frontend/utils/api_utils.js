var UserActions = require('../actions/user_actions.js');

var ApiUtils = {
  fetchAllUsers: function(){
    $.get('api/users', {}, UserActions.receiveAllUsers);
  }
};


module.exports = ApiUtils;
