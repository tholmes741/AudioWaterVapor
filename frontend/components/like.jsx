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
    var url = 'http://res.cloudinary.com/tholmes741/image/upload/w_30,h_30/Heart-Small-Button-_0008_igyflu.png';
    var button;
    if (this.state.currentUser === null || this.state.currentUser === this.props.track.user.id){
      button = <span><img src={url} className='liked'></img></span>;
    } else if (this.props.track.liked) {
      button = (
        <span
          onClick={this.unlike}>
          <img className='liked' src={url}></img>
        </span>
      );
    } else {
      button = (
        <span
          onClick={this.like}>
          <img className='not-liked'src={url}></img>
        </span>
      );
    }
    return button;
  },

  render: function(){
    return(
      <span className='like'>
        {this.button()}
        {this.props.track.likeCount}
      </span>
    );
  }
});

module.exports = Like;
