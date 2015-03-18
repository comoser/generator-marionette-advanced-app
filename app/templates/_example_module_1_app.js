define([
    'app',
    'apps/<%= moduleName %>/show/show_controller',
    'apps/<%= moduleName %>/list/list_controller'
], function(<%= appName %>) {

    // MODULE DEFINITION  ------------------------------------------------------
    <%= appName %>.module("<%= _.capitalize(moduleName) %>App", function(<%= _.capitalize(moduleName) %>App, <%= appName %>, Backbone, Marionette, $, _) {
            
        // ROUTER --------------------------------------------------------------
        <%= _.capitalize(moduleName) %>App.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "example": "action",
                "otherExample": "action2"
            }
        });

        // API -----------------------------------------------------------------
        var API = {
            action: function() {
                <%= appName %>.<%= _.capitalize(moduleName) %>App.Show.Controller.action();
            },
            action2: function() {
                <%= appName %>.<%= _.capitalize(moduleName) %>App.Show.Controller.action2();
            }
        };

        // EVENTS --------------------------------------------------------------
        var self = <%= _.capitalize(moduleName) %>App;

        self.listenTo(<%= _.capitalize(moduleName) %>App, "example:action", function() {
            API.action();
        });

        self.listenTo(<%= _.capitalize(moduleName) %>App, "example:otherAction", function() {
            API.action2();
        });

        // INIT ----------------------------------------------------------------
        <%= appName %>.addInitializer(function() {
            new <%= _.capitalize(moduleName) %>App.Router({
                controller: API
            });
        });
    });

    return <%= appName %>.<%= _.capitalize(moduleName) %>App;
});
