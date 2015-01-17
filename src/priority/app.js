var app = angular.module('app', []);

app.directive('btn', function() {
  return {
    restrict: 'A',
    priority: 10,
    link: {
      pre: function(scope, element, attrs) {
        element.append('...btn-pre');
      },
      post: function(scope, element, attrs) {
        element.append('...btn-post');
        element.addClass('btn');
      }
    }
  };
});

app.directive('primary', function() {
  return {
    restrict: 'A',
    priority: 20,
    link: {
      pre: function(scope, element, attrs) {
        element.append('...primary-pre');
      },
      post: function(scope, element, attrs) {
        element.append('...primary-post');
        if (element.hasClass('btn')) {
          element.addClass('btn-primary');
        }
      }
    }
  };
});
