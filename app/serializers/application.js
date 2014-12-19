import JSONAPISerializer from 'orbit-common/jsonapi-serializer';

export default JSONAPISerializer.extend({
	deserialize: function(type, id, data){
		return this._super(type, id, data);
	}
});
