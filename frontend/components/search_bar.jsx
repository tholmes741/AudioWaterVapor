var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtils = require('../utils/api_utils.js');
var SearchActions = require('../actions/search_actions.js');


var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {search: ''};
  },

  componentDidMount: function() {

    $(".search-bar").blur(function(){
      setTimeout(SearchActions.empty, 200);
    });
  },

  handleSubmit: function(e){
    e.preventDefault();
  },

  onChange: function(e){
    this.setState({search: e.currentTarget.value}, this.submitChange);
  },

  submitChange: function(){
    if (this.state.search === '') {
      SearchActions.empty();
    } else {
      ApiUtils.search(this.state.search);
    }
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
              value={this.state.search}></input>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = SearchBar;
