angular.module('expenses')

.controller('ExpensesCtrl',['$scope','$ionicModal',
	function($scope,$ionicModal) {
		var localDb,remoteDb;
		initCtrl();

		function initCtrl(){
			localDb = new PouchDB('myexpenses');
			remoteDb = new PouchDB('http://localhost:5984/myexpenses');
			$scope.expenseList = [];
			$scope.newExpense = {};
			$scope.canSwipe = true;
			$scope.showDelete = false;
			initializeModal();
			fetchExistingExpenses(localDb);
			// Unidirectional Sync Possibilities
				// localDb.replicate.to(remoteDb);
				// localDb.replicate.from(remoteDb);
			syncDbs();
			remoteDb.changes({live: true, since: 'now'}).on('change', function (change) {
			  // change.deleted is a property to detect if a change is for deletion of a document
			  fetchExistingExpenses(remoteDb);
			}).on('error', console.log.bind(console));
		}

		function initializeModal(){
			$ionicModal.fromTemplateUrl('js/examples/expenses/addExpenseTpl.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.modal = modal;
			});
		}

		function fetchExistingExpenses(db){
			$scope.expenseList = [];
			db.allDocs({
			    include_docs: true
			}).then(function (result) {
			    for(var i=0;i<result.rows.length;i++){
			        var obj = {
			            "_id": result.rows[i].doc.id,
			            "detail": result.rows[i].doc.detail,
			            "amount": result.rows[i].doc.amount
			        }
			        $scope.expenseList.push(obj);
			        $scope.$apply();
			    }
			})
			.catch(function (err) {
			    console.log(err);
			});
		}

		function syncDbs(){
			// Initialize Sync
			localDb.sync(remoteDb).on('complete', function () {
			  // yay, we're in sync!
			}).on('error', function (err) {
			  // boo, we hit an error!
			});
		}

		$scope.toggleDeleteIcons = function(){
			$scope.showDelete = !$scope.showDelete;
		}

		$scope.addExpenseModal = function(){
			$scope.modal.show();
		}

		$scope.$on('$destroy', function() {
		    $scope.modal.remove();
		});

		$scope.addNewExpense = function(){
			var timestamp = String(new Date().getTime());

			var newExpense = {
		        "_id": timestamp,
		        "detail": $scope.newExpense.detail,
		        "amount": $scope.newExpense.amount
			};

			localDb.put(newExpense).then(function (response) {
			    $scope.expenseList.push(newExpense);   // Add to items array
			    $scope.modal.hide();      // Close the modal
			}).catch(function (err) {
			    console.log(err);
			});
		};
}]);
