describe('adding alerts', function() {
  beforeEach(function() {
    module('ui.bootstrap.alerts');

    inject(function($injector) {
      AlertService = $injector.get('AlertService');
    });
  });

  describe('general', function() {
    it('should add an error to the general alerts object', function(){
      AlertService.error('Some Error');

      generalAlerts = AlertService.alerts.general
      expect(generalAlerts[0].message).toBe('Some Error');
      expect(generalAlerts[0].type).toBe('error');
    });

    it('should add an info to the general alerts object', function(){
      AlertService.info('Some info');

      generalAlerts = AlertService.alerts.general
      expect(generalAlerts[0].message).toBe('Some info');
      expect(generalAlerts[0].type).toBe('info');
    });

    it('should add a warning to the general alerts object', function(){
      AlertService.warning('Some warning');

      generalAlerts = AlertService.alerts.general
      expect(generalAlerts[0].message).toBe('Some warning');
      expect(generalAlerts[0].type).toBe('warning');
    });

    it('should add a success to the general alerts object', function(){
      AlertService.success('Some success');

      generalAlerts = AlertService.alerts.general
      expect(generalAlerts[0].message).toBe('Some success');
      expect(generalAlerts[0].type).toBe('success');
    });
  });

  describe('special context \'foo\'', function() {
    it('should add an error to a context', function(){
      AlertService.context('foo').error('Some Error');

      fooAlerts = AlertService.alerts.foo
      expect(fooAlerts[0].message).toBe('Some Error');
      expect(fooAlerts[0].type).toBe('error');
    });

    it('should add an info to a context', function(){
      AlertService.context('foo').info('Some info');

      fooAlerts = AlertService.alerts.foo
      expect(fooAlerts[0].message).toBe('Some info');
      expect(fooAlerts[0].type).toBe('info');
    });

    it('should add a warning to a context', function(){
      AlertService.context('foo').warning('Some warning');

      fooAlerts = AlertService.alerts.foo
      expect(fooAlerts[0].message).toBe('Some warning');
      expect(fooAlerts[0].type).toBe('warning');
    });

    it('should add a success to a context', function(){
      AlertService.context('foo').success('Some success');

      fooAlerts = AlertService.alerts.foo
      expect(fooAlerts[0].message).toBe('Some success');
      expect(fooAlerts[0].type).toBe('success');
    });
  });

  describe('adding more than one', function() {
    it('should add two different errors', function(){
      AlertService.context('foo').error('Some Error');
      AlertService.context('foo').error('Another Error');

      expect(AlertService.alerts.foo.length).toBe(2)
    })
  })

});
