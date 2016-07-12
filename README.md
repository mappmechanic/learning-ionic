# Learning Ionic
Author: Rahat Khanna
Twitter: http://twitter.com/mappmechanic    
LinkedIn: http://linkedin.com/in/rahatkh    

My Book on Ionic - https://www.amazon.com/Getting-Started-Ionic-Rahat-Khanna/dp/1784390577

## Introduction:
A Repository to help you learn Ionic in a very easy and Practical way with lots of examples.

## Table of Contents
1. [Setting Up Ionic Environment](https://github.com/mappmechanic/learning-ionic#setting-up-ionic-environment)
2. [Developing HelloWorld App](https://github.com/mappmechanic/learning-ionic#developing-helloworld-app)
3. [Tabs & States in Ionic App]

## Code Samples with Steps :

### Setting Up Ionic Environment

We need to install all the dependencies and then use the Ionic CLI to initiate a new project.

Requirements for Setup:
* Install NodeJS & GIT
* Check if npm path is working correctly by the following command
```
npm -v
```
* Install Ionic CLI and Cordova CLI with npm using the following command
```
npm install -g ionic cordova
```
* Check if Ionic has been installed correctly using following command
```
ionic -v
```

### Developing HelloWorld App

#### *Step 1:*
Execute the ionic create command on your CommandPrompt(Windows) & Terminal(MAC OS)

`ionic start -i com.ionic.helloworld ./hello blank`

#### *Step 2:*
Now, you have to go inside the *hello* folder using following command.

`cd hello`

The folder structure of our Ionic app started with *blank* template is as given below:

<img src="https://raw.githubusercontent.com/mappmechanic/learning-ionic/master/readme-imgs/folder-structure.png" data-canonical-src="https://raw.githubusercontent.com/mappmechanic/learning-ionic/master/readme-imgs/folder-structure.png" width="184" height="330" />

#### *Step 3:*
From the command prompt or terminal, please run the following command:

`npm install`

#### *Step 4:*
From the command prompt or terminal, please run the following command:

`npm install`

#### *Step 5:*
We will use the ionic serve command to run a local web-server to see the output of our app

`ionic serve`

Now we will be able to see the HelloWorld App example using a browser. We can use Chrome Devtools to open it in any device size.

<img src="https://raw.githubusercontent.com/mappmechanic/learning-ionic/master/readme-imgs/helloworld.png" data-canonical-src="https://raw.githubusercontent.com/mappmechanic/learning-ionic/master/readme-imgs/helloworld.png" />

### Tabs & States in Ionic Apps

#### *Step 1:*
First we will change the name of our app to *learningIonic*. We need to make changes in 2 files for this.

1. In index.html, change the value assigned to *ng-app* directive:
`...<body ng-app="learningIonic">...`

2. In app.js, change the value passed to create the root module:
`...angular.module('learningIonic',['ionic'])...`

#### *Step 2:*
Now, we will be adding states for our application. The states represent different routes and sub-routes which any user can access in your application. In our app, we will have a *home* which will be the landing state and then one view for list of *examples* and the third one for the *author*.

We have to create a new *.config([function(){...}])* block in our app.js to define app level states. Please copy the below given code and paste it into your *app.js* file.

```javascript
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  // Each tab has its own nav history stack:
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'js/home/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('tab.examples', {
      url: '/examples',
      views: {
        'tab-examples': {
          templateUrl: 'js/examples/tab-examples.html',
          controller: 'ExamplesCtrl'
        }
      }
    })
  .state('tab.author', {
    url: '/author',
    views: {
      'tab-author': {
        templateUrl: 'js/author/tab-author.html',
        controller: 'AuthorCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');
});

```

#### *Step 3:*
For each view/feature, we should create a new folder that will hold its services/factories, controllers, module definitions and any directives it would use.

Firstly, we will create a new folder *home* for home view and then create two files in it *homeCtrl.js* and *tab-home.html*.

Please paste the following code and put in *homeCtrl.js* file:

```javascript
angular.module('home',[])

.controller('HomeCtrl',['$scope',function($scope) {
	$scope.welcomeTitle = 'Welcome to the LearningIonic demos app';
	$scope.welcomeMessage = 'We will be creating small demos on variety of topics and then integrate them into this app.';
}]);
```

Please paste the following code and put in *tab-home.html* file:

```
<ion-view view-title="Home">   
  <ion-content class="padding">   
	<h3>{{welcomeTitle}}</h3>   
	<p>   
    	{{ welcomeMessage }}   
	</p>   
	<p>   
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt magna ac molestie aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi at viverra dui. Sed malesuada ex ac ex convallis, vitae ornare nisl suscipit. Proin non laoreet elit. Sed mollis sem a urna tristique tempus. In sed quam id nisl tristique tempor. Phasellus id enim quis leo rutrum pulvinar in ut ipsum. In aliquet, velit a mattis aliquet, risus felis ultricies sapien, nec iaculis enim augue quis lorem. Aliquam sollicitudin, purus eget placerat mollis, orci dolor finibus libero, vestibulum aliquam ex sapien id enim. Nullam ut ex ut leo congue dignissim.
	</p>    
  </ion-content>   
</ion-view>   

```

In index.html, add the following dependencies after *app.js* script injection.

```
<script src="js/home/HomeCtrl.js"></script>
```

Also,replace the contents of the body tag with the following code:
```
<ion-nav-bar class="bar-positive">   
  <ion-nav-back-button>   
  </ion-nav-back-button>   
</ion-nav-bar>   
<ion-nav-view>   
</ion-nav-view>   
```
Also, one last thing that we need to inject *home* module as a dependency to our root module in *app.js* file:
`angular.module('learningIonic', ['ionic','home']`

Run the command *ionic serve* to see the output of only home.

#### *Step 4:*
Now, we will create a new folder for *examples* and create 3 files in it - *examplesCtrl.js*, *examplesModule.js* and *tab-examples.html*.

Please put the following code in *examplesModule.js*:

```javascript
angular.module('examples',[])
.run([function(){}])
.config([function(){}]);
```

Please put the following code in *examplesCtrl.js*:

```javascript
angular.module('examples')

.controller('ExamplesCtrl',['$scope',function($scope) {
	$scope.examples = [
		{
			name:'Example 1',
			descr:'Description about the first example, what would be demoed in this.',
			icon:'ion-beaker'
		}
	]
}]);
```

Please put the following code in *tab-examples.html*:

```
<ion-view view-title="Examples">   
  <ion-content class="">   
	<ion-list>   
		<ion-item class="item-icon-left item-icon-right" ng-repeat="example in examples track by index">    
			 <i class="icon {{example.icon}}"></i>   
			{{example.name}}   
			<i class="icon ion-chevron-right"></i>   
		</ion-item>   
	</ion-list>    
  </ion-content>   
</ion-view>   
```

In index.html, add the following dependencies after *homeCtrl.js* script injection.

```
<script src="js/examples/examplesModule.js"></script>
<script src="js/examples/examplesCtrl.js"></script>
```

Also, one last thing that we need to inject *home* module as a dependency to our root module in *app.js* file:
`angular.module('learningIonic', ['ionic','home','examples']`

Run the command *ionic serve* to see the output of examples view by clicking on examples tab on bottom tab bar.

#### *Step 5:*
Now, we will create a new folder for *author* and create 3 files in it - *authorCtrl.js*, *authorModule.js* and *tab-author.html*.

Please put the following code in *authorModule.js*:

```javascript
angular.module('author',[])
.run([function(){}])
.config([function(){}]);
```

Please put the following code in *authorCtrl.js*:

```javascript
angular.module('author')

.controller('AuthorCtrl',['$scope',function($scope) {
	$scope.authorInfo = {
		name: 'Rahat Khanna',
		alias: 'mappmechanic',
		bio: ' Kickass Front End Consultant building Awe Inspiring Responsive UI for Multiple Form Factors ',
		twitter: '@mappmechanic',
		linkedIn: 'https://linkedin.com/in/rahatkh'
	}
}]);
```

Please put the following code in *tab-author.html*:

```
<ion-view view-title="Author">   
  <ion-content class="card">   
	<ion-list>   
		<ion-item class="item-divider">	Name </ion-item>   
		<ion-item> {{ authorInfo.name }} </ion-item>   
		<ion-item class="item-divider"> Alias </ion-item>   
		<ion-item> {{ authorInfo.alias }} </ion-item>   
		<ion-item class="item-divider"> Bio </ion-item>   
		<ion-item class="item-text-wrap"> {{ authorInfo.bio }} </ion-item>   
		<ion-item class="item-divider"> Twitter Handle </ion-item>  
		<ion-item> {{ authorInfo.twitter }} </ion-item>   
		<ion-item class="item-divider"> LinkedIn Profile </ion-item>   
		<ion-item> {{ authorInfo.linkedIn }} </ion-item>   
	</ion-list>   
  </ion-content>    
</ion-view>   
```

In index.html, add the following dependencies after *homeCtrl.js* script injection.

```
<script src="js/author/authorModule.js"></script>
<script src="js/author/authorCtrl.js"></script>
```

Also, one last thing that we need to inject *home* module as a dependency to our root module in *app.js* file:
`angular.module('learningIonic', ['ionic','home','examples','author']`

Run the command *ionic serve* to see the output of author view by clicking on author tab on bottom tab bar.
