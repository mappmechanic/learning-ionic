angular.module('paypal')

.factory('PaypalService',['$ionicPlatform',function($ionicPlatform){
	var serviceObj = {
		initPaymentUI: function() {
	    var clientIDs = {
	      "PayPalEnvironmentProduction": "YOUR_PRODUCTION_CLIENT_ID",
	      "PayPalEnvironmentSandbox": "AYnm7ubmkTjfla26ud0cHAdW-FdVdT4797tm1Qu23MevCbuch9zfiXJiVvosqASbPGKZ-uZxlAJCYj-A"
	    };
		$ionicPlatform.ready(function(){
	    	PayPalMobile.init(clientIDs, serviceObj.onPayPalMobileInit);
		});
	  },
	  onSuccesfulPayment: function(payment) {
	    console.log("payment success: " + JSON.stringify(payment, null, 4));
	  },
	  onAuthorizationCallback: function(authorization) {
	    console.log("authorization: " + JSON.stringify(authorization, null, 4));
	  },
	  createPayment: function(paymentObj) {
	    // for simplicity use predefined amount
	    var paymentDetails = new PayPalPaymentDetails(paymentObj.subtotal, paymentObj.shipping, paymentObj.tax);
	    var payment = new PayPalPayment(paymentObj.total, paymentObj.currency, paymentObj.productName, paymentObj.description,paymentDetails);
	    return payment;
	  },
	  configuration: function() {
	    // for more options see `paypal-mobile-js-helper.js`
	    var config = new PayPalConfiguration({
	      merchantName: "My test shop",
	      merchantPrivacyPolicyURL: "https://mytestshop.com/policy",
	      merchantUserAgreementURL: "https://mytestshop.com/agreement"
	    });
	    return config;
	  },
	  initiatePayment: function(paymentObj) {
	      PayPalMobile.renderSinglePaymentUI(serviceObj.createPayment(paymentObj), serviceObj.onSuccesfulPayment,
	        serviceObj.onUserCanceled);
	  },
	  onPayPalMobileInit: function() {
	    // must be called
	    // use PayPalEnvironmentNoNetwork mode to get look and feel of the flow
	    PayPalMobile.prepareToRender("PayPalEnvironmentNoNetwork", serviceObj.configuration(),
	      serviceObj.onPrepareRender);
	  },
	  onUserCanceled: function(result) {
	    console.log(result);
	  }
  }

  return serviceObj;
}]);
