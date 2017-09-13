---
layout: dark-header-default
title:  "Prism set up made simple"
date:   2017-09-1
author: Luis Alberto Peña Nuñez
author_comment: Luis Alberto Pena Nunez is deeply passionate about working with new technologies, helping people, and software engineering. He loves what technology has done for businesses and consumers, and the fact that there's no doubt it's going to have a continued effect throughout the world moving forward.
description: Prism is a framework for building loosely-coupled maintainable code without having to spend much time thinking about architecture, in this tutorial I will take you through the process of setting up Prism in the simplest way possible. All you need is a working computer and a couple cups of coffe and patience!
image: "assets/img/2017-09-01-assets/background.jpg"
post_preview_desktop: "/assets/img/2017-09-01-assets/background.jpg"
post_preview_mobile: "/assets/img/2017-09-01-assets/background.jpg"
tags:
    - name: xamarin-forms
    - name: prism
    - name: Setting-Up
author_icon: https://avatars1.githubusercontent.com/u/5881238?v=3&s=460
twitter: https://twitter.com/luispnez
facebook: https://www.facebook.com/sodksmmsmmwpwpskd
github: https://github.com/LuisAlbertoPenaNunez
linkedin: https://www.linkedin.com/in/luis-alberto-pe%C3%B1a-nu%C3%B1ez-aa70a5103/
instagram: https://www.instagram.com/luisapenanunez/
---

### Getting Started

So, let's go ahead and do a <b>File > New Project</b> and choose <b>Cross Platform App. (Xamarin)</b>

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/FileNewProject.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/FileNewProject.png"></a>

And as our <b>Coding Sharing Strategy</b> choose PCL for this tutorial.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/AfterFileNew.png"> <img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/AfterFileNew.png"></a>

Run the project to make sure this <b>File New</b> kinda thing at least works. Lol (because sometimes it doesn't.)

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/AppRunningAfterNewFileAndroid.png"> <img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/AppRunningAfterNewFileAndroid.png">
</a>

So things are going suave so far. Now we want to make sure that we have our Xamarin Forms packages updated to the latest version available. With that, we need two install two packages needed for our set up, one of them being [Prism](https://www.nuget.org/packages/Prism.Forms/) and the other being [Prism.Forms.Unity](https://www.nuget.org/packages/Prism.Unity.Forms/). Also make sure you install both of them in all your projects.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/InstallingPrismInAllProjects.png"> <img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/InstallingPrismInAllProjects.png">
</a>

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/PrismUnity.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/FileNewProject/PrismUnity.png"></a>

Having that done, we can now start setting up our projects so they can start using the framework. We are going to do the [PCL](https://developer.xamarin.com/guides/cross-platform/application_fundamentals/pcl/introduction_to_portable_class_libraries/) first and then [Android](https://developer.xamarin.com/guides/android/) and lastly [iOS](https://developer.xamarin.com/guides/ios/).

### Setting up Prism in the PCL Project

Open your <b>App.cs</b> file which by the way should look something similar to this.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/PCLInit/BeforeAppcs.png">
<img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/PCLInit/BeforeAppcs.png">
</a>

And basically what we need to do here is just inherit from <b>PrismApplication</b> instead and override the abstact methods from that class which are the followings:

1. <b>OnInitialized:</b> which let you do initialization code.
2. <b>RegisterTypes:</b> which let you register services and pages for navigation. (Will explain more details about this later in this tutorial).

Also notice how I added one more constructor which calls the <b>base</b> implementation passing an <b>IPlatformInitializer</b> object and what that ultimately does is let you implement platform specific services. But don't worry about it because it's not something required to get this thing running.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/PCLInit/AfterSettingPrismApplication.png">
<img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/PCLInit/AfterSettingPrismApplication.png">
</a>

So after doing all that, how come we got errors? Well.. probably because we didn't do any changes to our <b>App.XAML</b> file.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/PCLInit/BeforeAppXAML.png">
<img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/PCLInit/BeforeAppXAML.png">
</a>

So just like we did in the <b>App.cs</b> file where we inherited from <b>PrismApplication</b>, we also want to do that here.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/PCLInit/AppXAMLAfter.png">
<img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/PCLInit/AppXAMLAfter.png">
</a>

Notice how I added a <b>prism</b> directive in the <b>line 4</b> so we can access its members.

After doing that the errors should be gone in the <b>App.cs</b> file, and if not then clean and build again. So yeah my friend, that's all for the PCL.

### Setting up Prism in Android

This one is gonna be easier. Go into your Android files in the solution explorer and open the <b>MainActivity.cs</b> file. It should look something similar to this.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/AndroidInitialization/MainActivitySetupBefore.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/AndroidInitialization/MainActivitySetupBefore.png">
</a>

And that's it. isn't that cool? But yeah, giving more context, we don't actually have to do anything because the setup is done in the PCL, unless you wanted to register platform-specific services then yeah in that case you would have to do more, but since we are just focusing on getting it to run we are gonna leave that part for now.

### Setting up Prism in iOS

This one is very simimlar to what we did in Android as to we have to literally do nothing to make it work.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/iOSInit/AppDelegateBefore.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/iOSInit/AppDelegateBefore.png">
</a>

### Testing to make sure things work
<h5>This section is optional.</h5>

So to finish things off, we are gonna do navigation between two pages. Create two folder <b> Views </b> and <b> ViewModels </b> and the files shown below.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/1.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/1.png">
</a>

So open the file <b>Section1Page.xaml</b> you just created and add a button to the layout.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/2.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/2.png">
</a>

So what we are gonna do now is add the <b>prism</b> directive and set the <b>ViewModelLocator</b> attribute so Prism can do its work of finding the ViewModel for our page and set it.
<b>Line: 5-6</b>

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/3.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/3.png">
</a>

Now let's do the same with our <b>Section2Page.xaml</b> file.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/4.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/4.png">
</a>

Now, we are gonna set up our viewmodels, open the file <b>Section1PageViewModel.cs</b> we created a few minutes ago.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/6.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/6.png">
</a>

Basically what we are doing here is inheriting from [BindableBase](https://stackoverflow.com/a/28848375/2958420) which is a class that makes it easier for us to make bindable property. We also implemented the [INavigationAware](https://prismlibrary.readthedocs.io/en/latest/Xamarin-Forms/3-Navigation-Service/#inavigationaware) which has a few cool methods that gets called depending the lifecycle of the navigation being done.

We are gonna do the same to the <b>Section2PageViewModel.cs</b>

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/7.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/7.png">
</a>

So now before doing any binding, let's install this cool library called [PropertyChanged.Fody](https://www.nuget.org/packages/PropertyChanged.Fody/) that lets you create bindable properties without having to write much code.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/InstallingFodyAfterViewModelBase.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/InstallingFodyAfterViewModelBase.png">
</a>

So now let's go back to our <b>Section1PageViewModel.cs</b> file and add a <b>Command</b> property.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/10.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/10.png">
</a>

So basically, thanks to [PropertyChanged.Fody](https://www.nuget.org/packages/PropertyChanged.Fody/) we can create a bindable property just like that. Also note I added a dependency to the [INavigationService](https://prismlibrary.readthedocs.io/en/latest/Xamarin-Forms/3-Navigation-Service/) interface Prism provides, be aware about the fact that whenever you put a dependency of this interface on a constructor make sure you call the parameter name <b>navigationService</b> otherwise it won't work.

In the <b>line 29</b> we are calling this method called <b>NavigateAsync</b> and basically what you pass there is the screen you wanna navigate to.

Now let's do the same to our <b>Section2PageViewModel.cs</b> but in this case we need to navigate back instead of navigating to a new page.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/11.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/11.png">
</a>

Notice how we called <b>GoBackAsync()</b> in the line 28 instead of <b>NavigateAsync</b> and that's because we want to go back instead of instantiating a new screen.

So now let's do the real binding! we created the property we are gonna bind to but now we need to bind to it from the view. Open <b>Section1Page.xaml</b>

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/12-1.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/12-1.png">
</a>

In the <b>line 13</b> we are doing binding to the <b>Command</b> property we created in the ViewModel for this view to handle clicks. Let's do the same to <b>Section2Page.xaml</b>

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/12.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/12.png">
</a>

And now to finish all these, we need to register these screens we created so we can navigate to them.

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/13.png"><img  class="img--small-2x" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/RestructuringSolution/13.png">
</a>

Also note in the <b>line 17</b> we changed the first screen the app shows up when the app start running.

So yeah, that's all for today amigos. Peace out!

<a href="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/Ran/NavigationSampleRunning.gif"><img  class="img--small" src="{{ site.github.url | replace: 'http://', '//' }}/assets/img/2017-09-01-assets/Ran/NavigationSampleRunning.gif">
</a>

You can download this sample from my GitHub repository. [https://github.com/DevWizza/Setting-Up-Prism](https://github.com/DevWizza/Setting-Up-Prism). 
<br>
<br>
And don't forget to follow [Brian Lagunas](https://twitter.com/brianlagunas) on Twitter as a way of saying thanks for this awesome framework and for just making our life simpler.