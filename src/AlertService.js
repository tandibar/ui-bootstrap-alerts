angular.module('ui.bootstrap.alerts', [])
.service('AlertService', [function() {
  
  this.id = 1;
  this.alerts = {};
  this.titleMap = {
    'error': 'Error',
    'danger': 'Danger',
    'warning': 'Warning',
    'success': 'Success',
    'info': 'Info'
  };

  this.alert = function(alert) {
    alert.id = this.id++;
    alert.title = this.titleMap[alert.type];
    this.alerts[alert.context] = this.alerts[alert.context] || [];

    for (var i = 0; i < this.alerts[alert.context].length; i++) {
      if(this.alerts[alert.context][i].message === alert.message) {
        // same message already exists
        return this.alerts[alert.context][i];
      }
    }

    this.alerts[alert.context].push(alert);
    return alert;
  };

  this.context = function(context){
    var alertService = this;
    this.alerts[context] = this.alerts[context] || [];
    return {
      getAllAlerts: function(){
        alertService.alerts[context] = alertService.alerts[context] || [];
        return alertService.alerts[context];
      },

      error: function(message){
        return alertService.alert({context: context, type: 'error', message: message});
      },
      
      danger: function(message){
        return alertService.alert({context: context, type: 'danger', message: message});
      },

      warning: function(message){
        return alertService.alert({context: context, type: 'warning', message: message});
      },

      success: function(message){
        return alertService.alert({context: context, type: 'success', message: message});
      },

      info: function(message){
        return alertService.alert({context: context, type: 'info', message: message});
      },

      remove: function(alert){
        for (var i = 0; i < alertService.alerts[context].length; i++) {
          if(alertService.alerts[context][i].id === alert.id) {
            alertService.alerts[context].splice(i, 1);
          }
        }
        // alert could not be found
        return false;
      },

      clear: function(){
        alertService.alerts[context] = null;
      }
    };
  };

  angular.extend(this, this.context('general'));
}]);
