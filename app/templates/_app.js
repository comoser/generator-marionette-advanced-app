define([
    'marionette'
], function(Marionette) {

    var <%= appName %> = new Marionette.Application();

    // REGIONS -----------------------------------------------------------------

    <%= appName %>.addRegions({
        topRegion: '#top-region',
        mainRegion: '#main-region',
        sideRegion: '#side-region'
    });

    // NAVIGATION --------------------------------------------------------------

    <%= appName %>.navigate = function(route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    <%= appName %>.getCurrentRoute = function() {
        if (Backbone.history.fragment === undefined) return '';
        return Backbone.history.fragment;
    };

    // EVENTS ------------------------------------------------------------------

    <%= appName %>.listenTo(<%= appName %>, "action:execute", function(action, params) {

        // execute your code here for app wide events received for action "action:execute"

    });

    // INIT --------------------------------------------------------------------

    <%= appName %>.listenTo(<%= appName %>, "start", function() {
        if (Backbone.history) {
            Backbone.history.start();

            if (this.getCurrentRoute() === "") {
                // call default action here for when the url is empty of options
            }
        }

    });

    return <%= appName %>;

});
