'use strict';

describe('Controller: AplicacionConsultarappCtrl', function () {

  // load the controller's module
  beforeEach(module('configuracionApp'));

  var AplicacionConsultarappCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AplicacionConsultarappCtrl = $controller('AplicacionConsultarappCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AplicacionConsultarappCtrl.awesomeThings.length).toBe(3);
  });
});
