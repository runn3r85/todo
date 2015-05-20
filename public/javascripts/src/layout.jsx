var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

module.exports = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" type='button' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="home" className="navbar-brand">Todo</Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="home">Lists</Link></li>
              <li><Link to="new">New List</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});