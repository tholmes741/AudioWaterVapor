/*global url*/
var React = require('react');
var UserStore = require('../stores/user.js');
var History = require('react-router').History;

var Following = React.createClass({
  mixins: [History],

  componentWillReceiveProps: function(newProps){

  },

  users: function(){
    var ids = [];
    this.props.follows.forEach(function(follow){
      ids.push(follow.followee);
    });
    var users = [];
    ids.forEach(function(id){
      users.push(UserStore.find(id));
    });
    return users;
  },

  clicked: function(e){
    this.history.pushState(null, '/users/' + e.currentTarget.id);
  },

  following: function(){
    var users = this.users();
    var items = [];
    if (users.length === 0) {
      items.push(
        <li key={1}>
          You are not following anybody. When you do, they will show up here
        </li>
      );
    } else {
      var avatar;
      users.forEach(function(user){
        avatar = url + 'w_40,h_40/' + user.avatar;
        items.push(
          <li key={user.id} onClick={this.clicked} id={user.id} className='following'>
            <img src={avatar}></img>
            {user.username}
          </li>
        );
      }.bind(this));
    }

    return items;
  },

  render: function(){

    return (
      <ul className='following-container'>
        {this.following()}
      </ul>
    );
  }
});


module.exports = Following;
