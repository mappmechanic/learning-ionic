angular.module('gestures')

.controller('GesturesCtrl',['$scope','$ionicGesture',
	function($scope,$ionicGesture) {
		$scope.gesture = {
			used: ''
		};

		$scope.onGesture = function(gesture,event) {
			$scope.gesture.used = gesture;
			console.log(gesture);
		}

  		var element = angular.element(document.querySelector('#content'));

		$ionicGesture.on('tap', function(e){
			$scope.$apply(function() {
				console.log('Tap');
				$scope.gesture.used = 'Tap';
			});
		}, element);
}]);
