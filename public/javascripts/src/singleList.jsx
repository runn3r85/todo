var React = require('react');
var TodoItem = require('./todoItem.jsx');
var ItemForm = require('./itemForm.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: {items: []}};
  },
  handleItemSubmit: function(item) {
    var list = this.props.data._id;
    // var items = this.state.data.items;
    // var newItems = items.concat([item]);
    // this.setState({data: {items: [newItems]}});
    $.ajax({
      url: '/todo/' + list + '/items/new',
      dataType: 'json',
      type: 'POST',
      data: item,
      success: function(data) {
        this.setState({data: { items: [data]}});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var itemNodes = this.props.data.items.map(function (item) {
      return (
        <TodoItem content={item.content}/>
      );
    });
    return (
      <div>
        <h1 className="text-center">{this.props.data.title}</h1>
        <p>{this.props.data.description}</p>
        <ItemForm onItemSubmit={this.handleItemSubmit}/>
        <ul className="list-group">
          {itemNodes}
        </ul>
      </div>
    );
  }
});