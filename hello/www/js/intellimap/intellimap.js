angular.module('intellimap')

.controller('intellimapCtrl',['$scope','$ionicPlatform','$cordovaGeolocation',function($scope,$ionicPlatform,$cordovaGeolocation) {
	var options = {timeout: 10000, enableHighAccuracy: true, maxAge: 0};
    var geoLocationWatch;
	$scope.path = [];

 	$ionicPlatform.ready(function(){
        geoLocationWatch = $cordovaGeolocation.watchPosition(options);

        geoLocationWatch.then(null,function(error) {
            console.log(JSON.stringify(error));
            alert('An error occurred');
          },
          function(position) {
              var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			  $scope.path.push({lat: position.coords.latitude, lng: position.coords.longitude},);

              var mapOptions = {
                center: latLng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
              var marker = new google.maps.Marker({
                position: latLng,
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                icon: '/img/gray.png',
                draggable: true
              });

			  var flightPath = new google.maps.Polyline({
			    path: flightPlanCoordinates,
			    geodesic: true,
			    strokeColor: '#FF0000',
			    strokeOpacity: 1.0,
			    strokeWeight: 2
			  });

        });
    });


}]);
