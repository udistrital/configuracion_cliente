'use strict';

describe('Controller: PerfilConsultarperfilCtrl', function () {

  // load the controller's module
  beforeEach(module('configuracionApp'));

  var PerfilConsultarperfilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfilConsultarperfilCtrl = $controller('PerfilConsultarperfilCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PerfilConsultarperfilCtrl.awesomeThings.length).toBe(3);
  });
});
