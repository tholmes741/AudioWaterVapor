/*global url*/
var React = require('react');
var SearchStore = require('../stores/search.js');
var ApiUtils = require('../utils/api_utils.js');
var History = require('react-router').History;

var SearchResults = React.createClass({
  mixins: [History],

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

  clicked: function(e) {
    var userId = e.currentTarget.id;
    this.history.pushState(null, '/users/' + userId);
  },

  matches: function() {
    var results = [];
    var counter = 1;
    var avatar;
    this.state.users.forEach(function(user){
      avatar = url + 'w_40,h_40/' + user.avatar;
      results.push(
        <li className='result user-result' id={user.id} key={counter} onClick={this.clicked}>
          <img src={avatar}></img>
          {user.username}</li>
      );
      counter +=1;
    }.bind(this));

    var image;
    this.state.tracks.forEach(function(track){
      image = url + 'w_40,h_40/' + track.image;
      results.push(
        <li className='result track-result' id={track.userId} key={counter} onClick={this.clicked}>
          <img src={image}></img>
          {track.title}</li>
      );
      counter += 1;
    }.bind(this));
    return results;
  },

  render: function(){
    return (
      <ul className='search-result-container'>
        {this.matches()}
      </ul>
    );
  }
});

module.exports = SearchResults;
