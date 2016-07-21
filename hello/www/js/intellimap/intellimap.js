angular.module('intellimap')

.controller('intellimapCtrl',['$scope','$ionicPlatform','$cordovaGeolocation',function($scope,$ionicPlatform,$cordovaGeolocation) {
	var options = {timeout: 10000, enableHighAccuracy: true, maxAge: 0};
    var geoLocationWatch;
	$scope.path = [];
	var styleArray = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"hue":"#007fff"},{"saturation":"51"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"hue":"#009bff"},{"saturation":"0"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"saturation":"13"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]}];

 	$ionicPlatform.ready(function(){
        geoLocationWatch = $cordovaGeolocation.watchPosition(options);

        geoLocationWatch.then(null,function(error) {
            console.log(JSON.stringify(error));
            alert('An error occurred');
          },
          function(position) {
              var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			  var circle = new google.maps.LatLng(position.coords.latitude + 0.003, position.coords.longitude + 0.003);

              var mapOptions = {
                center: latLng,
                zoom: 18,
				styles: styleArray,
				disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
              var marker = new google.maps.Marker({
                position: latLng,
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                icon: '/img/marker.png',
                draggable: true
              });

			  var cityCircle = new google.maps.Circle({
	            strokeColor: '#FF0000',
	            strokeOpacity: 0.8,
	            strokeWeight: 2,
	            fillColor: '#FF0000',
	            fillOpacity: 0.35,
	            map: $scope.map,
	            center: circle,
	            radius: 10
	          });

        });
    });


}]);
