var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    var description = React.findDOMNode(this.refs.description).value.trim();
    if (!title || !description) {
      return;
    }
    this.props.onListSubmit({title: title, description: description});
    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.description).value = '';
    return;
  },
  render: function() {
    return (
      <form className="listForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" ref="title" />
        <input type="text" placeholder="Description..." ref="description" />
        <input type="submit" value="Save" className="btn btn-success" />
      </form>
    );
  }
});