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
              aria-expanded="false">{this.state.username}
              <span className="caret"></span></a>
            <ul className='dropdown-menu'>
              <li onClick={this.profile}><a
                className='nav-button'>Profile</a></li>
              <li onClick={this.upload}><a
                className='nav-button'>Upload</a></li>
              <li><a href='#'>Edit Profile</a></li>
              <li className="divider"></li>
              <li onClick={this.logout}><a
                className='nav-button'>Logout</a></li>
            </ul>
          </li>
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
          <SearchBar />
          {userButtons}
        </div>
      </nav>

    );
  }

});

module.exports = Navbar;
