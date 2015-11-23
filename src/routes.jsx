var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory'); //cache memory
var Router = ReactRouter.Router; //decide content to show on page
var Route = ReactRouter.Route; //configure the router
var Main = require('./components/main');

module.exports = (
  <Router history = {new HashHistory}>
    <Route path = "/" component = {Main}>
    </Route>
  </Router>
)
