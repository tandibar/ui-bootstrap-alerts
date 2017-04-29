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
      getAllAlerts() {
        alertService.alerts[context] = alertService.alerts[context] || [];
        return alertService.alerts[context];
      },

      error(message) {
        return alertService.alert({context, type: 'error', message});
      },
      
      danger(message) {
        return alertService.alert({context, type: 'danger', message});
      },

      warning(message) {
        return alertService.alert({context, type: 'warning', message});
      },

      success(message) {
        return alertService.alert({context, type: 'success', message});
      },

      info(message) {
        return alertService.alert({context, type: 'info', message});
      },

      remove(alert) {
        for (var i = 0; i < alertService.alerts[context].length; i++) {
          if(alertService.alerts[context][i].id === alert.id) {
            alertService.alerts[context].splice(i, 1);
          }
        }
        // alert could not be found
        return false;
      },

      clear() {
        alertService.alerts[context] = null;
      }
    };
  };

  angular.extend(this, this.context('general'));
}]);
