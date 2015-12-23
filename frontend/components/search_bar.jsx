var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtils = require('../utils/api_utils.js');


var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {search: ''};
  },

  handleSubmit: function(e){
    e.preventDefault();
  },

  onChange: function(e){
    this.setState({search: e.currentTarget.value});
    ApiUtils.search(this.state.search);
  },

  render: function(){
    return (
      <div>
        <form
          className="navbar-form navbar-left"
          role="search"
          onSubmit={this.handleSubmit}>
          <div className="form-group search">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by artist or track"
              onChange={this.onChange}
              valeu={this.state.search}></input>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = SearchBar;
