var React = require('react');
var PlayActions = require('../actions/play_actions');

var Player = React.createClass({

  componentDidMount: function(){
    this.refs.audio.addEventListener("ended", this.ended);
   },

   componentWillUnmount: function (){
     this.refs.audio.removeEventListener("ended", this.ended);
   },

  componentWillReceiveProps: function(){
  },

  togglePlay: function(){
    if (this.refs.audio.paused) {
      this.refs.audio.play();
    } else {
      this.refs.audio.pause();
    }
  },

  ended: function(){
    PlayActions.nextTrack();
  },

  render: function(){

    return(
      <div className="player">
        {this.props.track.title}
        <audio
          ref="audio"
          src={this.props.track.trackUrl}
          autoPlay controls></audio>
      </div>
    );
  }
});

module.exports = Player;
