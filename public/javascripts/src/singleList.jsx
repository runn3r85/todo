var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center">{this.props.data.title}</h1>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
});