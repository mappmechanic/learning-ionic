angular.module('gestures',[])

.run([function(){

}])

.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('tab.gestures', {
	  url: '/examples/gestures',
	  views: {
		'tab-examples': {
		  templateUrl: 'js/examples/gestures/gesturesTemplate.html',
		  controller: 'GesturesCtrl'
		}
	  }
  });
}])
