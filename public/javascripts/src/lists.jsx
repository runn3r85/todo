var React = require('react');
var List = require('./list.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="all-lists">
        <div className="list-group">
          {this.props.data.map(function(list){
              return (
                <List
                  listId={list._id}
                  title={list.title}
                  description={list.description}
                  items={list.items}
                />
              );
            })}
        </div>
      </div>
    )
  }
});