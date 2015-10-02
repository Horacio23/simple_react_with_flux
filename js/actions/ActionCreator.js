var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
	createMessage: function (text) {
		AppDispatcher.dispatch({
			type: ActionTypes.MESSAGE_CREATE,
			text: text
		});
	},
	removeEntry: function(messageID){
		AppDispatcher.dispatch({
			type: ActionTypes.MESSAGE_DELETE,
			messageID: messageID
		});
	}
};