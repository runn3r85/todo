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
        <div className="form-group">
          <label className="sr-only" for="addItem">Add Item</label>
          <input type="text" placeholder="Add Item..." ref="content" className="form-control" id="addItem" />
        </div>
        <input type="submit" value="Add" className="btn btn-success" />
      </form>
    );
  }
});