var app = angular.module('app', []);

app.directive('first', function() {
  return {
    restrict: 'A',
    priority: 1,
    link: function(scope, element, attrs) {
      element.addClass('btn btn-success').append('First: Executed, ');
      // alert('first');
    }
  };
});

app.directive('second', function() {
  return {
    restrict: 'A',
    priority: 2,
    terminal: true,
    link: function(scope, element, attrs) {
      element.addClass('btn btn-success').append('Second: Executed, ');
      // alert('second');
    }
  };
});

app.directive('noEntry', function() {
  return {
    restrict: 'A',
    priority: 1000,
    link: function(scope, element, attrs) {
      element.append('- No Entry: Executed');
      // alert('noEntry');
    }
  };
});