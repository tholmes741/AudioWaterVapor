var React = require('react');
var Navbar = require('./navbar.jsx');
var SessionStore = require('../stores/session.js');

var App = React.createClass({
  getInitialState: function(){
    return {
      currentUser: null,
    };
  },

  componentDidMount: function(){
    this.listener = SessionStore.addListener(this.onChange);
  },

  onChange: function(){
    this.setState({currentUser: SessionStore.currentUser()});
  },

  render: function(){
    return (
      <div>
        <Navbar currentUser={this.state.currentUser} />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = App;
