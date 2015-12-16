var React = require('react');
var SessionStore = require('../stores/session.js');
var History = require('react-router').History;

var Navbar = React.createClass({
  mixins: [History],
  getInitialState: function(){
    return {currentUser: null};
  },

  componentDidMount: function() {
    SessionStore.addListener(this.sessionChange);

  },

  sessionChange: function(){
    this.setState({
      currentUser: SessionStore.currentUser()
    });
  },

  signUp: function(){
    this.history.pushState(null, 'signup');
  },

  login: function(){
    this.history.pushState(null, 'login');
  },

  render: function() {
    var user = this.props.currentUser ? <div>{this.props.currentUser}</div> : <div></div>;
    return (
      <div>
        {user}
        navbar
        <div onClick={this.signUp}>Sign Up</div>
        <div onClick={this.login}>Login</div>
      </div>
    );
  }

});

module.exports = Navbar;
