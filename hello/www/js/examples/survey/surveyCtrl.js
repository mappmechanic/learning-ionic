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
		$ionicScrollDelegate.scrollTop();
	}

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
}]);
