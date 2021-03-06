var React = require('react');
var ReactDOM = require('react-dom');
var TrackList = require('./components/track_list.jsx');
var App = require('./components/app.jsx');
var SignUp = require('./components/sign_up.jsx');
var Login = require('./components/login.jsx');
var UserPage = require('./components/user_page.jsx');
var Edit = require('./components/edit.jsx');
var Splash = require('./components/splash.jsx');
var Upload = require('./components/upload.jsx');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var route = (
  <Route path='/' component={App}>
    <IndexRoute component={Splash}/>
    <Route path='/tracks' component={TrackList}/>
    <Route path='/users/:userId' component={UserPage} />
    <Route path='/signup' component={SignUp} />
    <Route path='/login' component={Login} />
    <Route path='/edit' component={Edit} />
    <Route path='/upload' component={Upload} />
  </Route>
);



document.addEventListener('DOMContentLoaded', function(){
  var content = document.getElementById('content');
  ReactDOM.render(<Router>{route}</Router>, content);
});
