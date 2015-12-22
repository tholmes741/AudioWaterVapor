/* global url cloudinary CLOUDINARY_OPTIONS*/
var React = require('react');
var ApiUtils = require('../utils/api_utils.js');
var UserStore = require('../stores/user.js');
var SessionStore = require('../stores/session.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var Edit = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    var user = UserStore.find(SessionStore.currentUser()) || {
      username: '',
      email: '',
      bio: '',
      cover: 'abstract00_v49gg5.jpg',
      avatar: 'avatar_blank_c7korl.png'
    };
    return user;
  },

  componentDidMount: function(){
    if(!SessionStore.currentUser()) {
      this.props.history.goBack();
    }
    var user = UserStore.find(SessionStore.currentUser());
    if (!user) {
      ApiUtils.fetchAllUsers();
    }
    this.listener = SessionStore.addListener(this.onChange);
    this.users = UserStore.addListener(this.onChange);
  },

  onChange: function() {
    var user = UserStore.find(SessionStore.currentUser()) || {
      username: '',
      email: '',
      bio: '',
      cover: 'abstract00_v49gg5.jpg',
      avatar: 'avatar_blank_c7korl.png'
    };

    this.setState(user);
  },

  componentWillUnmount: function(){
    this.listener.remove();
    this.users.remove();
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.preventBlanks()) {
      ApiUtils.updateUser(this.state, SessionStore.currentUser(), function(){
        this.props.history.pushState(null, "/");
      }.bind(this));
    }
  },

  preventBlanks: function(){
    var blankField = true;
    var that = this;
    Object.keys(this.state).forEach(function(key) {
      if (that.state[key] === '') {
        blankField = false;
      }
    });
    return blankField;
  },

  avatar: function() {
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        results = results[0].url.split('/');
        this.setState({avatar: results[results.length - 1]});
      }
    }.bind(this));
  },

  cover: function(){
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        results = results[0].url.split('/');
        this.setState({cover: results[results.length - 1]});
      }
    }.bind(this));
  },


  render: function(){
    var cover = url + 'w_200,h_80/' + this.state.cover;
    var avatar = url + 'w_180,h_200/' + this.state.avatar;
    return (
      <div className='edit'>
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <lable>Username</lable>
            <br></br>
            <input
              id='username'
              className='form-control'
              type='text'
              valueLink={this.linkState('username')}/>
          </div>
          <div className='form-group'>
            <lable>Email</lable>
            <br></br>
            <input
              id='email'
              className='form-control'
              type='text'
              valueLink={this.linkState('email')}/>
          </div>
          <div className='form-group'>
            <lable>Bio</lable>
            <br></br>
            <input
              id='bio'
              className='form-control'
              type='textarea'
              valueLink={this.linkState('bio')}/>
          </div>
          <div className='form-group'>
            <lable>Avatar</lable>
            <br></br>
            <img onClick={this.avatar} src={avatar}></img>
          </div>
          <div className='form-group'>
            <lable>Cover</lable>
            <br></br>
            <img onClick={this.cover} src={cover}></img>
          </div>
          <input
            type='submit'
            className='btn btn-default'
            value='Update Info'/>
        </form>
      </div>
    );
  }
});

module.exports = Edit;
