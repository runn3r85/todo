var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <h1 className="title text-center">{this.props.text}</h1>
    );
  }
});