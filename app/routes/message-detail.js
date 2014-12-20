import Ember from 'ember';
import mailExtractor from '../mixins/mail-extractor';

export default Ember.Route.extend(mailExtractor,{
	model: function (params) {

		return this.getMailsFromMailThreadByThreadId(+params.message_thread_id).then(function(mails){
			return {
				mails: mails.sortBy('date'),
				mailThreadId: +params.message_thread_id
			};
		});
	},
	actions: {
		markRead: function(mailId){
			var _this = this;
                        		_this.getMailByIdFromMailThreads(mailId).then(function(mail){
                        			mail.set('isMailRead', true);
                        		});
		}
	}
});
