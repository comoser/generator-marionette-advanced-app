define([
    'app',
    'apps/<%= moduleName %>/show/show_view'
], function(<%= appName %>) {
    <%= appName %>.module("<%= _.capitalize(moduleName) %>App.Show", function(Show, <%= appName %>, Backbone, Marionette, $, _) {
        var Controller = Marionette.Controller.extend({
            action: function() {

                var self = Show.Controller;

                // FETCH RESULTS FROM ENTITY -----------------------------------
                var fetchRequest = <%= appName %>.request("someEntity:entity");

                $.when(fetchRequest).done(function(fetchedModel) {
                    var exampleView = new Show.ExampleView({
                        model: fetchedModel
                    });

                    // VIEW EVENTS ---------------------------------------------
                    self.listenTo(exampleView, "view:action", function() {
                        <%= appName %>.<%= _.capitalize(moduleName) %>App.trigger("example:otherAction");
                    });

                    <%= appName %>.mainRegion.show(exampleView);
                });
            },

            action2: function() {
                // do operations here
            }
        });

        Show.Controller = new Controller();
    });

    return <%= appName %>.<%= _.capitalize(moduleName) %>App.Show;
});
