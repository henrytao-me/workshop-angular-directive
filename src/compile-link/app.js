var app = angular.module('app', []).run(function($rootScope) {
  $rootScope.hello = 'moto';
});

function createDirective(name){  
  return function(){
    return {
      restrict: 'E',
      compile: function(tElement, tAttrs){
        console.log(name + ': compile');
        return {
          pre: function($scope, $element, $attrs){
            console.log(name + ': pre link');
          },
          post: function($scope, $element, $attrs){
            console.log(name + ': post link');
            $scope.name = name;
          }
        }
      }
    }
  }
}

app.directive('levelOne', createDirective('levelOne'));  
app.directive('levelTwo', createDirective('levelTwo'));  
app.directive('levelThree', createDirective('levelThree')); 