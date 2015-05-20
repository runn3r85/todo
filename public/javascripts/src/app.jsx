var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

var React = require('react');
var Router = require('react-router');

var Lists = require('./lists.jsx');
var Header = require('./header.jsx');
var NavBar = require('./layout.jsx');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            {/* this is the important part */}
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

var HomePage = React.createClass({
  render: function(){
    return (
      <div>
        <Header text="All Todo Lists"/>
        <Lists />
      </div>
    );
  }
});

var ListPage = React.createClass({
  render: function () {
    return (
      <div>
        <Header text="List"/>
        <List />
      </div>
    );
  }
});


var routes = (
  <Route handler={App}>
    <Route name="home" path="/" handler={HomePage}/>
    <Route name="list" path="/lists/:listId" handler={ListPage}/>
    <Route name="new" path="/lists/new" handler={ListPage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});


// React.render(
//   <HomePage />,
//   document.getElementById('example')
// );