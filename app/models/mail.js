import EO from 'ember-orbit';

var attr = EO.attr;

export default EO.Model.extend({

  /**
   * You know, to know who sent this mail
   * @type {String}
   */
  sender: attr('string'),

  /**
   * Pic of the guy/girl/bot who sent the email
   * @type {String}
   */
  senderPic: attr('string'),

  /**
   * The lucky guy/gal who gets the mail
   * @type {String}
   */
  receiver: attr('string'),

  /**
   * Pic of the guy/gal who gets the email
   * @type {String}
   */
  receiverPic: attr('string'),

  /**
   * one liner of what they're talking about
   * @type {String}
   */
  subject: attr('string'),

  /**
   * The gory details of they're talking about
   * @type {String}
   */
  message: attr('string'),

  /**
   * When they sent the mail
   * @type {Date}
   */
  date: attr('date'),

  /**
   * Gmail style organization by label
   * @type {String[]}
   */
  // labels: attr(),

  /**
   * So that we can look at the app and know what's not read yet
   * @type {Boolean}
   */
  isMailRead: attr('boolean'),

  mailThread: EO.hasOne('mail-thread')

});