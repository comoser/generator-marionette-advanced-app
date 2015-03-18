requirejs.config({

    baseUrl: 'assets/js',

    locale: 'en',

    paths: {
        'backbone':             'vendor/backbone',
        'marionette':           'vendor/backbone.marionette',
        'jquery':               'vendor/jquery',
        'bootstrap':            'vendor/bootstrap',
        'underscore':           'vendor/underscore',
        'tpl':                  'vendor/tpl',
        'json2':                'vendor/json2',
        'i18n':                 'vendor/i18n'
    },

    shim: {
        'jquery': {
            exports:            '$'
        },
        'underscore': {
            deps:               ['jquery'],
            exports:            '_'
        },
        'backbone': {
            deps:               ['jquery', 'underscore', 'json2'],
            exports:            'Backbone'
        },
        'marionette': {
            deps:               ['backbone'],
            exports:            'Marionette'
        },
        'bootstrap':            ['jquery'],
    }

});

// start the app
require([
    'app'
], function(<%= appName %>) {
    <%= appName %>.start();
});
