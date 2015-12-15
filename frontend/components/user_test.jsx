var React = require('react');
var UserStore = require('../stores/user.js');
var ApiUtil = require('../utils/api_utils.js');

var Test = React.createClass({
  getInitialState: function() {
    return { users: []};
  },

  componentDidMount: function() {
    UserStore.addListener(this.usersChange);
    ApiUtil.fetchAllUsers();
  },

  usersChange: function(){
    this.setState({users: UserStore.all()});
  },

  render: function(){

    var users = this.state.users.map(function(user, idx){
      return(<div key={idx}>{user.username}</div>);
    });

    return(
      <div>
        <audio src="assets/Fix_You-Yara.m4a" controls>
          <p>you browser</p>
        </audio>
        {users}
      </div>
    );
  }
});

module.exports = Test;
