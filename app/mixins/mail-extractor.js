import Ember from 'ember';

export default Ember.Mixin.create({
	getMailsFromMailThreadByThreadId: function getMailsFromMailThreadByThreadId(mailThreadId) {
		return this.store.find('mail-thread').then(function(mailThreads) {
			return mailThreads.filterBy('id', mailThreadId)[0];
		}).then(function(mailThread) {
			return mailThread.get('mails');
		});
	}
});