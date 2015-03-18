define([
    'app'
], function(<%= appName %>) {
    <%= appName %>.module("Entities", function(Entities, <%= appName %>, Backbone, Marionette, $, _) {
        
        Entities.<%= _.capitalize(moduleName) %>Model = Backbone.Model.extend();
        // Put the methods in the prototype because they are going to be the same always
        _.extend(Entities.<%= _.capitalize(moduleName) %>Model.prototype, {
            urlRoot: "http://example.com",
            url: function() {
                return _.result(this, "urlRoot") + "/modelExample/";
            },
            defaults: {
                name: "",
                description: "",
                homepage: ""
            },
            //Syphon validation data
            validate: function(attrs, options) {
                var errors = {}
                if (!attrs.name) {
                    errors.name = "can't be blank";
                }
                if (!attrs.description) {
                    errors.description = "can't be blank";
                }
                if (!attrs.homepage) {
                    errors.homepage = "can't be blank";
                }
                if (!_.isEmpty(errors)) {
                    return errors;
                }
            }
            //In a truly RESTful API it won't even be necessary to override this method as long as the url is the same for GET, POST, PATCH/UPDATE and DELETE requests
            // sync: function(method, model, options) {
            //     switch (method) {
            //         //POST Overriden because the url is not the same as for PATCH, DELETE and GET requests
            //         case "create":
            //             config = _.extend(config, {
            //                 method: "POST",
            //                 url: _.result(this, "urlRoot") + "/user/repos",
            //                 data: JSON.stringify(model.pick("name", "description", "homepage",
            //                     "private", "has_issues", "has_wiki", "has_downloads", "team_id",
            //                     "auto_init", "gitignore_template"
            //                 ))
            //             });
            //             break;

            //         //GET Override in case of need 
            //         case "read":
            //             config = _.extend(config, {
            //                 method: "GET"
            //             });
            //             break;

            //         //PATCH Overriden to only send the fields I want 
            //         case "update":
            //             config = _.extend(config, {
            //                 method: "PATCH",
            //                 data: JSON.stringify(model.pick("name", "description", "homepage", "private",
            //                     "has_issues", "has_wiki", "has_downloads"
            //                 ))
            //             });
            //             break;

            //         //DELETE Override in case of need 
            //         case "delete":
            //             config = _.extend(config, {
            //                 method: "DELETE"
            //             });
            //             break;
            //     };
            //     // add API call configuration to the `options` object
            //     options = _.extend(options, config);
            //     return Backbone.Model.prototype.sync.call(this, method, model, options);
            // }
        });

        Entities.<%= _.capitalize(moduleName) %>Collection = Backbone.Collection.extend({
            urlRoot: "http://example.com",
            url: function() {
                return _.result(this, "urlRoot") + "/collectionExample/";
            },
            model: Entities.<%= _.capitalize(moduleName) %>Model,
            comparator: function(model) {
                return model.get("name");
            }
        });

        var API = {
            getExampleEntities: function() {
                var collection = new Entities.<%= _.capitalize(moduleName) %>Collection();
                var defer = $.Deferred();
                collection.fetch({
                    success: function(data) {
                        defer.resolve(data);
                    },
                    error: function(collection, response, options) {
                        if (response.status === 401) {
                            console.log("This action is not authorized and has an error: ", response.responseJSON.message);
                            // redirect to login page in client app
                        } else if(response.status === 403) {
                            console.log("Not enough privileges to execute request: ", response.responseJSON.message);
                            // show error message
                        } else {
                            console.log("This action is authorized but still has an error: ", response.responseJSON.message);
                        }
                        defer.resolve(undefined);
                    }
                });
                return defer.promise();
            },
            getExampleEntity: function(exampleName) {
                var model = new Entities.<%= _.capitalize(moduleName) %>Model({
                    name: exampleName
                });
                var defer = $.Deferred();
                model.fetch({
                    success: function(data) {
                        defer.resolve(data);
                    },
                    error: function(model, response, options) {
                        if (response.status === 401) {
                            console.log("This action is not authorized and has an error: ", response.responseJSON.message);
                            // redirect to login page in client app
                        } else if(response.status === 403) {
                            console.log("Not enough privileges to execute request: ", response.responseJSON.message);
                            // show error message
                        } else {
                            console.log("This action is authorized but still has an error: ", response.responseJSON.message);
                        }
                        defer.resolve(undefined);
                    }
                });
                return defer.promise();
            },
            saveExampleEntity: function(newModel, data) {
                var defer = $.Deferred();
                if (newModel.save(data, {
                        success: function() {
                            defer.resolve("OK");
                        },
                        error: function(model, response, options) {
                            // Check for 401 or 403 if you want
                            // Already exists error (422)
                            if (response.status === 422) {
                                // Use syphon to present the error
                                var errors = {
                                    name: 'already taken'
                                };
                                defer.reject(errors);
                            }
                        }
                    })) {} else {
                    defer.reject(newModel.validationError);
                }
                return defer.promise();
            },
            editExampleEntity: function(model, data) {
                var defer = $.Deferred();
                if (model.save(data, {
                        success: function() {
                            defer.resolve("OK");
                        },
                        error: function(model, response, options) {
                            // Check for errors directly here like previous if you want
                            defer.reject(response, model);
                        }
                    })) {} else {
                    defer.reject(model.validationError);
                }
                return defer.promise();
            },
            deleteExampleEntity: function(model) {
                var defer = $.Deferred();
                if (model.destroy({}, {
                        success: function() {
                            defer.resolve("OK");
                        },
                        error: function(model, response, options) {
                            // Check for errors directly here like previous if you want
                            defer.reject(response, model);
                        }
                    })) {} else {
                    defer.reject(model.validationError);
                }
                return defer.promise();
            }
        };

        //Get all models
        <%= appName %>.reqres.setHandler("example:entities", function() {
            return API.getExampleEntities();
        });
        //Get a specific model by id
        <%= appName %>.reqres.setHandler("example:entity", function(id) {
            return API.getExampleEntity(id);
        });
        //Save a model to the server
        <%= appName %>.reqres.setHandler("example:save", function(newModel, data) {
            return API.saveExampleEntity(newModel, data);
        });
        //Edit a model on the server
        <%= appName %>.reqres.setHandler("example:edit", function(model, data) {
            return API.editExampleEntity(model, data);
        });
        //Delete a model on the server
        <%= appName %>.reqres.setHandler("example:delete", function(model) {
            return API.deleteExampleEntity(model);
        });
    });
    return <%= appName %>.Entities;
});
