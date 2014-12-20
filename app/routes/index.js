import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('mail-thread');
	},
	_updateMailReadStatus: function(readStatus) {
		this.currentModel.forEach(function(mailThread){
				mailThread.get('mails').forEach(function(mail){
					mail.set('isMailRead', readStatus);
				})
			});
	},
	actions: {
		markAllRead: function(){
			this._updateMailReadStatus(true);
		},
		markAllUnread: function(){
			this._updateMailReadStatus(false);
		}
	}
});
