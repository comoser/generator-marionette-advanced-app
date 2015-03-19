'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('marionette-advanced-app:app', function() {
    before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({
                'skip-install': true
            })
            .withPrompt({
                appName: "ContactsManager",
                numModules: 1,
                moduleName: "enterprise",
                moduleNames: ['personnal', 'enterprise']
            })
            .on('end', done);
    });

    it('creates files', function() {
        assert.file([
            // 'bower.json',
            // 'package.json',
            // '.editorconfig',
            // '.jshintrc'
            'index.html',
            'assets/js/app.js',
            'assets/js/main.js',
        ]);
    });
    // it('create first module', function() {
    //     assert.file([
    //         'assets/js/apps/personnal/personnal_app.js',
    //         'assets/js/apps/personnal/show/show_controller.js',
    //         'assets/js/apps/personnal/show/show_view.js',
    //         'assets/js/apps/personnal/list/list_controller.js',
    //         'assets/js/apps/personnal/list/list_view.js',
    //         'assets/js/apps/personnal/list/templates/list_collection_template.tpl',
    //         'assets/js/apps/personnal/list/templates/list_template.tpl',
    //         'assets/js/apps/personnal/show/templates/show_template.tpl',
    //         'assets/js/entities/personnal_entity.js'
    //     ]);
    // });
    it('create module', function() {
        assert.file([
            'assets/js/apps/enterprise/enterprise_app.js',
            'assets/js/apps/enterprise/show/show_controller.js',
            'assets/js/apps/enterprise/show/show_view.js',
            'assets/js/apps/enterprise/list/list_controller.js',
            'assets/js/apps/enterprise/list/list_view.js',
            'assets/js/apps/enterprise/list/templates/list_collection_template.tpl',
            'assets/js/apps/enterprise/list/templates/list_template.tpl',
            'assets/js/apps/enterprise/show/templates/show_template.tpl',
            'assets/js/entities/enterprise_entity.js'
        ]);
    });
});
