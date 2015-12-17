var React = require('react');
var SessionStore = require('../stores/session.js');
var History = require('react-router').History;
var ApiUtils = require('../utils/api_utils.js');

var Navbar = React.createClass({
  mixins: [History],
  // getInitialState: function(){
  //   return {currentUser: null};
  // },
  //
  // componentDidMount: function() {
  //   SessionStore.addListener(this.sessionChange);
  //
  // },
  //
  // sessionChange: function(){
  //   this.setState({
  //     currentUser: SessionStore.currentUser()
  //   });
  // },


  signUp: function(){
    this.history.pushState(null, 'signup');
  },

  login: function(){
    this.history.pushState(null, 'login');
  },

  logout: function(){
    ApiUtils.destroySession();
  },

  tracks: function(){
    this.history.pushState(null, '/');
  },

  render: function() {
    var userButtons;
    if (this.props.currentUser){
      userButtons = (
        <div className="pull-right">
          <li className="nav-button" onClick={this.logout}>Logout</li>
          <li>{this.props.currentUser} DropDown</li>
        </div>
      );
    } else {
      userButtons = (
        <div className="pull-right">
          <li className="nav-button" onClick={this.signUp}>Sign Up</li>
          <li className="nav-button" onClick={this.login}>Login</li>
        </div>
      );
    }
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li
              className="nav-button pull-left"
              onClick={this.tracks}>Tracks
            </li>
            {userButtons}
          </ul>
        </div>
      </nav>
    );
  }

});

module.exports = Navbar;
