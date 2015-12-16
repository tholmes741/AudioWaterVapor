var React = require('react');
var SessionStore = require('../stores/session.js');
var History = require('react-router').History;
var ApiUtils = require('../utils/api_utils.js');

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

  logout: function(){
    ApiUtils.destroySession();
  },

  render: function() {
    var userButtons;
    if (this.props.currentUser){
      userButtons = (
        <div>
          <div onClick={this.logout}>Logout</div>
          <div>User DropDown</div>
        </div>
      );
    } else {
      userButtons = (
        <div>
          <div onClick={this.signUp}>Sign Up</div>
          <div onClick={this.login}>Login</div>
        </div>
      );
    }
    return (
      <div>
        navbar
        {userButtons}
      </div>
    );
  }

});

module.exports = Navbar;
