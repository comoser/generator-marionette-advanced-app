'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        var done = this.async();

        // Helper function to prompt for module names
        this.promptModule = function(context, numRuns) {
            if (numRuns === 0) {
                done();
                return;
            }
            var aux = context.top - numRuns;
            context.prompt({
                name: 'moduleName',
                message: 'What\'s your ' + aux.toString() + ' module name?',
                validate: function(input) {
                    if (input.length === 0) {
                        return 'The module name must have at least one character... :)';
                    } else {
                        return true;
                    }
                }
            }, function(props) {
                context.moduleNames.push(props.moduleName);
                numRuns--;
                this.promptModule(context, numRuns);
            }.bind(context));
        };

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the priceless ' + chalk.red('Marionette Advanced App') + ' generator!'
        ));

        var prompts = [{
            name: 'appName',
            message: 'What\'s your app name?',
            validate: function(input) {
                if (input.length === 0) {
                    return 'The app name must have at least one character... :)';
                } else {
                    return true;
                }
            }
        }, {
            type: 'number',
            name: 'numModules',
            message: 'How many modules do you want to create?',
            validate: function(input) {
                if (parseInt(input) <= 0) {
                    return 'You must have at least one module... :)';
                } else {
                    return true;
                }
            },
            default: 1
        }];

        this.prompt(prompts, function(props) {
            this.appName = props.appName;
            this.numModules = parseInt(props.numModules);

            if (this.numModules > 1) {
                this.moduleNames = [];
                this.top = this.numModules + 1;
                this.promptModule(this, this.numModules);
            } else {
                this.prompt({
                    name: 'moduleName',
                    message: 'What\'s your module name?',
                    validate: function(input) {
                        if (input.length === 0) {
                            return 'The module name must have at least one character... :)';
                        } else {
                            return true;
                        }
                    }
                }, function(props) {
                    this.moduleName = props.moduleName;
                    done();
                }.bind(this));
            }
        }.bind(this));
    },

    writing: {
        app: function() {
            // this.fs.copyTpl(
            //     this.templatePath('_package.json'),
            //     this.destinationPath('package.json'), {
            //         appName: this.appName,
            //         version: '0.1.0'
            //     }
            // );
            // this.fs.copy(
            //     this.templatePath('_.bowerrc'),
            //     this.destinationPath('.bowerrc')
            // );
            // this.fs.copyTpl(
            //     this.templatePath('_bower.json'),
            //     this.destinationPath('bower.json'), {
            //         appName: this.appName,
            //         version: '0.1.0'
            //     }
            // );
        },

        projectfiles: function() {
            // this.fs.copy(
            //     this.templatePath('editorconfig'),
            //     this.destinationPath('.editorconfig')
            // );
            // this.fs.copy(
            //     this.templatePath('jshintrc'),
            //     this.destinationPath('.jshintrc')
            // );
        },

        marionetteapp: function() {
            // index.html
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('index.html'), {
                    title: this.appName
                }
            );
            this.mkdir("assets");
            this.mkdir("assets/css");
            this.mkdir("assets/img");
            this.mkdir("assets/js");
            this.mkdir("assets/js/apps");
            this.mkdir("assets/js/common");
            this.mkdir("assets/js/entities");
            this.mkdir("assets/js/vendor");

            // app.js
            this.fs.copyTpl(
                this.templatePath('_app.js'),
                this.destinationPath('assets/js/app.js'), {
                    appName: this.appName + 'App'
                }
            );
            // main.js for require
            this.fs.copyTpl(
                this.templatePath('_main.js'),
                this.destinationPath('assets/js/main.js'), {
                    appName: this.appName + 'App'
                }
            );
            // module dependant part to create folders
            if (this.numModules === 1) {
                this.mkdir("assets/js/apps/" + this.moduleName);
                this.mkdir("assets/js/apps/" + this.moduleName + "/show");
                this.mkdir("assets/js/apps/" + this.moduleName + "/show/templates");
                this.mkdir("assets/js/apps/" + this.moduleName + "/list");
                this.mkdir("assets/js/apps/" + this.moduleName + "/list/templates");
                // example_module_app.js
                this.fs.copyTpl(
                    this.templatePath('_example_module_1_app.js'),
                    this.destinationPath('assets/js/apps/' + this.moduleName + '/' + this.moduleName + '_app.js'), {
                        appName: this.appName + 'App',
                        moduleName: this.moduleName
                    }
                );
                // show_controller.js
                this.fs.copyTpl(
                    this.templatePath('_show_controller.js'),
                    this.destinationPath('assets/js/apps/' + this.moduleName + '/show/show_controller.js'), {
                        appName: this.appName + 'App',
                        moduleName: this.moduleName
                    }
                );
                // show_view.js
                this.fs.copyTpl(
                    this.templatePath('_show_view.js'),
                    this.destinationPath('assets/js/apps/' + this.moduleName + '/show/show_view.js'), {
                        appName: this.appName + 'App',
                        moduleName: this.moduleName
                    }
                );
                // list_controller.js
                this.fs.copyTpl(
                    this.templatePath('_list_controller.js'),
                    this.destinationPath('assets/js/apps/' + this.moduleName + '/list/list_controller.js'), {
                        appName: this.appName + 'App',
                        moduleName: this.moduleName
                    }
                );
                // list_view.js
                this.fs.copyTpl(
                    this.templatePath('_list_view.js'),
                    this.destinationPath('assets/js/apps/' + this.moduleName + '/list/list_view.js'), {
                        appName: this.appName + 'App',
                        moduleName: this.moduleName
                    }
                );
                // list_collection_template.tpl
                this.fs.copyTpl(
                    this.templatePath('_list_collection_template.tpl'),
                    this.destinationPath('assets/js/apps/' + this.moduleName + '/list/templates/list_collection_template.tpl')
                );
                // list_template.tpl
                this.fs.copyTpl(
                    this.templatePath('_list_template.tpl'),
                    this.destinationPath('assets/js/apps/' + this.moduleName + '/list/templates/list_template.tpl')
                );
                // show_template.tpl
                this.fs.copyTpl(
                    this.templatePath('_show_template.tpl'),
                    this.destinationPath('assets/js/apps/' + this.moduleName + '/show/templates/show_template.tpl')
                );
                // example_entity.js
                this.fs.copyTpl(
                    this.templatePath('_example_entity.js'),
                    this.destinationPath('assets/js/entities/' + this.moduleName + '_entity.js'), {
                        appName: this.appName + 'App',
                        moduleName: this.moduleName
                    }
                );
            } else {
                for (var i = 0; i < this.numModules; i++) {
                    this.mkdir("assets/js/apps/" + this.moduleNames[i]);
                    this.mkdir("assets/js/apps/" + this.moduleNames[i] + "/show");
                    this.mkdir("assets/js/apps/" + this.moduleNames[i] + "/show/templates");
                    this.mkdir("assets/js/apps/" + this.moduleNames[i] + "/list");
                    this.mkdir("assets/js/apps/" + this.moduleNames[i] + "/list/templates");
                    // example_module_app.js
                    this.fs.copyTpl(
                        this.templatePath('_example_module_1_app.js'),
                        this.destinationPath('assets/js/apps/' + this.moduleNames[i] + '/' + this.moduleNames[i] + '_app.js'), {
                            appName: this.appName + 'App',
                            moduleName: this.moduleNames[i]
                        }
                    );
                    // show_controller.js
                    this.fs.copyTpl(
                        this.templatePath('_show_controller.js'),
                        this.destinationPath('assets/js/apps/' + this.moduleNames[i] + '/show/show_controller.js'), {
                            appName: this.appName + 'App',
                            moduleName: this.moduleNames[i]
                        }
                    );
                    // show_view.js
                    this.fs.copyTpl(
                        this.templatePath('_show_view.js'),
                        this.destinationPath('assets/js/apps/' + this.moduleNames[i] + '/show/show_view.js'), {
                            appName: this.appName + 'App',
                            moduleName: this.moduleNames[i]
                        }
                    );
                    // list_controller.js
                    this.fs.copyTpl(
                        this.templatePath('_list_controller.js'),
                        this.destinationPath('assets/js/apps/' + this.moduleNames[i] + '/list/list_controller.js'), {
                            appName: this.appName + 'App',
                            moduleName: this.moduleNames[i]
                        }
                    );
                    // list_view.js
                    this.fs.copyTpl(
                        this.templatePath('_list_view.js'),
                        this.destinationPath('assets/js/apps/' + this.moduleNames[i] + '/list/list_view.js'), {
                            appName: this.appName + 'App',
                            moduleName: this.moduleNames[i]
                        }
                    );
                    // list_collection_template.tpl
                    this.fs.copyTpl(
                        this.templatePath('_list_collection_template.tpl'),
                        this.destinationPath('assets/js/apps/' + this.moduleNames[i] + '/list/templates/list_collection_template.tpl')
                    );
                    // list_template.tpl
                    this.fs.copyTpl(
                        this.templatePath('_list_template.tpl'),
                        this.destinationPath('assets/js/apps/' + this.moduleNames[i] + '/list/templates/list_template.tpl')
                    );
                    // show_template.tpl
                    this.fs.copyTpl(
                        this.templatePath('_show_template.tpl'),
                        this.destinationPath('assets/js/apps/' + this.moduleNames[i] + '/show/templates/show_template.tpl')
                    );
                    // example_entity.js
                    this.fs.copyTpl(
                        this.templatePath('_example_entity.js'),
                        this.destinationPath('assets/js/entities/' + this.moduleNames[i] + '_entity.js'), {
                            appName: this.appName + 'App',
                            moduleName: this.moduleNames[i]
                        }
                    );
                }
            }
        }
    },

    install: function() {
        // this.installDependencies({
        //     // bower: true,
        //     // npm: true,
        //     skipInstall: this.options['skip-install']
        // });
    }
});
