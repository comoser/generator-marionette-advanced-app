# generator-marionette-advanced-app [![Build Status](https://secure.travis-ci.org/comoser/generator-marionette-advanced-app.png?branch=master)](https://travis-ci.org/comoser/generator-marionette-advanced-app)


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-marionette-advanced-app from npm, run:

```bash
npm install -g generator-marionette-advanced-app
```

Finally, initiate the generator:

```bash
yo marionette-advanced-app
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## Introduction

This generator follows an app and action based approach, with the objective of creating separate modules inside a bigger app. *This proves to be useful in maintaining it and in order to better scale the app.*
There are a lot of third party plugins and dependencies required for this to work properly:
> [Backbone] (http://backbonejs.org/)

> [Marionette] (http://marionettejs.com/)

> [jQuery] (http://jquery.com/download/)

> [Backbone Syphon] (https://github.com/marionettejs/backbone.syphon)

> [Require] (http://requirejs.org/docs/download.html)

> [Underscore] (http://underscorejs.org/)

> [Tpl] (https://github.com/jfparadis/requirejs-tpl)

This generator only creates and will ever only create the structure of the app. 
It will NOT include the dependencies you need in the vendor folder, leaving that task to you.
Refer to the Usage chapter in order to use this app structure properly.

## App Structure
```bash
yourAppName
|---index.html                                // holds the base html of your app (keep it as simple as possible)
|---assets
|	|---css                                     // all of the css's you need
|	|---img                                     // all of the images you need
|	|---js                                      // your main app folder, per say
|	|	|---app.js                                // your main app (the entry point for your Marionette app)
|	|	|---main.js                               // dependencies for require.js module (Marionette app starts here)
|	|	|---apps                                  // where your modules or sub-apps reside
|	|	|	|---module1                             // module or sub-app named "module1"
|	|	|	|	|---module1_app.js                    // this specific module main app (the gluer of the sub-app)
|	|	|	|	|---list                              // the action of listing something in this sub-app
|	|	|	|	|	|---list_controller.js              // the controller of this action only
|	|	|	|	|	|---list_view.js                    // the marionette views for the controller to use
|	|	|	|	|	|---templates                       // templates for the listing action only
|	|	|	|	|	|	|---module1_list_template.tpl
|	|	|	|	|	|	|---etc
|	|	|	|	|---new                               // the action of creating something new in this sub-app
|	|	|	|	|	|---new_controller.js               // the controller of this action only
|	|	|	|	|	|---new_view.js                     // the marionette views for the controller to use
|	|	|	|	|	|---templates                       // templates for the new action only
|	|	|	|	|	|	|---module1_new_template.tpl
|	|	|	|	|	|	|---etc
|	|	|	|	|---show                              // the action of showing something in this sub-app
|	|	|	|	|	|---show_controller.js              // the controller of this action only
|	|	|	|	|	|---show_view.js                    // the marionette views for the controller to use
|	|	|	|	|	|---templates                       // templates for the new action only
|	|	|	|	|	|	|---module1_show_template.tpl
|	|	|	|	|	|	|---etc
|	|	|	|	|---etc
|	|	|	|---module2
|	|	|	|	|---module2_app.js
|	|	|	|	|---list
|	|	|	|	|	|---list_controller.js
|	|	|	|	|	|---list_view.js
|	|	|	|	|	|---templates
|	|	|	|	|	|	|---module2_list_template.tpl
|	|	|	|	|	|	|---etc
|	|	|	|	|---new
|	|	|	|	|	|---new_controller.js
|	|	|	|	|	|---new_view.js
|	|	|	|	|	|---templates
|	|	|	|	|	|	|---module2_new_template.tpl
|	|	|	|	|	|	|---etc
|	|	|	|	|---show
|	|	|	|	|	|---show_controller.js
|	|	|	|	|	|---show_view.js
|	|	|	|	|	|---templates
|	|	|	|	|	|	|---module2_show_template.tpl
|	|	|	|	|	|	|---etc
|	|	|	|	|---etc
|	|	|	|---etc
|	|	|---common                                // common views or functionality across the app
|	|	|---entities                              // the models of the app (they contact with some remote API)
|	|	|	|---module1_entity.js                   // entity used by module1, but there may be more of course
|	|	|	|---module2_entity.js                   // entity used by module2, but there may be more of course
|	|	|---vendor                                // third party plugins and dependencies needed for the app
```

## Usage

## License

MIT
