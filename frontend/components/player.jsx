var React = require('react');

var Player = React.createClass({
  componentWillReceiveProps: function(){

  },

  togglePlay: function(){
    console.log(this.refs.audio.paused);
    if (this.refs.audio.paused) {
      this.refs.audio.play();
    } else {
      this.refs.audio.pause();
    }
  },



  render: function(){
    return(
      <div className="player">
        {this.props.track.title}
        <audio ref="audio" src={this.props.track.trackUrl} autoPlay></audio>
        <div onClick={this.togglePlay}>Play/pause</div>
      </div>
    );
  }
});

module.exports = Player;
