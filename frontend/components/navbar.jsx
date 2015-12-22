/* global cloudinary CLOUDINARY_OPTIONS */
var React = require('react');
var UserStore = require('../stores/user.js');
var History = require('react-router').History;
var ApiUtils = require('../utils/api_utils.js');
var SearchBar = require('./search_bar.jsx');

var Navbar = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return {username: null};
  },

  componentDidMount: function(){
    this.listener = UserStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  onChange: function(){
    var user = UserStore.find(this.props.currentUser);
    if (user){
      this.setState({username: user.username});
    }
  },

  profile: function(){
    this.history.pushState(null, 'users/' + this.props.currentUser);
  },

  signUp: function(){
    this.history.pushState(null, 'signup');
  },

  login: function(){
    this.history.pushState(null, 'login');
  },

  upload: function(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        console.log(results);
      }
    }.bind(this));
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
            <a className='dropdown-toggle'
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              id='nav-btn'>{this.state.username}
              <span className="caret"></span></a>
            <ul className='dropdown-menu'>
              <li onClick={this.profile}><a
                className='nav-button' id='nav-dd'>Profile</a></li>
              <li onClick={this.upload}><a
                className='nav-button' id='nav-dd'>Upload</a></li>
              <li><a href='#' id='nav-dd'>Edit Profile</a></li>
              <li className="divider"></li>
              <li onClick={this.logout}><a
                id='nav-dd'
                className='nav-button'>Logout</a></li>
            </ul>
          </li>
        </ul>
      );
    } else {
      userButtons = (
        <ul className="nav navbar-nav pull-right">
          <li
            onClick={this.signUp}>
            <a className='nav-button' id='nav-btn'>Sign Up</a></li>
          <li
            onClick={this.login}>
            <a className='nav-button' id='nav-btn'>Log In</a></li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="Brand" className='logo_color' src="assets/logo_color.png"></img>
              <img alt="Brand" className='logo_white' src="assets/logo_white.png"></img>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className='nav navbar-nav'>
              <li ><a
                className='nav-button'
                onClick={this.tracks}
                id='nav-btn'>Track</a></li>
            </ul>
            <SearchBar />
            {userButtons}
          </div>
        </div>
      </nav>

    );
  }

});

module.exports = Navbar;
