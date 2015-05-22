var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
        { this.props.content }
      </li>
    )
  }
});