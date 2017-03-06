'use strict';

describe('Service: configuracionRequest', function () {

  // load the service's module
  beforeEach(module('javierApp'));

  // instantiate service
  var configuracionRequest;
  beforeEach(inject(function (_configuracionRequest_) {
    configuracionRequest = _configuracionRequest_;
  }));

  it('should do something', function () {
    expect(!!configuracionRequest).toBe(true);
  });

});
