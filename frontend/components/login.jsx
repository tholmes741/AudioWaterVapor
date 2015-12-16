var React = require('react');
var ApiUtils = require('../utils/api_utils.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Login = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },

  handleSubmit: function(e){
    e.preventDefault();
    var credentials = {
      username: this.state.username,
      password: this.state.password
    };

    ApiUtils.createSession(credentials);
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type='text' valueLink={this.linkState('username')}/>
          <label>Password</label>
          <input type='password' valueLink={this.linkState('password')}/>

          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
});

module.exports = Login;
