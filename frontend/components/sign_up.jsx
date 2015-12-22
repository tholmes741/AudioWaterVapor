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

  handleSubmit: function(e){
    e.preventDefault();
    var user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    ApiUtils.createUser(user);
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
        </form>
      </div>
    );
  }
});

module.exports = SignUp;
