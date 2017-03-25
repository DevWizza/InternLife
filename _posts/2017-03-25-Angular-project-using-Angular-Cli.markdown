---
layout: dark-header-default
title:  "How to create a new Angular 2 project using Angular-CLI"
date:   2017-03-05
author: Luis Alberto Peña Nuñez
author_comment: He is a software developer who enjoys coming up with new and creative ways to improve existing solutions.
description: Theoretically you could set up an Angular 2 app from scratch but i wouldn’t recommend doing so, so what do we do instead?
image: "assets/img/2017-02-14/pic_1.jpg"
post_preview_desktop: "/assets/img/2017-02-14/pic_post-desktop.jpg"
post_preview_mobile: "/assets/img/2017-02-14/pic_post-mobile.jpg"
tags:
    - name: angular2
    - name: angular-cli
---

I will assume you have no experience regarding to Angular 2 nor Typescript in this tutorial, little background is optional but i will try to be as explanatory as possible.

# Angular, is it edible?

Model-View-Controller framework supported officially by Google to build dynamic websites, very lightweight and robust.

------------------------

# By the way...

1) Angular 2 is built on Typescript which is an open-source & free programming language developed by Microsoft that adds a strict supersets of Javascript and adds optional static typing and class-based object-oriented programming to the language, [check out the documentation]

2) Node.Js Package Manager is the package manager for Javascript just like Nugget for .NET, there are plenty of libraries you can find, and easily integrate from the Command Line; So every time you see a [npm install] or [npm uninstall] don't panic around.

3) Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS, which is the one we will be using for this tutorial.

------------------------

# Sweet, Let’s Angular this up.

Theoretically you could create an Angular 2 project from scratch but i wouldn’t recommend such procedure since it’s prone to errors and mistake that can show up along the way, we as developers, aren’t we supposed to work smart? Having that said we are gonna be using Angular CLI, the best way up to this day to structure and create Angular projects with little effort.

First and foremost install NodeJS and NPM.

https://nodejs.org/en/download/

Then to install Angular CLI just do

- npm install -g @angular/cli

The "-g" parameter means global installation regarding to the library being installed, so the package is installed in the global folder and can be reused later.

Once it’s done installing, then proceed by using the *ng* commands, [you can check the whole list in the documentation which list all of their functionality], the commands we will be focusing on are:

Ng new => Create a new project on the directory it was called on
Ng serve => Run Angular Project

Having said that then we proceed with:

- ng new PROJECT_NAME

Once it creates the app, to run it just do

- ng serve

Navigate to http://localhost:4200 and whoala! isn't it magic? I know, last but not least you can configure the port which is optional by doing

- ng serve --host [0.0.0.0] --port [4201]

But if you are fine with http://localhost:4200 then let's continue.

[Picture of the file structure]

# Wait, what are all these files?

I know, i know, it what makes Angular a little bit intimidating at first, but let me come in handy on this one!

I will cover the most important files which are the ones you are gonna be working with the most during the lifecycle of your project, it’s gonna be a little bit tiring at first, but i’m sorry, go drink some water, let the fluid turn up your concentration levels and let’s do this, You can do It!

[Picture]

+ folder e2e -> End to end test by Protractor, since we are learning the basics of Angular there’s not need to focus on the End to End test right now, i will cover that one later on.

+ folder node_modules -> It's where the NPM libraries go to once you do npm install awesome-package, we will cover more of this in a while, so worry not.

+ folder src -> The source code regarding to your app.

+ .angular-cli.json -> Just a simple json file to configure your app and alter the way Angular CLI will behave for testing, linting, if you weren't using Angular CLI then this file wouldn't exist.

+ .editorconfig -> EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.

+ .gitignore -> If you are naivete to Git, then you can ignore this file for now, but i so recommend you to get your hands dirty with git when you get the chance, don’t let the picapollo get you.

+ karma.conf.js -> Karma is another javascript library for testing reasons, so this file is just metadata for Karma to let it know about your project in order to test it, as i said before, not testing regarding to this chapter.

+ package.json -> Do you remember the node_module folder we were just talking about minutes ago? This file serve multiple roles, according to the official documentation:

It serves as documentation for what packages your project depends on.
It allows you to specify the versions of a package that your project can use using semantic versioning rules.
Makes your build reproducible which means that its way easier to share with other developers.

For .NET developers, package.json is the .nuspec for this platform.

+ protactor.config.js -> Another Json file where the End To End test configurations goes.

By the way, if you’ve been reading up to this point, you’ve probably said to yourself "Wait? Why are both included? Aren't they the same? Do they work together? Karma? Protactor?"

Stackoverflow has a great answer for you [include url]

+ Readme.md -> A file generated by Angular CLI with the instructions of how to build the project and etcetera.

+ tsconfig.json -> Remember Typescript? The programming language by Microsoft? First and foremost, it tells us that the project is a Typescript project, plus it helps the Typescript compiler understand the structure of the project and where the file it needs are.

+ tslint.json -> TSLint checks your TypeScript code for readability, maintainability, and functionality errors so this file is a configuration file for the TSLint.

Now let's go into src folder where you're gonna be spending most of your time

[Picture]

app -> folder made by Angular CLI where you're gonna include your app, it doesn't has to be this way, it's more about good practices-ish than anything else.

assets -> folder made by Angular CLI where you gonna include the app assets (images, audio, video, languages) and many more, you are not limited but don’t exaggerate lol, it's just a folder, what you put in there it's up to you. :)

environments -> it includes two configurations files, environment and environment.prod, it's just a JSON file where you gonna include global configurations you want to share global along the project.

favicon.ico -> App Favicon. Aren’t you sure about what a Favicon is? Easy [Include Image]

index.html -> If you open it, you will see a tag inside of <body> like this <app-root>Loading...</app-root> it's just the Angular root tag, where your Angular app will be loaded.

main.ts -> The bootstrapping file for Angular.

polyfills.ts -> Angular is built on the latest standards of the web platform. Targeting such a wide range of browsers is challenging because they do not support all features of modern browsers.

styles.css -> Global CSS for the project to share among css files.