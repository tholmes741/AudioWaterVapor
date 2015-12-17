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
          <div className="nav-button" onClick={this.logout}>Logout</div>
          <div>{this.props.currentUser} DropDown</div>
        </div>
      );
    } else {
      userButtons = (
        <div className="pull-right">
          <div className="nav-button" onClick={this.signUp}>Sign Up</div>
          <div className="nav-button" onClick={this.login}>Login</div>
        </div>
      );
    }
    return (
      <nav className="navbar navbar-default navbar-static-top">
        {this.props.currentUser}
        <div className="nav-button" onClick={this.tracks}>Tracks</div>
        {userButtons}
      </nav>
    );
  }

});

module.exports = Navbar;
