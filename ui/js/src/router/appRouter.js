define(['marionette'],
  function(Marionette) {

    var MyRouter = Marionette.AppRouter.extend({

      /*appRoutes: {
        "some/route": "someMethod"
      },*/

      /* standard routes can be mixed with appRoutes/Controllers above */
      routes: {
        // "some/otherRoute": "someOtherMethod"
        '': 'home',
        'test': 'test'
      },
      someOtherMethod: function() {
        // do something here.
      },
      home: function() {

      },
      test: function() {

      }

    });

    return new MyRouter();

  });