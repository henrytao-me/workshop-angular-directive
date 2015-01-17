var app = angular.module('app', []);

app.directive('myLinkLevel1', function() {
  return {
    scope: true,
    template: '<b>{{title}}</b> <div my-link-level2></div>',
    link: function($scope, $elements, $attrs) {
      console.log('-------------', 'myLinkLevel1');
      $scope.title = 'My link level 1';
    }
  };
});

app.directive('myLinkLevel2', function() {
  return {
    scope: true,
    template: '<b>{{title}}</b>',
    link: function($scope, $elements, $attrs) {
      console.log('-------------', 'myLinkLevel2');
      $scope.title = 'My link level 2';
    }
  };
});

app.directive('myCompileLevel1', function() {
  return {
    scope: true,
    template: '<b>{{title}}</b> <div my-compile-level2></div>',
    compile: function(tElement, tAttrs, transcludeFn) {
      console.log('-------------', 'myCompileLevel1', 'compile');
      return function($scope, $elements, $attrs) {
        console.log('-------------', 'myCompileLevel1', 'link');
        $scope.title = 'My compile level 1';
      }
    }
  };
});

app.directive('myCompileLevel2', function() {
  return {
    scope: true,
    template: '<b>{{title}}</b>',
    compile: function(tElement, tAttrs, transcludeFn) {
      console.log('-------------', 'myCompileLevel2', 'compile');
      return function($scope, $elements, $attrs) {
        console.log('-------------', 'myCompileLevel2', 'link');
        $scope.title = 'My compile level 2';
      }
    }
  };
});