angular.module('examples')

.controller('ExamplesCtrl',['$scope',function($scope) {
	$scope.examples = [
		{
			name:'Example 1',
			descr:'Description about the first example, what would be demoed in this.',
			icon:'ion-beaker'
		}
	]
}]);
