angular.module('survey')

.controller('SurveyCtrl',['$scope',function($scope) {
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
							}
					]
				}
			]
		}
	$scope.lastStepActive = false;
	$scope.goToStep = function(index){
		for(var i=0;i<$scope.survey.steps.length;i++)
		{
			$scope.survey.steps[i].active = i === index ? true : false;
		}
		$scope.lastStepActive = (index === $scope.survey.steps.length -1) ? true : false;
	}
}]);
