var React = require('react');
var TodoItem = require('./todoItem.jsx');

module.exports = React.createClass({
  render: function() {
    console.log(this.props.data.items);
    var itemNodes = this.props.data.items.map(function (item) {
      return (
        <TodoItem content={item.content}/>
      );
    });
    return (
      <div>
        <h1 className="text-center">{this.props.data.title}</h1>
        <p>{this.props.data.description}</p>
        <ul className="list-group">
          {itemNodes}
        </ul>
      </div>
    );
  }
});