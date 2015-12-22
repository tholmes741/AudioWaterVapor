var React = require('react');

var Splash = React.createClass({
  clicked: function(){
    this.props.history.pushState(null, '/tracks');
  },

  render: function(){
    return (
      <div className='splash'>
        <img
          onClick={this.clicked}
          src='assets/logo.png'
          className='splash-logo'></img>

      </div>
    );
  }
});

module.exports = Splash;
