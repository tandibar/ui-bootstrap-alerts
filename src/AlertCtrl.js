angular.module('ui.bootstrap.alerts')
.controller('AlertCtrl', ['$scope', '$attrs', 'AlertService', function($scope, $attrs, AlertService){

  $scope.alertContext = $attrs.context || 'general';

  $scope.alertClassFor = function(alert){
    var classes = [];
    switch (alert.type) {
      case 'warning':
        // no special class
        break;
      case 'success':
        classes.push('alert-success');
        break;
      case 'info':
        classes.push('alert-info');
        break;
      case 'error':
        classes.push('alert-danger');
        break;
      case 'danger':
        classes.push('alert-danger');
        break;
    }
    return classes.join(" ");
  };

  $scope.remove = function(alert){
    AlertService.context($scope.alertContext).remove(alert);
  };

  $scope.$watch( function () { return AlertService.context($scope.alertContext).getAllAlerts(); }, function (alerts) {
    $scope.alerts = alerts;
    $scope.anyAlerts = $scope.alerts.length > 0;
  }, true);
}]);
