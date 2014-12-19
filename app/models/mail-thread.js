import EO from 'ember-orbit';

var attr = EO.attr;

export default EO.Model.extend({
  	
  	/**
  	 * Grouping usually happens on the subject
  	 * @type {String}
  	 */
  	subject: attr('string'),

  	/**
  	 * The mails in a thread
  	 * @type {String}
  	 */
  	mails: EO.hasMany('mail'),

  	/**
  	 * Are there unread mails in this thread
  	 * @type {Boolean}
  	 */
  	hasUnreadMails: attr('boolean')

});
