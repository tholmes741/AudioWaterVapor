var React = require('react');
var ApiUtils = require('../utils/api_utils.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('../stores/session.js');


var Login = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      username: '',
      password: '',
      errors: []
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

  render: function() {
    return (
      <div className="form">
        <h1>Log In</h1>
        <div>{this.state.errors}</div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type='text'
              placeholder="Username"
              valueLink={this.linkState('username')}/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              placeholder="Password"
              type='password'
              valueLink={this.linkState('password')}/>
          </div>
          <div className='demo-text'>
            Don't have an account? Login as a demo user.</div>
          <button
            className='btn btn-defualt demo-btn'
            onClick={this.demoUser}>Sign in as Demo User</button>
          <br></br>
          <input
            className="btn btn-default login-btn"
            type="submit"
            value="Log In"/>
        </form>
      </div>
    );
  }
});

module.exports = Login;
