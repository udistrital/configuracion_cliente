'use strict';

describe('Controller: PerfilCrearperfilCtrl', function () {

  // load the controller's module
  beforeEach(module('javierApp'));

  var PerfilCrearperfilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfilCrearperfilCtrl = $controller('PerfilCrearperfilCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PerfilCrearperfilCtrl.awesomeThings.length).toBe(3);
  });
});
