var React = require('react');
var ApiUtils = require('../utils/api_utils.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session.js');
var History = require('react-router').History;

var SignUp = React.createClass({
  mixins: [History, LinkedStateMixin],

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

  componentWillUnmount: function(){
    this.listener.remove();
  },

  onChange: function(){
    console.log(SessionStore.errors().length);
    if (SessionStore.errors().length > 0){
      this.setState({errors: SessionStore.errors().join('. ')});
    } else {
      this.history.pushState(null, '/');
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
      <div>
        <div>{this.state.errors}</div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type='text' valueLink={this.linkState('username')}/>
          <label>Email</label>
          <input type='text' valueLink={this.linkState('email')}/>
          <label>Password</label>
          <input type='password' valueLink={this.linkState('password')}/>

          <input type="submit" value="Create Account"/>
        </form>
      </div>
    );
  }
});

module.exports = SignUp;
