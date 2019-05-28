'use strict';

describe('Controller: ParametroConsultarparametroCtrl', function () {

  // load the controller's module
  beforeEach(module('configuracionApp'));

  var ParametroConsultarparametroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParametroConsultarparametroCtrl = $controller('ParametroConsultarparametroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ParametroConsultarparametroCtrl.awesomeThings.length).toBe(3);
  });
});
