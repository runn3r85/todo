var React = require('react');


module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var content = React.findDOMNode(this.refs.content).value.trim();
    if (!content) {
      return;
    }
    this.props.onItemSubmit({content: content});
    React.findDOMNode(this.refs.content).value = '';
    return;
  },
  render: function() {
    return (
      <form className="itemForm" onSubmit={this.handleSubmit}>
        <input type="text" ref="content" />
        <input type="submit" value="Add" className="btn btn-success" />
      </form>
    );
  }
});