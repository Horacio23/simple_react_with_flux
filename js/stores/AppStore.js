var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');
var AppConstants = require('../constants/AppConstants');


var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _messages= {};

var AppStore = _.extend({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    console.log('Change listener added');
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    console.log('Change listener removed');
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getMessages:function(){
  	return _messages;
  }
});

AppDispatcher.register(function(action){
  switch(action.type){
  	case ActionTypes.MESSAGE_CREATE:
  		var message = {
  			id:Date.now(),
  			text: action.text
  		}
  		_messages[message.id] = message;
  		
  		break;
  	case ActionTypes.MESSAGE_DELETE:
  		delete _messages[action.messageID];
  		break;
  	default:
  		//do nothing
      return true;
  }

  AppStore.emitChange();
 
  return true;
});

module.exports = AppStore;