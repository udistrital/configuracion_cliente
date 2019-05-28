'use strict';

describe('Controller: MenuConsultarmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('configuracionApp'));

  var MenuConsultarmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuConsultarmenuCtrl = $controller('MenuConsultarmenuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenuConsultarmenuCtrl.awesomeThings.length).toBe(3);
  });
});
