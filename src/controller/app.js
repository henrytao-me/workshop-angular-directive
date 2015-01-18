var app = angular.module('app', []);

app.directive('powerSwitch', function() {
  return {
    controller: function($scope, $element, $attrs) {
      $scope.state = 'on';
      this.getState = function() {
        return $scope.state;
      };
      $scope.toggle = function() {
        $scope.state = $scope.state === 'on' ? 'off' : 'on';
      };
    }
  };
});

app.directive('lightbulb', function() {
  return {
    require: '^powerSwitch',
    link: function(scope, element, attrs, powerSwitchCtrl) {
      scope.$watch('state', function() {
        scope.bulb = powerSwitchCtrl.getState();
      });
    }
  };
});