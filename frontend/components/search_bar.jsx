var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {search: ''};
  },

  handleSubmit: function(e){
    e.preventDefault();
  },

  matches: function (){
    var matches = [];
    if (this.state.search === '') {
      return;
    }
  },



  render: function(){
    return (
      <form
        className="navbar-form navbar-left"
        role="search"
        onSubmit={this.handleSubmit}>
        <div className="form-group search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by artist or track"
            valueLink={this.linkState('search')}></input>
        </div>
        {this.matches()}
      </form>
    );
  }
});

module.exports = SearchBar;
