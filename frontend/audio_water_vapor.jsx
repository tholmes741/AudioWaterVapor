var React = require('react');
var ReactDOM = require('react-dom');

// var test = React.creatClass({
//   render: function() {
//     return (
//       <div>react stuff</div>
//     );
//   }
// });

document.addEventListener('DOMContentLoaded', function(){
  var content = document.getElementById('content');
  ReactDOM.render(<div>hi</div>, content);
});
