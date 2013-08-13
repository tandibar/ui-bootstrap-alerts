describe('configure captions', function() {
  beforeEach(function() {
    module('ui.bootstrap.alerts');

    inject(function($injector) {
      AlertService = $injector.get('AlertService');
    });
  });

  describe('defaults', function() {
    it('should be "Error" for errors', function(){
      expect(AlertService.error('Some Error').title).toBe("Error");
    });
  });

  describe('own configuration', function() {
    beforeEach(function() {
      AlertService.titleMap = {
        error: "Fehler",
        warning: "Warnung",
        success: "",
        info: "Info"
      };
    });

    it('should be "Error" for errors', function(){
      expect(AlertService.error('Some Error').title).toBe("Fehler");
    });
  });
});
