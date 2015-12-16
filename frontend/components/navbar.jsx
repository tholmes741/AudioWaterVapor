var React = require('react');
var SessionStore = require('../stores/session.js');
var History = require('react-router').History;

var Navbar = React.createClass({
  mixins: [History],
  getInitialState: function(){
    return {loggedIn: false, currentUser: null};
  },

  componentDidMount: function() {
    SessionStore.addListener(this.sessionChange);

  },

  sessionChange: function(){
    this.setState({
      loggedIn: SessionStore.loggedIn(),
      currentUser: SessionStore.currentUser()
    });
  },

  signUp: function(){
    this.history.pushState(null, 'signup');
  },

  render: function() {
    return (
      <div>
        navbar
        <div onClick={this.signUp}>Sign Up</div>
      </div>
    );
  }

});

module.exports = Navbar;
