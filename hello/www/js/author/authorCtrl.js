angular.module('author')

.controller('AuthorCtrl',['$scope',function($scope) {
	$scope.authorInfo = {
		name: 'Rahat Khanna',
		alias: 'mappmechanic',
		bio: ' Kickass Front End Consultant building Awe Inspiring Responsive UI for Multiple Form Factors ',
		twitter: '@mappmechanic',
		linkedIn: 'https://linkedin.com/in/rahatkh'
	}
}]);
