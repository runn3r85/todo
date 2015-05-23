var React = require('react');
var TodoItem = require('./todoItem.jsx');
var ItemForm = require('./itemForm.jsx');

module.exports = React.createClass({
  generateItem: function(item){
    // var items = this.state.data.items;
    // var newItems = items.concat([item]);
    // this.setState({data: {items: newItems}});
    this.props.moreItemSubmit(item);
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
        <ItemForm onItemSubmit={this.generateItem}/>
        <ul className="list-group">
          {itemNodes}
        </ul>
      </div>
    );
  }
});