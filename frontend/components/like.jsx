var React = require('react');
var ApiUtils = require('../utils/api_utils.js');
var SessionStore = require('../stores/session.js');

var Like = React.createClass({
  getInitialState: function(){
    return {currentUser: SessionStore.currentUser()};
  },

  componentDidMount: function(){
    this.listener = SessionStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  onChange: function(){
    this.setState({currentUser: SessionStore.currentUser()});
  },

  like: function(){
    var like = {
      user_id: SessionStore.currentUser(),
      track_id: this.props.track.id
    };

    ApiUtils.createLike(like);
  },

  unlike: function(){
    var id;
    var that = this;
    this.props.track.likes.forEach(function(like){
      if (like.trackId === that.props.track.id && like.userId === SessionStore.currentUser()){
        id = like.id;
      }
    });

    ApiUtils.destroyLike(id, this.props.track.id);
  },

  button: function(){
    var button;
    if (this.state.currentUser === null){
      button = <div>Likes</div>;
    } else if (this.props.track.liked) {
      button = <div onClick={this.unlike}>Unlike</div>;
    } else {
      button = <div onClick={this.like}>Like</div>;
    }
    return button;
  },

  render: function(){
    return(
      <div>
        {this.button()}
        {this.props.track.likeCount}
      </div>
    );
  }
});

module.exports = Like;
