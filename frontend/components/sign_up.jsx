var React = require('react');
var ApiUtils = require('../utils/api_utils.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SignUp = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      username: '',
      email: '',
      password: ''
    };
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
