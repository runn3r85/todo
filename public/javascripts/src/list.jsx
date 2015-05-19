var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <a href="#" className="list-group-item">
        <h4 className="list-group-item-heading listing-company">{ this.props.title }</h4>
        <p className="list-group-item-text">{ this.props.description }</p>
      </a>
    )
  }
});