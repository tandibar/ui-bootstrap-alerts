angular.module('ui.bootstrap.alerts')
.directive("alerts", function() {
  return {
    restrict: "E",
    replace: true,
    scope: true,
    template: '<div ng-controller="AlertCtrl" ng-show="anyAlerts"><div class="alert" ng-class="alertClassFor(alert)" ng-repeat="alert in alerts"><button class="close" data-dismiss="alert" ng-click="remove(alert)">×</button><strong>{{alert.title}}</strong> {{alert.message}}</div></div>'
  };
});
