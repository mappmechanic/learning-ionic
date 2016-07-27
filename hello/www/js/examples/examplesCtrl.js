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
		},
		{
			name:'Gestures Example',
			descr:'It contains an example of using gestures and touch events.',
			icon:'ion-android-hand',
			link:'tab.gestures'
		},
		{
			name:'Expenses(PouchDB) Example',
			descr:'It contains an example of noting down expenses using PouchDB.',
			icon:'ion-social-usd',
			link:'tab.expenses'
		},
		{
			name:'Paypal Integration',
			descr:'It contains an example of integrating with paypal to process a payment.',
			icon:'ion-bag',
			link:'tab.paypal'
		}
	]
}]);
