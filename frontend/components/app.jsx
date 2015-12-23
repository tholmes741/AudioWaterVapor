var React = require('react');
var Navbar = require('./navbar.jsx');
var SessionStore = require('../stores/session.js');
var PlayStore = require('../stores/play.js');
var Player = require('./player.jsx');
var ApiUtils = require('../utils/api_utils.js');
var SearchResults = require('./search_results.jsx');

var App = React.createClass({
  getInitialState: function(){
    return {
      currentUser: SessionStore.currentUser(),
      track: null
    };
  },

  componentDidMount: function(){
    this.listener = SessionStore.addListener(this.onChange);
    this.play = PlayStore.addListener(this.onChange);
    ApiUtils.fetchAllUsers();
  },

  playTrack: function(){
    if (this.state.track) {
      return <Player track={this.state.track}/>;
    }
  },

  onChange: function(){
    this.setState({
      currentUser: SessionStore.currentUser(),
      track: PlayStore.track()
    });
  },

  render: function(){
    return (
      <div className="app">
        <div className="nav">
          <Navbar currentUser={this.state.currentUser} />
        </div>
        <SearchResults />
        <div>
          {this.props.children}
        </div>
        {this.playTrack()}
      </div>
    );
  }

});

module.exports = App;
