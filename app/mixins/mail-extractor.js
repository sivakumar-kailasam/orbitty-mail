import Ember from 'ember';

export default Ember.Mixin.create({
	getMailsFromMailThreadByThreadId: function getMailsFromMailThreadByThreadId(mailThreadId) {
		return this.store.find('mail-thread').then(function(mailThreads) {
			return mailThreads.filterBy('id', mailThreadId)[0];
		}).then(function(mailThread) {
			return mailThread.get('mails');
		});
	},
	getMailByIdFromMailThreads: function getMailByIdFromMailThreads(mailId){
		return this.store.find('mail-thread').then(function(mailThreads){
			var filteredMailToReturn;
			 mailThreads.forEach(function(mailThread){
				var filteredMail = mailThread.get('mails').filterBy('id', +mailId)[0];
				if( filteredMail ) {
					filteredMailToReturn = filteredMail;
				}
			});
			 return filteredMailToReturn;
		});
	}
});