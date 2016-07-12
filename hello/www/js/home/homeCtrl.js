angular.module('home',[])

.controller('HomeCtrl',['$scope',function($scope) {
	$scope.welcomeTitle = 'Welcome to the LearningIonic demos app';
	$scope.welcomeMessage = 'We will be creating small demos on variety of topics and then integrate them into this app.';
}]);
