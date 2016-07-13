angular.module('examples')

.controller('ExamplesCtrl',['$scope',function($scope) {
	$scope.examples = [
		{
			name:'Survey Example',
			descr:'It contains an example of Multi Step Forms with validation.',
			icon:'ion-ios-paper',
			link:'tab.survey'
		}
	]
}]);
