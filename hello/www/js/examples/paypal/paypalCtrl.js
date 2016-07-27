angular.module('paypal')

.controller('PaypalCtrl',['$scope','PaypalService',
	function($scope,PaypalService) {
	PaypalService.initPaymentUI();
	$scope.paymentDone = false;

	$scope.buyNow = function(){
		var paymentObj = {
			subtotal:"50.00",
			shipping:"5.00",
			tax:"5.00",
			total:"60.00",
			currency:"USD",
			productName:"iPhone 6s 16GB",
			description:"Online Purchase"
		}
		PaypalService.initiatePayment(paymentObj);
	}
}]);
