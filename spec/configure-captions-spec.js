describe('configure captions', () => {
  beforeEach(() => {
    module('ui.bootstrap.alerts');

    inject($injector => {
      AlertService = $injector.get('AlertService');
    });
  });

  describe('defaults', () => {
    it('should be "Error" for errors', () => {
      expect(AlertService.error('Some Error').title).toBe("Error");
    });
  });

  describe('own configuration', () => {
    beforeEach(() => {
      AlertService.titleMap = {
        error: "Fehler",
        warning: "Warnung",
        success: "",
        info: "Info"
      };
    });

    it('should be "Error" for errors', () => {
      expect(AlertService.error('Some Error').title).toBe("Fehler");
    });
  });
});
