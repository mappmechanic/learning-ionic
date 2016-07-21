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
	.state('tab.map', {
      url: '/examples/map',
      views: {
        'tab-examples': {
          templateUrl: 'js/examples/map/mapTemplate.html',
          controller: 'MapCtrl'
        }
      }
    })
	.state('tab.accelerometer', {
      url: '/examples/accelerometer',
      views: {
        'tab-examples': {
          templateUrl: 'js/examples/accelerometer/accelerometerTemplate.html',
          controller: 'AccelerometerCtrl'
        }
      }
    })
}])
