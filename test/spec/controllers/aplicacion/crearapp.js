'use strict';

describe('Controller: AplicacionCrearappCtrl', function () {

  // load the controller's module
  beforeEach(module('javierApp'));

  var AplicacionCrearappCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AplicacionCrearappCtrl = $controller('AplicacionCrearappCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AplicacionCrearappCtrl.awesomeThings.length).toBe(3);
  });
});
