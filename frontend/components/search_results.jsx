var React = require('react');
var SearchStore = require('../stores/search.js');
var ApiUtils = require('../utils/api_utils.js');

var SearchResults = React.createClass({
  getInitialState: function() {
    return {
      users: [],
      tracks: []
    };
  },

  componentDidMount: function(){
    this.listener = SearchStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  onChange: function(){
    this.setState({
      users: SearchStore.users(),
      tracks: SearchStore.tracks()
    });
  },

  matches: function() {
    var results = [];
    var counter = 1;
    this.state.users.forEach(function(user){
      results.push(<li key={counter}>{user.username}</li>);
      counter +=1;
    });
    this.state.tracks.forEach(function(track){
      results.push(<li key={counter}>{track.title}</li>);
      counter += 1;
    });
    return results;
  },

  render: function(){
    return (
      <ul>
        {this.matches()}
      </ul>
    );
  }
});

module.exports = SearchResults;
