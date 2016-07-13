angular.module('survey')

.directive('question',[function(){
	return {
		scope:{
			type:'@',
			options:'=',
			response:'='
		},
		link:function($scope,$element,$attrs){},
		restrict:'E',
		templateUrl:'js/examples/survey/questionTemplate.html',
		controller:questionCtrl
	}
}]);

function questionCtrl($scope){
	$scope.response = {
		value:'',
		timeTaken:0
	}
}

questionCtrl.$inject = ['$scope'];
