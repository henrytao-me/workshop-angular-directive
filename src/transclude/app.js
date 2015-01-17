var app = angular.module('app', []);

app.directive('myTransclude', function() {
  return {
    transclude: true,
    template: '<h4>This is my transclude: </h4> <marquee ng-transclude></marquee>'
  };
});

app.directive('customTransclude', function() {
  return {
    transclude: 'element',
    compile: function(tElement, tAttrs, transcludeFn) {
      return function ($scope, $element, $attrs) {
        transcludeFn($scope, function(cElement) {
          var $title = angular.element('<h4>This is custom transclude: </h4>');
          tElement.after($title);
          $title.after(angular.element('<marquee></marquee>').append(cElement));
        });
      }
    }
  };
});