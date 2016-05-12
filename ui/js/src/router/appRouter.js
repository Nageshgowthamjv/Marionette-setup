define(['marionette', 'views/testView', 'models/testModel', 'application'],
  function(Marionette, TestView, TestModel, app) {

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
        //testing home page with dummy test view
        var testView = new TestView({
          model: new TestModel()
        });
        app.content.show(testView);
      }

    });

    return new MyRouter();
  });