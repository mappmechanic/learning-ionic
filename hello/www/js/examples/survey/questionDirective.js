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
