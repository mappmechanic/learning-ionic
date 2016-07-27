angular.module('paypal',[])

.run([function(){

}])

.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('tab.paypal', {
	  url: '/examples/paypal',
	  views: {
		'tab-examples': {
		  templateUrl: 'js/examples/paypal/paypalTemplate.html',
		  controller: 'PaypalCtrl'
		}
	  }
  });
}])
