angular.module('expenses',[])

.run([function(){

}])

.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('tab.expenses', {
	  url: '/examples/expenses',
	  views: {
		'tab-examples': {
		  templateUrl: 'js/examples/expenses/expensesTemplate.html',
		  controller: 'ExpensesCtrl'
		}
	  }
  });
}])
