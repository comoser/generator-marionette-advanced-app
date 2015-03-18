define([
    'app',
    'tpl!apps/<%= moduleName %>/list/templates/list_template.tpl',
    'tpl!apps/<%= moduleName %>/list/templates/list_collection_template.tpl'
], function(<%= appName %>, ExampleTpl, ExampleCollectionTpl) { 
    <%= appName %>.module("<%= _.capitalize(moduleName) %>App.List", function(List, <%= appName %>, Backbone, Marionette, $, _) {

        // EXAMPLE -------------------------------------------------------
        List.ExampleView = Marionette.ItemView.extend({
            template: ExampleTpl,
            tagName: "tr",
            events: {
                "click someElement": "action"
            },
            action: function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.trigger("view:action");
            }
        });

        List.ExampleCollectionView = Marionette.CollectionView.extend({
            tagName: "table",
            template: ExampleCollectionTpl,
            childView: List.ExampleView,
            childViewContainer: "tbody"
        });
    });

    return <%= appName %>.<%= _.capitalize(moduleName) %>App.List;
});
