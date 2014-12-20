import Ember from 'ember';
import mailExtractor from '../mixins/mail-extractor';

export default Ember.Route.extend(mailExtractor,{
	model: function (params) {
		return this.getMailsFromMailThreadByThreadId(+params.message_thread_id).then(function(mails){
			return mails.sortBy('date');
		});
	},
	actions: {
		markRead: function(mailId){
                        		this.getMailByIdFromMailThreads(mailId).then(function(mail){
                        			console.info(mail);
                        		});
		}
	}
});
