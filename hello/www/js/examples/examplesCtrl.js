angular.module('examples')

.controller('ExamplesCtrl',['$scope',function($scope) {
	$scope.examples = [
		{
			name:'Survey Example',
			descr:'It contains an example of Multi Step Forms with validation.',
			icon:'ion-ios-paper',
			link:'tab.survey'
		},
		{
			name:'Map Example',
			descr:'It contains an example of Google Maps showing your location.',
			icon:'ion-location',
			link:'tab.map'
		},
		{
			name:'Accelerometer Example',
			descr:'It contains an example of detecting Accelerometer changes.',
			icon:'ion-ios-speedometer',
			link:'tab.accelerometer'
		}
	]
}]);
