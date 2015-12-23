var React = require('react');
var PlayActions = require('../actions/play_actions');
var ApiUtils = require('../utils/api_utils.js');

var Player = React.createClass({

  componentDidMount: function(){
    this.refs.audio.addEventListener("ended", this.ended);
    this.refs.audio.addEventListener("loadeddata", this.played);
   },

   componentWillUnmount: function (){
     this.refs.audio.removeEventListener("ended", this.ended);
     this.refs.audio.removeEventListener("loadeddata", this.played);
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

  played: function(){ 
    ApiUtils.updateTrackCounter(this.props.track.id);
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
