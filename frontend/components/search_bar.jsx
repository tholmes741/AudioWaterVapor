var React = require('react');

var SearchBar = React.createClass({
  render: function(){
    return (
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"></input>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
});

module.exports = SearchBar;
