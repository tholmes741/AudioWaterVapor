var AppDispatcher = require('../dispatcher/dispatcher.js');
var SearchConstants = require('../constants/search_constants.js');

var SearchActions = {
  search: function(results) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.SEARCH,
      users: results.users,
      tracks: results.tracks
    });
  }

};


module.exports = SearchActions;
