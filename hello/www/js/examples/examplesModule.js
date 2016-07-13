angular.module('examples',['survey'])

.run([function(){

}])

.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('tab.survey', {
      url: '/examples/survey',
      views: {
        'tab-examples': {
          templateUrl: 'js/examples/survey/surveyTemplate.html',
          controller: 'SurveyCtrl'
        }
      }
    })
}])
