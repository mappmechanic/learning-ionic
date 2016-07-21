angular.module('accelerometer')

.controller('AccelerometerCtrl',['$scope','$ionicPlatform','$cordovaDeviceMotion','$cordovaGeolocation','$cordovaFile','$cordovaEmailComposer','$base64',
	function($scope,$ionicPlatform, $cordovaDeviceMotion, $cordovaGeolocation, $cordovaFile,$cordovaEmailComposer,$base64) {
		$scope.dataPoints = [];
		$scope.frequency = 100;
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
				$scope.dataPoints.push(temp);
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


		$scope.sendEmail = function(value){
			$ionicPlatform.ready(function(){
				var finalCSV = ConvertToCSV($scope.dataPoints);
				console.log(finalCSV)
				$cordovaFile.writeFile(cordova.file.externalDataDirectory, "bumps"+Math.floor(Date.now() / 1000)+".csv", finalCSV, true)
			      .then(function (success) {
					alert('Write File Success');
			      }, function (error) {
			        alert('Write File error : '+JSON.stringify(error));
			      });;
			});
		}

		function ConvertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    }
}]);
