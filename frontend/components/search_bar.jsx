var React = require('react');

var SearchBar = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
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
            placeholder="Search by artist or track"></input>
        </div>
      </form>
    );
  }
});

module.exports = SearchBar;
