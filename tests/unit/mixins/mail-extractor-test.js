import Ember from 'ember';
import MailExtractorMixin from 'orbitty-mail/mixins/mail-extractor';

module('MailExtractorMixin');

// Replace this with your real tests.
test('it works', function() {
  var MailExtractorObject = Ember.Object.extend(MailExtractorMixin);
  var subject = MailExtractorObject.create();
  ok(subject);
});
