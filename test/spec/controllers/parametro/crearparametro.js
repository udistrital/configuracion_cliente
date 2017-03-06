'use strict';

describe('Controller: ParametroCrearparametroCtrl', function () {

  // load the controller's module
  beforeEach(module('javierApp'));

  var ParametroCrearparametroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParametroCrearparametroCtrl = $controller('ParametroCrearparametroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ParametroCrearparametroCtrl.awesomeThings.length).toBe(3);
  });
});
