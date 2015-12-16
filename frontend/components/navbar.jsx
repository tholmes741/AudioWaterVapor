var React = require('react');
var SessionStore = require('../stores/session.js');

var Navbar = React.createClass({
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

  render: function() {
    return (
      <div>navbar</div>
    );
  }

});

module.exports = Navbar;
