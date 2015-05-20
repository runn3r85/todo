var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

var React = require('react');
var Router = require('react-router');

var Lists = require('./lists.jsx');
var Header = require('./header.jsx');
var NavBar = require('./layout.jsx');
var NewListForm = require('./listForm.jsx');

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
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

var NewListPage = React.createClass({
  handleListSubmit: function(list) {
    $.ajax({
      url: '/api/lists',
      dataType: 'json',
      type: 'POST',
      data: list,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function(){
    return (
      <div>
        <Header text="New Todo Lists"/>
        <NewListForm onListSubmit={this.handleListSubmit}/>
      </div>
    );
  }
});

var HomePage = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadListsFromServer: function() {
    $.ajax({
      url: '/api/lists',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("SUCCESS");
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadListsFromServer();
  },
  render: function(){
    return (
      <div>
        <Header text="All Todo Lists"/>
        <Lists data={this.state.data}/>
      </div>
    );
  }
});

var ListPage = React.createClass({
  render: function () {
    return (
      <div>
        <Header text="List"/>
      </div>
    );
  }
});


var routes = (
  <Route handler={App}>
    <Route name="home" path="/" handler={HomePage}/>
    <Route name="new" path="/lists/new" handler={NewListPage}/>
    <Route name="list" path="/lists/:listId" handler={ListPage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});


// React.render(
//   <HomePage />,
//   document.getElementById('example')
// );