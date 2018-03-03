---
layout: dark-header-default
title:  "Prism 7 tabs navigation made simple"
date:   2018-03-3
author: Luis Alberto Peña Nuñez
author_comment: Luis Alberto Pena Nunez is deeply passionate about working with new technologies, helping people, and software engineering. He loves what technology has done for businesses and consumers, and the fact that there's no doubt it's going to have a continued effect throughout the world moving forward.
description: Tabs set up and navigation in Prism can be a lifesaver when there is not so much time to spare and the requirements seem to be piling up. With Prism 7 it got even easier to set up tabs and that's what we are gonna discuss in this post.
image: "assets/img/2018-03-03-assets/background.jpg"
post_preview_desktop: "/assets/img/2018-03-03-assets/background.jpg"
post_preview_mobile: "/assets/img/2018-03-03-assets/background.jpg"
tags:
    - name: xamarin-forms
    - name: prism
    - name: tabs
author_icon: https://avatars1.githubusercontent.com/u/5881238?v=3&s=460
twitter: https://twitter.com/luispnez
facebook: https://www.facebook.com/sodksmmsmmwpwpskd
github: https://github.com/LuisAlbertoPenaNunez
linkedin: https://www.linkedin.com/in/luis-alberto-pe%C3%B1a-nu%C3%B1ez-aa70a5103/
instagram: https://www.instagram.com/luisapenanunez/
---

Prism 7 just went out and this new release brings many cool and interesting features to the table.
One of them was the refactoring of how the tab set up and navigation is done. Although it is unfortunate that there's not much documentation about such changes so that's what I'm trying to address with this entry.

For starters, let me show you what the final goal looks like:

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2018-03-03-assets/final_result.gif">
<img  class="img--small" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2018-03-03-assets/final_result.gif">
</a>

Basically a <b>TabPage</b> with three tabs and each one of them with their own <b>NavigationPage</b> container.

## Setting up the tabs

In older versions of Prism, we were responsible for the initialization of the tabs and had to delegate the <b>INavigationAware</b> calls to the children tabs and many other tasks that were repetitive boring.

Now we don't have to do that anymore, and the "initialization" is done the first time you navigate in the <b>App.cs</b> file.

<script src="https://gist.github.com/LuisAlbertoPenaNunez/d3265a9b5ffab82a4e401aa7cef48da5.js"></script>

So basically, all we gotta do now is use all this new syntax to initialize the tabs. Pretty cool, isn't?

### Understanding the new syntax

First, we reference the <b>TabPage</b> we want to use then put a <b>" ? "</b> character to initialize the tabs and per each new tab put a 
<b>" & "</b> character.

<script src="https://gist.github.com/LuisAlbertoPenaNunez/af134c9422cc0bea3c5bdf587c780cd6.js"></script>

For each tab you create you have to reference the constant <b>KnownNavigationParameters.CreateTab</b> and put a <b>" = "</b> character if you want a <b>NavigationPage</b> with it and then a{% raw %} <b>" | " </b>
 {% endraw %} character to init the Page you want to be contained in that <b>NavigationPage.</b>

Let's take <b>showingNowTab</b> as an example:

<script src="https://gist.github.com/LuisAlbertoPenaNunez/64fb0e40b04a3cfa147b5e08989e0dbe.js"></script>

After that, the last step would be passing it to the <b>NavigationService.NavigateAsync(tabs);</b> as illustrated in the first gist in the tutorial and you will be done.

<script src="https://gist.github.com/LuisAlbertoPenaNunez/35a03541fb79f94edc2f5e619dd435b2.js"></script>

If you don't wanna have a <b>NavigationPage</b> container in a specific tab then all you have to do is leave out that section and just reference the <b>KnownNavigationParameters.CreateTab</b> constant and the <b>Page</b> you want to instantiate:

<script src="https://gist.github.com/LuisAlbertoPenaNunez/de8e5e8edba005945ff494483aac23b2.js"></script>

## Navigating within the same NavigationPage

Navigating within the same NavigationPage got even easier than ever before, all you gotta do is specify the <b>Page</b> you want to navigate to:

<script src="https://gist.github.com/LuisAlbertoPenaNunez/5f052c49630f83db52e5d2b7b48c2b7c.js"></script>

Let's say you are in the home screen scrolling through a list of movies and then you tap on one of the movies, this way the navigation will happen within the same NavigationPage.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2018-03-03-assets/tab_navigation.gif">
<img  class="img--small" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2018-03-03-assets/tab_navigation.gif">
</a>

# The End

There’s a lot to cover regarding this new update but instead of making a huge massive post, we are gonna do one at a time instead, hope you enjoyed it and don’t forget to share with other developers if you found the article useful.

Check out the project on Github . <a href="https://github.com/DevWizza/Movies">https://github.com/DevWizza/Movies</a>