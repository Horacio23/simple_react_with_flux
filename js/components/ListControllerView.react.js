var React = require('react');
var AppStore = require('../stores/AppStore');
var Message = require('./Message.react.js');
var ActionCreator = require('../actions/ActionCreator');
var List = React.createClass({

	getInitialState: function(){
		return { 
			messages: AppStore.getMessages(),
			inputValue: ''
		 }
	},
	componentDidMount: function(){
		AppStore.addChangeListener( this._onChange);
		
	},
	componentWillUnmount: function(){
		AppStore.removeChangeListener( this._onChange);
	},
	
	render: function(){
		var messages = this.state.messages;
		var list = Object.keys(messages).map(function(messageKey){
			return (
				<Message 
					key = {messageKey}
					id = {messages[messageKey].id}
					text = {messages[messageKey].text}
				/>
			)
		});

		return (
			<div>
				<form onSubmit={this.createMessage}>
					<input type="text" placeholder="Create a Message" value={this.state.inputValue} onChange={this.handleInputChange} />
					<button type="submit">Click Me</button>
				</form>
				<ul>
					{list}
				</ul>
			</div>
		);
	},
	handleInputChange: function(event){		
		this.setState({ inputValue: event.target.value});
	},
	createMessage: function(event){
		//creates the action for a new message
		event.preventDefault();
		ActionCreator.createMessage(this.state.inputValue);
		this.setState({ inputValue: ''});
	},
	_onChange: function(){
		//when a change is detected, this will run
		this.setState({messages: AppStore.getMessages() });
	}
});

module.exports = List;