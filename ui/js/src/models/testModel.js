define(['backbone'],
	function(Backbone) {
		var Model = Backbone.Model.extend({
			defaults: {
				test: 'TestVal'
			}
		});
		return Model;
	});