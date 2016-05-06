requirejs.config({
	baseUrl: 'js/src',
	paths: {
		libs: '../libs',
		jquery: '../libs/jquery/jquery',
		underscore: '../libs/underscore',
		backbone: '../libs/backbone',
		marionette: '../libs/backbone.marionette',
		bootstrap: '../libs/bootstrap/bootstrap',

		router: 'router/appRouter',
		application: '../application'

	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			depends: ['underscore'],
			exports: 'Backbone'
		},
		'marionette': {
			deps: ['underscore', 'jquery', 'backbone'],
			exports: 'Marionette'
		},

		'bootstrap': ['jquery']
	}
});

require(['marionette', 'router', 'application', 'bootstrap'], function(Marionette, AppRouter, app) {

	app.addRegions({
		header: '#header',
		content: '#content',
		footer: '#footer'
	});

	var pushState = !!(window.history && window.history.pushState),
		settings = {
			pushState: pushState,
			root: '/ui'
		};

	Backbone.history.start(settings);

});