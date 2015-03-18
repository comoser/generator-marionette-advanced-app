define([
    'app',
    'apps/<%= moduleName %>/list/list_view'
], function(<%= appName %>) {
    <%= appName %>.module("<%= _.capitalize(moduleName) %>App.List", function(List, <%= appName %>, Backbone, Marionette, $, _) {
        var Controller = Marionette.Controller.extend({
            action: function() {
                var self = List.Controller;

                // FETCH RESULTS FROM ENTITY -----------------------------------
                var fetchRequest = <%= appName %>.request("example:entities");

                $.when(fetchRequest).done(function(fetchedCollection) {
                    var exampleView = new List.ExampleView({
                        collection: fetchedCollection
                    });

                    // VIEW EVENTS ---------------------------------------------
                    self.listenTo(exampleView, "view:action", function() {
                        <%= appName %>.<%= _.capitalize(moduleName) %>App.trigger("example:otherAction");
                    });

                    <%= appName %>.mainRegion.show(exampleView);
                }).fail(function(response, model) {
                    // If the rerouting is not done in the entity, then pass the response here and call the redirect method you want according to the response status (401, 403, 422, etc)

                });
            },

            action2: function() {
                // do operations here
            }
        });

        List.Controller = new Controller();
    });

    return <%= appName %>.<%= _.capitalize(moduleName) %>App.List;
});
