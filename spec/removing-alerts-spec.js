describe('removing alerts', function() {
  beforeEach(function() {
    module('ui.bootstrap.alerts');

    inject(function($injector) {
      AlertService = $injector.get('AlertService');
    });
  });

  describe('general', function() {
    it('should remove an error from the general alerts object', function(){
      alert = AlertService.error('Some Error');
      
      expect(AlertService.alerts.general.length).toBe(1);
      AlertService.remove(alert);
      expect(AlertService.alerts.general.length).toBe(0);
    });
  });

  describe('special context \'foo\'', function() {
    it('should remove an error from the context', function(){
      alert = AlertService.context('foo').error('Some Error');

      expect(AlertService.alerts.foo.length).toBe(1);
      AlertService.context('foo').remove(alert);
      expect(AlertService.alerts.foo.length).toBe(0);
    });
    it('should return false if remove fails', function(){
      alert = AlertService.context('foo').error('Some Error');
      expect(AlertService.context('bar').remove(alert)).toBe(false);
    });
  });
});
