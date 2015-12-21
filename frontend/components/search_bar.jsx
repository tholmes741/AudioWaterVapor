var React = require('react');

var SearchBar = React.createClass({
  render: function(){
    return (
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group search">
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Search by artist or track"></input>
        </div>
      </form>
    );
  }
});

module.exports = SearchBar;
