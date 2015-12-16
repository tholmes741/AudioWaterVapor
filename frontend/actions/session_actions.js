var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants.js');

var SessionActions = {
  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVED_CURRENT_USER,
      user: user
    });
  },

 logout: function(){
   AppDispatcher.dispatch({
     actionType: SessionConstants.LOGOUT,
   });
 }
};

module.exports = SessionActions;
