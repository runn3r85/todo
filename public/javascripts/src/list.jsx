var React = require('react');

var Router = require('react-router');

var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <Link to="new" className="list-group-item">
        <h4 className="list-group-item-heading listing-company">{ this.props.title }</h4>
        <p className="list-group-item-text">{ this.props.description }</p>
      </Link>
    )
  }
});