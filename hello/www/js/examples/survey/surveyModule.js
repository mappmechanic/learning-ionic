angular.module('survey',[])

.run([function(){

}])

.config([function(){

}])

.directive("errorMessage", function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            name: '@',
            error: '@'
        },
        template: '<div><p ng-show="$parent.{{name}}.$dirty">Dirty</p><p ng-show="$parent.{{name}}.$error.{{error}}"><span ng-transclude></span></p></div>'
    };
});
