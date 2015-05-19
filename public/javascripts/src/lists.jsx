var React = require('react');
var List = require('./list.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    // This will be an API call eventually...
    return {
      data: [
        {
          title: 'Groceries',
          description: 'My grocery list for the weekend.',
          items: [
            { content: "Apples" },
            { content: "Eggs" },
            { content: "Bread" },
            { content: "Bananas" }
          ]
        },
        {
          title: 'Chores',
          description: 'My weekday chores list.',
          items: [
            { content: "Laundry" },
            { content: "Clean Bathroom" },
            { content: "Dishes" },
            { content: "Vacuum" }
          ]
        }
      ]
    };
  },
  render: function() {
    return (
      // <h1 class="text-center">Todo Lists</h1>
        <div class="list-group">
          {this.state.data.map(function(list){
              return (
                <List
                  title={list.title}
                  description={list.description}
                  items={list.items}
                />
              );
            })}
        </div>
    )
  }
});