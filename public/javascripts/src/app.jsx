var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

var React = require('react');
var Router = require('react-router');

var Lists = require('./lists.jsx');
var Header = require('./header.jsx');
var NavBar = require('./layout.jsx');
var NewListForm = require('./listForm.jsx');
var SingleList = require('./singleList.jsx');

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
  mixins: [Router.Navigation],
  handleListSubmit: function(list) {
    $.ajax({
      url: '/api/lists',
      dataType: 'json',
      type: 'POST',
      data: list,
      success: function(data) {
        this.setState({data: data});
        //redirect
        Router.transition.redirect('notfound')
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        //add error message to new page
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
  getInitialState: function() {
    return {data: {items: []}};
  },
  handleItemSubmit: function(item) {
    // var items = this.state.data.items;
    // var newItems = items.concat([item]);
    // this.setState({data: {items: newItems}});
    var list = this.props.params.listId;
    $.ajax({
      url: '/api/lists/' + list + '/items/new',
      dataType: 'json',
      type: 'POST',
      data: item,
      success: function(data) {
        this.setState({data: {items: data.items}});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  loadListFromServer: function() {
    $.ajax({
      url: '/api/lists/' + this.props.params.listId,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadListFromServer();
  },
  render: function () {
    return (
      <div>
        <SingleList data={this.state.data} moreItemSubmit={this.handleItemSubmit}/>
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