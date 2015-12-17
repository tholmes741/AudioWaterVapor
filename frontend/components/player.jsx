var React = require('react');

var Player = React.createClass({
  componentWillReceiveProps: function(){

  },

  componentDidMount: function(){
    this.refs.audio.load();
    this.refs.audio.play();
  },

  componentWillUpdate: function(){
    this.refs.audio.load();
    this.refs.audio.play();
  },

  render: function(){
    return(
      <div className="player">
        {this.props.track.title}
        <audio ref="audio" src={this.props.track.trackUrl} ></audio>

      </div>
    );
  }
});

module.exports = Player;
