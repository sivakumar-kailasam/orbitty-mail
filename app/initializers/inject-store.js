import Ember from 'ember';
import Orbit from 'orbit';
import JSONAPISource from 'orbit-common/jsonapi-source';
import ApplicationSerializer from '../serializers/application';
import EO from 'ember-orbit';

var JsonApiStore = EO.Store.extend({
	orbitSourceClass: JSONAPISource,

	orbitSourceOptions: {
		namespace: 'api',
		usePatch: true,
		SerializerClass: ApplicationSerializer
	}
});

export function initialize(container, application) {
	Orbit.Promise = Ember.RSVP.Promise;
	Orbit.ajax  = Ember.$.ajax;
	
	application.register('schema:main', EO.Schema);
	application.register('store:main', JsonApiStore);

	application.inject('controller', 'store', 'store:main');
	application.inject('route', 'store', 'store:main');
}

export default {
	name: 'inject-store',
	initialize: initialize
};