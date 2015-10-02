var React = require('react');
var ActionCreator = require('../actions/ActionCreator');

var Message = React.createClass({
		// propTypes = {
		// 	id: React.PropTypes.number.isRequired,
		// 	text: React.PropTypes.string.isRequired
		// },

		render: function(){
			return(
				<li key={this.props.key} onClick={this.removeEntry}> The text is: {this.props.text}</li>
			);
		},
		removeEntry: function(){
			ActionCreator.removeEntry(this.props.id);
		}

});


module.exports = Message;