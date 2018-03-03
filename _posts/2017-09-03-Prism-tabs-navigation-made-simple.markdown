---
layout: dark-header-default
title:  "Prism tabs navigation made simple"
date:   2017-09-3
author: Luis Alberto Peña Nuñez
author_comment: Luis Alberto Pena Nunez is deeply passionate about working with new technologies, helping people, and software engineering. He loves what technology has done for businesses and consumers, and the fact that there's no doubt it's going to have a continued effect throughout the world moving forward.
description: Navigation in tabs using Prism can be a daunting task if you are new understanding how the navigation service works, but look no further because here in this post I will you teach the basics and the advance of how to handle these scenarios.
image: "assets/img/2017-09-03-assets/background.jpg"
post_preview_desktop: "/assets/img/2017-09-03-assets/background.jpg"
post_preview_mobile: "/assets/img/2017-09-03-assets/background.jpg"
tags:
    - name: xamarin-forms
    - name: prism
    - name: deep-linking
author_icon: https://avatars1.githubusercontent.com/u/5881238?v=3&s=460
twitter: https://twitter.com/luispnez
facebook: https://www.facebook.com/sodksmmsmmwpwpskd
github: https://github.com/LuisAlbertoPenaNunez
linkedin: https://www.linkedin.com/in/luis-alberto-pe%C3%B1a-nu%C3%B1ez-aa70a5103/
instagram: https://www.instagram.com/luisapenanunez/
---

Today in this post we will be discussing how to handle navigation with tabs using Prism in Xamarin Forms. Prism's Navigation Service brings lots of value to the table when it comes to functionality and flexibility, and navigation in tabs is one of the coolest thing in this framework.

But before going futher let me show you the final result.

<video style="text-center" class="img--small" width="400" height="600" loop autoplay>
  <source src="/assets/img/2017-09-03-assets/finalresult.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

As you can see when I click on a movie the navigation is performed under the same tab and not outside replacing the whole screen.

## Setting up the project

For every tab you create you need a NavigationPage, so the navigation is handled within each tab. So in the app we will be featuring there are three tabs (only two of them do navigation work):

1. Showing Now (ShowingNowNavigationPage)
2. Categories (CategoriesNavigationPage)

<img class="img--small" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-03-assets/tabs_preview.png">

## The NavigationService "Context".

The NavigationService in Prism has some sort of "context" which we can manipulate when dealing with tabs. The context gets set for the first time in the PrismApplication **OnInitialized()** method.

<script src="https://gist.github.com/LuisAlbertoPenaNunez/1b6e10c9a52b967d385095a60ffc84fa.js"></script>

Here I specified that there is a TabPage with a NavigationPage, so subsequent calls to the NavigationService will result "in context" to this NavigationPage which is why we can't just transitionate from one page to another because the NavigationService will do it under the "wrong context".

## How do we switch context?

In order to switch the "context" we need to pass a different URI when calling the **NavigateTo()** method. The sintax goes like this:

/CurrentScreenNavigationPage/CurrentScreen/ScreenWantingToNavigateTo



## Let's get started

First, you need to create a NavigationPage derivated class for each tab. Here is the TabbedPage for the image above.

<script src="https://gist.github.com/LuisAlbertoPenaNunez/cc189e98d572909a92c63dac6fe93b07.js"></script>

And here is one of the those NavigationPage. The reason why I added a constructor was to pass the page directly from XAML as shown above.

<script src="https://gist.github.com/LuisAlbertoPenaNunez/78495d8efce84c4f7a2942127a7950ea.js"></script>

And for every NavigationPage that you create you need to register them separately in your Prism setup class.

<script src="https://gist.github.com/LuisAlbertoPenaNunez/571ffbbfd2d5e23b01ccbb3e78c99f2d.js"></script>

## How to perform navigation within the same tab

Now here is the tricky part, when you are performing navigation within the same tab you have to do it slightly different otherwise you might end up with double NavigationPage which is not the desired result.

Remember this screen?

<script src="https://gist.github.com/LuisAlbertoPenaNunez/fbeb39ae9147d68b9344ceb05d3f9e49.js"></script>