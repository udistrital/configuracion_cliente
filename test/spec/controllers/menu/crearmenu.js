'use strict';

describe('Controller: MenuCrearmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('configuracionApp'));

  var MenuCrearmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuCrearmenuCtrl = $controller('MenuCrearmenuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenuCrearmenuCtrl.awesomeThings.length).toBe(3);
  });
});
