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
