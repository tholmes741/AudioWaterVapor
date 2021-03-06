var React = require('react');
var ApiUtils = require('../utils/api_utils.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session.js');

var SignUp = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      username: '',
      email: '',
      password: '',
      errors: '',
    };
  },

  componentDidMount: function(){
    this.listener = SessionStore.addListener(this.onChange);
  },

  componentWillMount: function(){
    if(SessionStore.currentUser()) {
      this.props.history.goBack();
    }
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  onChange: function(){
    if (SessionStore.errors().length > 0){
      this.setState({errors: SessionStore.errors().join('. ')});
    } else {
      this.props.history.goBack();
    }
  },

  signIn: function(user){

    var credentials = {
      username: this.state.username,
      password: this.state.password
    };

    ApiUtils.createSession(credentials);
  },

  demoUser: function(e){
    e.preventDefault();
    var credentials = {
      username: 'Demo User',
      password: 'password'
    };
    ApiUtils.createSession(credentials);
  },

  handleSubmit: function(e){
    e.preventDefault();
    var user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    ApiUtils.createUser(user, this.signIn);
  },

  render: function() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <div>{this.state.errors}</div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <br></br>
            <input
              id="username"
              className="form-control"
              type='text'
              valueLink={this.linkState('username')}
              placeholder="Username"/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <br></br>
            <input
              className="form-control"
              in="email"
              type='text'
              valueLink={this.linkState('email')}
              placeholder="Email"/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <br></br>
            <input
              id="password"
              className="form-control"
              type='password'
              valueLink={this.linkState('password')}
              placeholder="Password"/>
          </div>

          <input
            type="submit"
            value="Create Account"
            className="btn btn-default sign-up-btn"/>
          <div className='demo-text'>
            Don't want to make an account? Login as a demo user.</div>
          <button
            className='btn btn-defualt demo-btn'
            onClick={this.demoUser}>Sign in as Demo User</button>
        </form>
      </div>
    );
  }
});

module.exports = SignUp;
