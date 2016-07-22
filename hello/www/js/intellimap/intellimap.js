angular.module('intellimap')

.controller('intellimapCtrl',['$scope','$ionicPlatform','$cordovaGeolocation',function($scope,$ionicPlatform,$cordovaGeolocation) {
	var options = {timeout: 10000, enableHighAccuracy: true, maxAge: 0};
    var geoLocationWatch;
	$scope.path = [];
	var mapOptions = {
	  zoom: 18,
	  styles: styleArray,
	  disableDefaultUI: true,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var lineSymbol = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          strokeColor: '#393'
    };
	var polyOptions = {
        strokeColor: '#000000',
        strokeOpacity: 0.5,
        strokeWeight: 10,
		icons: [{
            icon: lineSymbol,
            offset: '100%'
        }]
    };
    poly = new google.maps.Polyline(polyOptions);
	animateCircle(poly);

	var circle, cityCircle;
	var styleArray = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"hue":"#007fff"},{"saturation":"51"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"hue":"#009bff"},{"saturation":"0"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"saturation":"13"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]}];

 	$ionicPlatform.ready(function(){
        geoLocationWatch = $cordovaGeolocation.watchPosition(options);

        geoLocationWatch.then(null,function(error) {
			console.log("error");
            console.log(JSON.stringify(error));
            alert('An error occurred');
          },
          function(position) {
              circle = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			  $scope.map.setCenter(circle);
			  //pushToPath(position);
			  poly.setMap($scope.map);
			  var path = poly.getPath();

			  path.push(circle);
			  poly.setPath(path);

			  /*cityCircle = new google.maps.Circle({
	            strokeColor: '#FF0000',
	            strokeOpacity: 0.8,
	            strokeWeight: 1,
	            fillColor: '#FF0000',
	            fillOpacity: 0.35,
	            map: $scope.map,
	            center: circle,
	            radius: 10
			});*/

        });
    });

	function animateCircle(line) {
		 var count = 0;
		 window.setInterval(function() {
		   count = (count + 1) % 200;

		   var icons = line.get('icons');
		   icons[0].offset = (count / 2) + '%';
		   line.set('icons', icons);
	   }, 20);
	 }

	function drawCircle(){
		var circle = new google.maps.LatLng($scope.path[$scope.path.length - 1].lat, $scope.path[$scope.path.length - 1].lng);
		var cityCircle = new google.maps.Circle({
		  strokeColor: '#FF0000',
		  strokeOpacity: 0.8,
		  strokeWeight: 1,
		  fillColor: '#FF0000',
		  fillOpacity: 0.35,
		  center: circle,
		  radius: 10
	  });
	  cityCircle.setMap($scope.map);
	}

	function drawPath(){

		var flightPath = new google.maps.Polyline({
          path: $scope.path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2,
		  map: $scope.map
        });
	}

	function pushToPath(pos){
		if($scope.path.length === 0){
			$scope.path.push({lat: pos.coords.latitude,lng: pos.coords.longitude});
		}else {
			var lastPos = $scope.path[$scope.path.length - 1];
			var latDiff = Math.abs(lastPos.lat - pos.coords.latitude);
			var lngDiff = Math.abs(lastPos.lng - pos.coords.longitude);
			if(latDiff > 0.00000001 || lngDiff > 0.00000001){
				console.log(calculateDistance(lastPos.lat, lastPos.lng, pos.coords.latitude, pos.coords.longitude) + ' mtrs');
				//drawPath();
				drawCircle();
			}
		}
	}

	function calculateDistance(lat1, lon1, lat2, lon2) {
	  var R = 6371; // km
	  var dLat = (lat2 - lat1).toRad();
	  var dLon = (lon2 - lon1).toRad();
	  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
	          Math.sin(dLon / 2) * Math.sin(dLon / 2);
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	  var d = R * c;
	  return d*1000;
	}
	Number.prototype.toRad = function() {
	  return this * Math.PI / 180;
	}
}]);
