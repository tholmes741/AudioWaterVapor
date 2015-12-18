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
        <ul className="nav navbar-nav pull-right">
          <li className='dropdown'>
            <a className='dropdown-toggle' data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
            <ul className='dropdown-menu'>
              <li><a href='#'>{this.props.currentUser} DropDown</a></li>
              <li onClick={this.logout}><a>Logout</a></li>
            </ul>
          </li>
          <li onClick={this.logout}><a>Logout</a></li>
        </ul>
      );
    } else {
      userButtons = (
        <ul className="nav navbar-nav pull-right">
          <li onClick={this.signUp}><a className='nav-button'>Sign Up</a></li>
          <li onClick={this.login}><a className='nav-button'>Log In</a></li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className='nav navbar-nav'>
            <li ><a className='nav-button'onClick={this.tracks}>Track</a></li>
          </ul>
          {userButtons}
        </div>
      </nav>

    );
  }

});

module.exports = Navbar;
