# generator-marionette-advanced-app 

> [![Build Status](https://secure.travis-ci.org/comoser/generator-marionette-advanced-app.png?branch=master)](https://travis-ci.org/comoser/generator-marionette-advanced-app)

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

## Installation

To install generator-marionette-advanced-app from npm, run:

```bash
npm install -g generator-marionette-advanced-app
```

Finally, initiate the generator:

```bash
yo marionette-advanced-app
```

## Introduction

The grounds to build this app structure were extracted from the structure David Sulc presents in his books "Backbone Marionette js: A gentle introduction",  "Structuring Backbone.js code with RequireJS and Marionette.js modules: A gentle introduction" and "Backbone Marionette js: A serious progression". All credits granted to him and to his knowledge translated in these books.

> [David Sulc Github] (https://github.com/davidsulc)

> [David Sulc Site] (http://davidsulc.com/)

This generator follows an app and action based approach, with the objective of creating separate modules inside a bigger app. *This proves to be useful in maintaining it and in order to better scale the app in the future.*
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
|---index.html                                			// holds the base html of your app (keep it as simple as possible)
|---assets
|	|---css                                     		// all of the css's you need
|	|---img                                     		// all of the images you need
|	|---js                                      		// your main app folder, per say
|	|	|---app.js                                		// your main app (the entry point for your Marionette app)
|	|	|---main.js                               		// dependencies for require.js module (Marionette app starts here)
|	|	|---apps                                  		// where your modules or sub-apps reside
|	|	|	|---module1                             	// module or sub-app named "module1"
|	|	|	|	|---module1_app.js                    	// this specific module main app (the gluer of the sub-app)
|	|	|	|	|---list                              	// the action of listing something in this sub-app
|	|	|	|	|	|---list_controller.js              // the controller of this action only
|	|	|	|	|	|---list_view.js                    // the marionette views for the controller to use
|	|	|	|	|	|---templates                       // templates for the listing action only
|	|	|	|	|	|	|---module1_list_template.tpl
|	|	|	|	|	|	|---etc
|	|	|	|	|---new                               	// the action of creating something new in this sub-app
|	|	|	|	|	|---new_controller.js               // the controller of this action only
|	|	|	|	|	|---new_view.js                     // the marionette views for the controller to use
|	|	|	|	|	|---templates                       // templates for the new action only
|	|	|	|	|	|	|---module1_new_template.tpl
|	|	|	|	|	|	|---etc
|	|	|	|	|---show                              	// the action of showing something in this sub-app
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
|	|	|---common                                		// common views or functionality across the app
|	|	|---entities                              		// the models of the app (they contact with some remote API)
|	|	|	|---module1_entity.js                   	// entity used by module1, but there may be more of course
|	|	|	|---module2_entity.js                   	// entity used by module2, but there may be more of course
|	|	|---vendor                                		// third party plugins and dependencies needed for the app
```

## Usage

### Run the generator

![](https://cloud.githubusercontent.com/assets/5495320/6727556/977d9e0a-ce1a-11e4-9c0f-2ede9e9143ee.png)

The app name requested is the name by which your main app will be called throughout the development of your app (e.g. ContactsManager).

### Set the number of modules or sub-apps wanted

![](https://cloud.githubusercontent.com/assets/5495320/6727558/977ec686-ce1a-11e4-96f7-9b7f6988a37b.png)

The objective of this app structure is to solely support any number of sub-apps inside the main one, in order to maintain it more easily in the future. So, here you choose how many sub-apps or modules you want inside your main app.

### Set the name for each module or sub-app

![](https://cloud.githubusercontent.com/assets/5495320/6727555/977d8866-ce1a-11e4-89e6-b7f2518cde08.png)
![](https://cloud.githubusercontent.com/assets/5495320/6727554/977b60ae-ce1a-11e4-9884-ef84248e54f9.png)

### Time to work!

After this small setup, the generator will create a base structure for you to work with the modules you set previously.

![](https://cloud.githubusercontent.com/assets/5495320/6727557/977dce70-ce1a-11e4-8db2-2cece8dc68d6.png)

## License

MIT
