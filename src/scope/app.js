var app = angular.module('app', []).run(function($rootScope, $timeout) {
  $rootScope.property = 'data for property';
  $rootScope.inherit2 = 'data for inherit2';
  $rootScope.inherit3 = 'data for inherit3';
  $rootScope.inherit4 = 'data for inherit4';
  $rootScope.inherit5 = 'data for inherit5';
  $rootScope.inherit6 = 'data for inherit6';
  $timeout(function() {
    $rootScope.inherit6 = 'data for inherit6 changed in rootScope';  
  }, 1500);
  $rootScope.inherit7 = 'data for inherit7';
  $timeout(function() {
    $rootScope.inherit7 = 'data for inherit7 changed in rootScope';  
  }, 1500);
});

app.controller('Property2Ctrl', function($scope) {
  $scope.property2 = 'data for property2';
});

app.directive('inheritDirective', function() {
  return {
    scope: true,
    link: function($scope) {
      $scope.property3 = 'data for property3';
    }
  };
});

app.directive('myDirective', function() {
  return {
    scope: {},
    link: function($scope) {
      $scope.property4 = 'data for property4';
    }
  };
});

app.directive('myDirectiveWithTemplate', function() {
  return {
    scope: {},
    template: '<div>Inside Div Two: {{ property5 }} - {{inherit5}}</div>',
    link: function($scope) {
      $scope.property5 = 'data for property5';
    }
  };
});

app.directive('myDirectiveWithTemplateAndIsolateValue', function($timeout) {
  return {
    scope: {
      inherit6: '@'
    },
    template: '<div>Inside Div Two: {{ property6 }} - {{inherit6}}</div>',
    link: function($scope) {
      $scope.property6 = 'data for property6';
      $timeout(function() {
        $scope.inherit6 = 'data for inherit6 changed in directive';  
      }, 3000);
    }
  };
});

app.directive('myDirectiveWithTemplateAndIsolateBinding', function($timeout) {
  return {
    scope: {
      inherit7: '='
    },
    template: '<div>Inside Div Two: {{ property7 }} - {{inherit7}}</div>',
    link: function($scope) {
      $scope.property7 = 'data for property7';
      $timeout(function() {
        $scope.inherit7 = 'data for inherit7 changed in directive';
      }, 3000);
    }
  };
});

