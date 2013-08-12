// With this service you can create alerts in a specified context which will
// be immediately displayed for the user. Use for example
//
//     AlertService.context('foo').error("Something went really wrong");
//
// to display an error message. The alert can be dismissed by the user
// clicking on the 'x'
//
// To display the messages of this service use the alerts directive
//
//     <alerts context="foo"></alerts>
//
// in your template where you want to show the alerts. If you do not specify
// the context it will ge 'general'.
//
// Types of alerts
//
//    error   --> red
//    warning --> yellow
//    success --> green
//    info    --> blue
//

angular.module('ui.bootstrap.alerts',[])
.service('AlertService', [function() {
  
  this.id = 1;
  this.alerts = {};

  this.alert = function(alert) {
    alert.id = this.id++;
    alert.title = function() {
      switch(alert.type) {
        case 'error': return "Fehler";
        case 'warning': return "Warnung";
        case 'success': return "";
        case 'info': return "Info";
      }
    };
    this.alerts[alert.context] = this.alerts[alert.context] || [];
    var sameMessages = jQuery.grep(this.alerts[alert.context], function(existingAlert){
      return existingAlert.message == alert.message;
    });
    if(sameMessages.length === 0) this.alerts[alert.context].push(alert);
  };

  this.context = function(context){
    var alertService = this;
    return {
      getAllAlerts: function(){
        alertService.alerts[context] = alertService.alerts[context] || [];
        return alertService.alerts[context];
      },

      error: function(message){
        alertService.alert({context: context, type: 'error', message: message});
      },

      warning: function(message){
        alertService.alert({context: context, type: 'warning', message: message});
      },

      success: function(message){
        alertService.alert({context: context, type: 'success', message: message});
      },

      info: function(message){
        alertService.alert({context: context, type: 'info', message: message});
      },

      remove: function(alert){
        alertService.alerts[context] = jQuery.grep(alertService.alerts[context], function(value) {
          return value.id != alert.id;
        });
      },

      clear: function(){
        alertService.alerts[context] = null;
      }
    };
  };

  angular.extend(this, this.context('general'));
}])
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
        classes.push('alert-error');
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
}])
.directive("alerts", function() {
  return {
    restrict: "E",
    replace: true,
    scope: true,
    template: '<div ng-controller="AlertCtrl" ng-show="anyAlerts"><div class="alert" ng-class="alertClassFor(alert)" ng-repeat="alert in alerts"><button class="close" data-dismiss="alert" ng-click="remove(alert)">×</button><strong>{{alert.title()}}</strong> {{alert.message}}</div></div>'
  };
});
