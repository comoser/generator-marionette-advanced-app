define([
    'app',
    'tpl!apps/<%= moduleName %>/show/templates/show_template.tpl'
], function(<%= appName %>, ExampleTpl) { 
    <%= appName %>.module("<%= _.capitalize(moduleName) %>App.Show", function(Show, <%= appName %>, Backbone, Marionette, $, _) {

        // EXAMPLE -------------------------------------------------------
        Show.ExampleView = Marionette.ItemView.extend({
            template: ExampleTpl,
            events: {
                "click someElement": "action"
            },
            action: function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.trigger("view:action");
            }
        });
    });

    return <%= appName %>.<%= _.capitalize(moduleName) %>App.Show;
});
