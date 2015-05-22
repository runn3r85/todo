var React = require('react');

var Router = require('react-router');

var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <Link to="list" params={{listId: this.props.listId}} className="list-group-item" key={this.props.listId} >
        <h4 className="list-group-item-heading listing-company">{ this.props.title }</h4>
        <p className="list-group-item-text">{ this.props.description }</p>
      </Link>
    )
  }
});