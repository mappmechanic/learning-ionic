angular.module('accelerometer')

.controller('AccelerometerCtrl',['$scope','$ionicPlatform','$cordovaDeviceMotion','$cordovaGeolocation','$cordovaFile',
	function($scope,$ionicPlatform, $cordovaDeviceMotion, $cordovaGeolocation, $cordovaFile) {
		$scope.dataPoints = [];
		$scope.frequency = 200;
		var accelerationWatch;
		var geoLocationWatch;
		$scope.currentLocation = {lat: 0, long: 0};

		$scope.init = function(){
			$scope.startAccelerationWatch($scope.frequency);
		}

		$scope.startAccelerationWatch = function(newFrequency){
			$ionicPlatform.ready(function(){
				accelerationWatch = $cordovaDeviceMotion.watchAcceleration({
					frequency:newFrequency
				});

				geoLocationWatch = $cordovaGeolocation.watchPosition({
				    timeout : 3000,
				    enableHighAccuracy: false
				});
			});

			accelerationWatch.then(null,function(error){
				alert('An error occurred');
				alert(JSON.stringify(error));
			},function(result){
				var temp = {
					lat: $scope.currentLocation.lat,
					long: $scope.currentLocation.long,
					x: result.x,
					y: result.y,
					z: result.z,
					timestamp: result.timestamp
				}
				//$scope.write(temp);
				$scope.dataPoints.unshift(temp);
			});

			geoLocationWatch.then(null,function(error) {
				alert('An error occurred');
				alert(JSON.stringify(error));
		      },
		      function(position) {
		        var lat  = position.coords.latitude;
		        var long = position.coords.longitude;
				$scope.currentLocation.lat = lat;
				$scope.currentLocation.long = long;
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
			if(geoLocationWatch){
				geoLocationWatch.clearWatch();
			}
		}


		$scope.write = function(value){

			$cordovaFile.writeFile(cordova.file.dataDirectory, "vikramsanthalia.txt", value, true)
		      .then(function (success) {
		      }, function (error) {
		        console.log(error);
		      });
		}
}]);
