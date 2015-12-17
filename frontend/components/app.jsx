var React = require('react');
var Navbar = require('./navbar.jsx');
var SessionStore = require('../stores/session.js');

var App = React.createClass({
  getInitialState: function(){
    return {
      currentUser: SessionStore.currentUser(),
    };
  },

  componentDidMount: function(){
    this.listener = SessionStore.addListener(this.onChange);
  },

  onChange: function(){
    this.setState({currentUser: SessionStore.currentUser()});
  },

  render: function(){
    var user = this.state.currentUser ? <div>{this.state.currentUser}</div> : <div></div>;
    return (
      <div>
        <div className="nav">
          <Navbar currentUser={this.state.currentUser} />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = App;
