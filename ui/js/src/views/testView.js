define(['marionette', 'hbs!templates/testTemplate'],
	function(Marionette, testTpl) {
		var View = Marionette.ItemView.extend({
			template: testTpl
		});
		return View;
	});