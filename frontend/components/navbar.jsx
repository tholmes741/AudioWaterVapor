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
        <div className="pull-right ">
          <li onClick={this.logout}>Logout</li>
          <li>{this.props.currentUser} DropDown</li>
        </div>
      );
    } else {
      userButtons = (
        <div className="pull-right">
          <button className="btn btn-defualt" onClick={this.signUp}>Sign Up</button>
          <button className="btn btn-defualt" onClick={this.login}>Login</button>
        </div>
      );
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className='nav navbar-nav'>
            <li ><a href='#' onClick={this.tracks}>Track</a></li>
            <li ><a href="#">Example</a></li>
          </ul>
          <button className='btn btn-defualt'>Yay</button>
          {userButtons}
        </div>
      </nav>

    );
  }

});

module.exports = Navbar;
