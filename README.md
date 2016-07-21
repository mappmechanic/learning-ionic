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
3. [Tabs & States in Ionic App](https://github.com/mappmechanic/learning-ionic#tabs--states-in-ionic-apps)
4. [Multi Step Form & Validations](https://github.com/mappmechanic/learning-ionic#multi-step-form--validations)
5. [Cordova Maps Geolocation Plugin](https://github.com/mappmechanic/learning-ionic#google-maps-geolocation-plugin)
6. [Cordova Device Motion Plugin](https://github.com/mappmechanic/learning-ionic#cordova-device-motion-plugin)

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

#### *Step 3*:
Please add the following code in folder *www/templates/tabs.html* file to put tabs in our app:

```
<ion-tabs class="tabs-icon-top tabs-color-active-positive">    

  <!-- Home Tab -->    
  <ion-tab title="Home" icon-off="ion-ios-home-outline" icon-on="ion-ios-home" href="#/tab/home">    
    <ion-nav-view name="tab-home"></ion-nav-view>   
  </ion-tab>    

  <!-- Examples Tab -->    
  <ion-tab title="Examples" icon-off="ion-ios-list-outline" icon-on="ion-ios-list" href="#/tab/examples">   
    <ion-nav-view name="tab-examples"></ion-nav-view>    
  </ion-tab>    

  <!-- Author Tab -->    
  <ion-tab title="Author" icon-off="ion-ios-person-outline" icon-on="ion-ios-person" href="#/tab/author">   
    <ion-nav-view name="tab-author"></ion-nav-view>    
  </ion-tab>    
</ion-tabs>    
```

#### *Step 4:*
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

#### *Step 5:*
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

#### *Step 6:*
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

### Multi Step Form & Validations

In this example we will create a small module to render multi step dynamic form which will be driven using a JSON object. We will mention the type of question/input and then have some properties defined to render it. We will record the responses in the same object and extract them in the last. We will implement 2 types of validation - CSS based and FormController/NgModelController based.

#### *Step 1:*
We have to make new folder named *survey* in our examples folder. We will make nested feature folders now.

Now we have to create a new file *surveyModule.js* inside survey folder to declare a new module named *survey* with the following code:

```javascript
	angular.module('survey',[])

	.run([function(){

	}])

	.config([function(){

	}])
```

Also, create 2 new blank files *surveyCtrl.js* and *surveyTemplate.html*.

Now, firstly we have to create a new route for our *survey* example.

In the *config* block of the module definition present in file *examplesModule.js*, please replace the config block with the following code:

```javascript
.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('tab.survey', {
      url: '/examples/survey',
      views: {
        'tab-examples': {
          templateUrl: 'js/examples/survey/surveyTemplate.html',
          controller: 'SurveyCtrl'
        }
      }
    })
}])
```

Also, in *examplesCtrl.js*, modify the first element of examples array to match the following code:

```javascript
$scope.examples = [
	{
		name:'Survey Example',
		descr:'It contains an example of Multi Step Forms with validation.',
		icon:'ion-ios-paper',
		link:'tab.survey'
	}
]
```

Now, we have to inject all dependencies in index.html after all other script tags injections.

```
<!-- Survey Example Module -->    
<script src="js/examples/survey/surveyModule.js"></script>   
<script src="js/examples/survey/surveyCtrl.js"></script>    
<script src="js/examples/survey/questionDirective.js"></script>    
```

#### *Step 2:*
Now, we will be adding code in *surveyTemplate.html* and *surveyCtrl.js* to implement the multi step form rendering.

Now, we should add the following code to *surveyTemplate.html*:

```
<ion-view view-title="Multi Step Survey">    
  <ion-content class="">    

	<div ng-if="survey.steps.length > 1 && currentActiveStep > -1" class="list card">     
		<div class="button-bar bar-dark">    
  		  <a ng-repeat="step in survey.steps"    
			ng-click="goToStep($index)"      
			ng-class="{'button':true,'active':step.active}">    
			  Step {{$index+1}}   
		  </a>   
  		</div>    
	</div>   
	<div ng-if="step.active" ng-repeat="step in survey.steps" class="list card">    
		<div class="item item-divider">    
			{{step.title}}   
		</div>   
		<form name="step{{$index+1}}">   
			<ion-item ng-repeat="question in step.questions track by $index">   
				<question   
					type="{{question.type}}"    
					options="question.options"   
					response="question.response"   
					no="{{index+1}}">    
				</question>    
			</ion-item>   
		</form>   
	</div>   
	<div ng-if="currentActiveStep === -1" class="list card">   
		<div ng-repeat="step in responses" class="list">   
			<div class="item item-divider">{{step.step}}</div>   
			<div ng-repeat="response in step.responses" class="item">   
				{{response.question}} - {{response.response}}   
			</div>   
		</div>    
	</div>     
	<div ng-if="currentActiveStep > -1" class="padding">
		<div ng-if="!lastStepActive" class="button button-block button-balanced" ng-click="continue()"> Continue </div>    
 		<div ng-if="lastStepActive" class="button button-block button-assertive" ng-click="submit()"> Submit </div>    
	</div>    
  </ion-content>     
</ion-view>   
```

Now, we should add the following code to *surveyCtrl.js*:

```javascript
angular.module('survey')

.controller('SurveyCtrl',['$scope','$ionicScrollDelegate',function($scope,$ionicScrollDelegate) {
	$scope.survey = {
		steps:[
				{
				title:'Trainer Feedback',
				active:true,
				questions:[
							{
								type:"text-input",
								options:{
									label:"Trainer Name",
									placeholder:"Enter Name of Trainer",
									style:"item-stacked-label"
								}
							},
							{
								type:"singlechoice",
								options:{
									question:"What is the level of this Tutorial?",
									choices:["Good","Very Good","Excellent","Out of this world!"]
								}
							},
							{
								type:"range",
								options:{
									question:"Give Rating out of 1 to 10 for Trainer",
									max:10,
									min:1
								},
								response:{
									value:10
								}
							}
					]
				},
				{
				title:'Content Feedback',
				active:false,
				questions:[
							{
								type:"text-input",
								options:{
									label:"Topic Name",
									placeholder:"Enter the Topic for the Session",
									style:"item-stacked-label"
								}
							},
							{
								type:"multichoice",
								options:{
									question:"What all you covered?",
									choices:[
										{selected:false,display:"Theory"},
										{selected:false,display:"Code Demos"},
										{selected:false,display:"HandsOn Coding"}
									],
									style:"item-stacked-label"
								}
							},
							{
								type:"singlechoice",
								options:{
									question:"How was the content organized?",
									choices:["Covered Everything","Good Coverage","Ok Content","Very Bad Content"]
								}
							}
					]
				}
			]
		}
	$scope.lastStepActive = false;
	$scope.currentActiveStep = 0;
	$scope.responses = [];
	$scope.goToStep = function(index){
		for(var i=0;i<$scope.survey.steps.length;i++)
		{
			$scope.survey.steps[i].active = i === index ? true : false;
		}
		$scope.lastStepActive = (index === $scope.survey.steps.length -1) ? true : false;
		$scope.currentActiveStep = index;
	}

	$scope.continue = function(){
		$scope.goToStep($scope.currentActiveStep+1);
		$ionicScrollDelegate.scrollTop();
	}

	$scope.submit = function(){
		$scope.goToStep(-1);
		$scope.responses = $scope.survey.steps.map(function(step,stepIndex){
			var questionResponses = step.questions.map(function(question,quesIndex){
				var respObj = {
					question: 'Question'+(quesIndex+1),
					response:question.response.value
				}
				return respObj;
			});
			return {
				step:'Step'+(stepIndex+1),
				responses:questionResponses
			}
		});
		$ionicScrollDelegate.scrollTop();gm
	}
}]);
```

#### *Step 3:*
Now, we have to create a new directive for rendering all question types. Please create one file *questionDirective.js* and put the following code there:

```javascript
angular.module('survey')

.directive('question',[function(){
	return {
		scope:{
			type:'@',
			options:'=',
			response:'=',
			no:'@'
		},
		link:function($scope,$element,$attrs){
		},
		restrict:'E',
		templateUrl:'js/examples/survey/questionTemplate.html',
		controller:questionCtrl
	}
}]);

function questionCtrl($scope){
	if(!$scope.response){
		$scope.response = {
			value:'',
			timeTaken:0
		}
	}

	$scope.updateChoice = function(index){
		var selectedChoices = $scope.options.choices.filter(function(choice){
			return choice.selected === true;
		});
		selectedChoices = selectedChoices.map(function(choice){ return choice.display });
		$scope.response.value = selectedChoices;
	}
}

questionCtrl.$inject = ['$scope'];
```

Now, we will create the template for it as a new file *questionTemplate.html*:

```
<div class="question">    
	<div ng-switch="type">    
		<div ng-switch-when="text-input">     
			<div class="list">    
			  <label class="item item-input {{options.style}}">    
				  <ng-form name="QuestionForm">    
				    <span class="input-label">     
						{{options.label}}    
					</span>    
				    <input type="text" name="InputElement" placeholder="{{options.placeholder}}" required ng-model="response.value">     
					<span class="error-message"
					ng-show="QuestionForm.InputElement.$touched && QuestionForm.InputElement.$error.required">     
						*It is a required field.    
					</span>     
				  </ng-form>    
			  </label>     
			</div>     
		</div>    
		<div ng-switch-when="singlechoice">     
			<ion-list>    
				<div class="item item-divider">    
					{{ options.question }}    
				</div>     
				<ion-radio   
					ng-repeat="choice in options.choices track by $index"    
					ng-model="response.value"    
					ng-value="choice">    
					{{choice}}    
				</ion-radio>   
			</ion-list>    
		</div>   
		<div ng-switch-when="multichoice">    
			<ion-list>    
				<div class="item item-divider">     
					{{ options.question }}    
				</div>    
				<ion-checkbox    
					ng-repeat="choice in options.choices track by $index"    
					ng-model="choice.selected"    
					ng-change="updateChoice($index)">    
					{{choice.display}}   
				</ion-checkbox>    
			</ion-list>   
		</div>   
		<div ng-switch-when="range">    
			<div class="item item-divider">   
				{{options.question}}   
			</div>   
			<div class="item range range-balanced">    
	            <i class="icon ion-ios-bolt-outline"></i>    
	            	<input type="range" name="volume" min="{{options.min}}" max="{{options.max}}" ng-model="response.value">    
	            <i class="icon ion-ios-bolt"></i>    
				{{response.value}}    
        	</div>    
		</div>    
	</div>   
</div>    
```

#### *Step 4:*

Now we will implement code for validations and error messages. We can notify the user about the validation errors in two ways:

1. Using CSS, angular automatically adds css classes to invalid forms. Add the following css in *css/style.css* file.

```
input.ng-touched.ng-invalid{    
	border:1px solid red;    
	background:#FBEFF2;   
}    
```

2. We can also use FormController & NgModelController to check special flags on the controller instance for any input element.

Add the following directive to *surveyModule.js* file:

```javascript
.directive("errorMessage", function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            name: '@',
            error: '@'
        },
        template: '<div><p ng-show="$parent.{{name}}.$dirty">Dirty</p><p ng-show="$parent.{{name}}.$error.{{error}}"><span ng-transclude></span></p></div>'
    };
});
```

### Device Features - ngCordova & Compose Email Basic

In Ionic, we can use native device plugins of Cordova using a special library called ngCordova which encapsulates all cordova calls in Angular services which can be called easily in Ionic.

#### *Step 1:*
We have to add *ngCordova* library to our Ionic project.

Either download the ngCordova library using github or install it using bower with following command from inside *hello* folder:

`bower install ngCordova --save`

#### *Step 2:*
Now, we have to include the reference of ngCordova file in our *index.html* just before *cordova.js* script injection.

`<script src="lib/ngCordova/dist/ng-cordova.js"></script>`

Also, we have to inject *'ngCordova'* dependency into the DI list for our root module in *app.js* file:

`angular.module('learningIonic', ['ionic','home','examples','author','ngCordova'])`

#### *Step 3:*
We will be adding the new cordova plugin for sending email and then use its ngCordova method to send the survey response JSON as email.

In order to add a cordova plugin, type following command in command prompt:

`cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git`

We have to now, add the functionality in *surveyCtrl.js* file:

```javascript
$scope.sendEmail = function(){
	$cordovaEmailComposer.isAvailable().then(function() {
		var email = {
			 to: 'yehtechnologies@gmail.com',
			 cc: 'rahat.khanna@yahoo.co.in',
			 bcc: ['rahat.khanna@flipkart.com'],
			 attachments: [],
			 subject: 'Survey Result',
			 body: document.getElementById('surveyResponse').innerHTML,
			 isHtml: true
		   };

		  $cordovaEmailComposer.open(email).then(null, function () {
			// user cancelled email
		  });
	}, function () {
	   // not available
	   alert('Email Composer is not available in your device.');
	});
}
```

Also, add the dependency *$cordovaEmailComposer* to the SurveyCtrl definition.

We will also place a Send Email button on Survey Response view, to send the response as email:

```
<div id="surveyResponse" ng-if="currentActiveStep === -1" class="list card">    
	<div ng-repeat="step in responses" class="list">    
		<div class="item item-divider">{{step.step}}</div>     
		<div ng-repeat="response in step.responses" class="item">    
			{{response.question}} - {{response.response}}     
		</div>    
	</div>   
	<div class="item">    
		<div class="button button-block button-assertive"    
			ng-click="sendEmail()"> Send as Email    
		</div>     
	</div>    
</div>    
```

### Google Maps Geolocation Plugin

We will now develop an example to use Google Maps & Cordova Geolocation plugin to draw a map and mark your current position on the map if GPS is enabled.

#### *Step 1:*
We have to add plugin using the following command in the command prompt:

`cordova plugin add cordova-plugin-geolocation`

#### *Step 2:*

We have to make new folder named *map* in our examples folder. We will make nested feature folders now.

Now we have to create a new file *mapModule.js* inside survey folder to declare a new module named *map* with the following code:

```javascript
	angular.module('map',[])

	.run([function(){

	}])

	.config([function(){

	}])
```

Also, create 2 new blank files *mapCtrl.js* and *mapTemplate.html*.

Now, firstly we have to create a new route for our *map* example.

In the *config* block of the module definition present in file *examplesModule.js*, please replace the config block with the following code:

```javascript
.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('tab.map', {
      url: '/examples/map',
      views: {
        'tab-examples': {
          templateUrl: 'js/examples/map/mapTemplate.html',
          controller: 'MapCtrl'
        }
      }
    })
}])
```

Also, in *examplesCtrl.js*, modify the first element of examples array to match the following code:

```javascript
$scope.examples = [
	{
		name:'Map Example',
		descr:'It contains an example of Google Maps showing your location.',
		icon:'ion-location',
		link:'tab.map'
	}
]
```

Now, we have to inject all dependencies in index.html after all other script tags injections.

```
<!-- Map Example Module -->    
<script src="js/examples/map/mapModule.js"></script>   
<script src="js/examples/map/mapCtrl.js"></script>
```

In App.js, also we have to inject *map* as a dependency:

`angular.module('learningIonic', ['ionic','home','examples','author','ngCordova','map'])`

#### *Step 3:*
Now, we should add the following code to *mapCtrl.js*:

```javascript
angular.module('map')

.controller('MapCtrl',['$scope','$ionicPlatform','$cordovaGeolocation',function($scope,$ionicPlatform,$cordovaGeolocation) {
	var options = {timeout: 10000, enableHighAccuracy: true};

 	$ionicPlatform.ready(function(){
		$cordovaGeolocation.getCurrentPosition(options).then(function(position){

  	    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  	    var mapOptions = {
  	      center: latLng,
  	      zoom: 15,
  	      mapTypeId: google.maps.MapTypeId.ROADMAP
  	    };

  	    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var marker = new google.maps.Marker({
	      position: latLng,
	      map: $scope.map,
	    });
  	  }, function(error){
  	    console.log("Could not get location");
  	  });
	});
}]);
```

Now, we will update the following code in *mapTemplate.html*:
```
<ion-view view-title="Map Current Position">    
  <ion-content class="">   
		<div id="map">    
		</div>     
  </ion-content>    
</ion-view>     
```


### Cordova Device Motion Plugin

We will now develop an example to use Accelerometer sensor of our app with Cordova Device Motion plugin to detect changes in acceleration of our device.

#### *Step 1:*
We have to add plugin using the following command in the command prompt:

`cordova plugin add cordova-plugin-device-motion`

#### *Step 2:*

We have to make new folder named *accelerometer* in our examples folder. We will make nested feature folders now.

Now we have to create a new file *accelerometerModule.js* inside survey folder to declare a new module named *accelerometer* with the following code:

```javascript
	angular.module('accelerometer',[])

	.run([function(){

	}])

	.config([function(){

	}])
```

Also, create 2 new blank files *accelerometerCtrl.js* and *accelerometerTemplate.html*.

Now, firstly we have to create a new route for our *accelerometer* example.

In the *config* block of the module definition present in file *accelerometerModule.js*, please replace the config block with the following code:

```javascript
.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('tab.accelerometer', {
      url: '/examples/accelerometer',
      views: {
        'tab-examples': {
          templateUrl: 'js/examples/accelerometer/accelerometerTemplate.html',
          controller: 'AccelerometerCtrl'
        }
      }
    })
}])
```

Also, in *accelerometerCtrl.js*, add new element into examples array to match the following code:

```javascript
$scope.examples = [
	...
	{
		name:'Accelerometer Example',
		descr:'It contains an example of detecting Accelerometer changes.',
		icon:'ion-ios-speedometer',
		link:'tab.accelerometer'
	}
]
```

Now, we have to inject all dependencies in index.html after all other script tags injections.

```
<!-- Map Example Module -->    
<script src="js/examples/accelerometer/accelerometerModule.js"></script>   
<script src="js/examples/accelerometer/accelerometerCtrl.js"></script>
```

In App.js, also we have to inject *accelerometer* as a dependency:

`angular.module('learningIonic', ['ionic','home','examples','author','ngCordova','map','accelerometer'])`

#### *Step 3:*
Now, we should add the following code to *accelerometerCtrl.js*:

```javascript
angular.module('accelerometer')

.controller('AccelerometerCtrl',['$scope','$ionicPlatform','$cordovaDeviceMotion',
	function($scope,$ionicPlatform,$cordovaDeviceMotion) {
		$scope.dataPoints = [];
		$scope.frequency = 500;
		var accelerationWatch;

		$scope.init = function(){
			$scope.startAccelerationWatch($scope.frequency);
		}

		$scope.startAccelerationWatch = function(newFrequency){
			$ionicPlatform.ready(function(){
				accelerationWatch = $cordovaDeviceMotion.watchAcceleration({
					frequency:newFrequency
				});
			});

			accelerationWatch.then(null,function(error){
				alert('An error occurred');
				alert(JSON.stringify(error));
			},function(result){
				$scope.dataPoints.unshift(result);
			});
		}

		$scope.updateFrequency = function(){
			$scope.stopWatching();
			$scope.startAccelerationWatch($scope.frequency);
		}

		$scope.stopWatching = function(){
			if(accelerationWatch){
				accelerationWatch.clearWatch();
			}
		}

}]);
```

Now, we will update the following code in *accelerometerTemplate.html*:
```
<ion-view view-title="Accelerometer">    
  <ion-content class="">   
		<ion-list>    
			<ion-item class="item-divider">   
				Select Frequency (in milliseconds)    
			</ion-item>   
			<ion-item>   
				<input type="range" max="60000" min="1000" ng-model="frequency"> {{ frequency }}   
			</ion-item>   
			<ion-item>   
				<div class="button button-block button-assertive"    
					ng-click="updateFrequency()"> Update   
				</div>   
			</ion-item>   
			<ion-item>   
				<div class="button button-block button-primary"   
					ng-click="stopWatching()"> Stop Watching    
				</div>   
			</ion-item>   
			<ion-item ng-repeat="datapoint in dataPoints">    
				x : {{ datapoint.x }} <br>   
				y : {{ datapoint.y }} <br>   
				z : {{ datapoint.z }}    
			</ion-item>    
		</ion-list>     
  </ion-content>    
</ion-view>    
```
