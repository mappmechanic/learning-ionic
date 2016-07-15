angular.module('map')

.controller('MapCtrl',['$scope','$ionicPlatform','$cordovaGeolocation',function($scope,$ionicPlatform,$cordovaGeolocation) {
	var options = {timeout: 10000, enableHighAccuracy: true};

 	$ionicPlatform.ready(function(){
		$cordovaGeolocation.getCurrentPosition(options).then(function(position){

  	    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  	    var mapOptions = {
  	      center: latLng,
  	      zoom: 15,
  	      mapTypeId: google.maps.MapTypeId.ROADMAP
  	    };

  	    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var marker = new google.maps.Marker({
	      position: latLng,
	      map: $scope.map,
	    });
  	  }, function(error){
  	    console.log("Could not get location");
  	  });
	});
}]);
