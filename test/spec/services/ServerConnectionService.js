'use strict';

describe('Service: ServerConnectionService', function () {

  // load the service's module
  beforeEach(module('menuForendApp'));

  // instantiate service
  var ServerConnectionService;
  beforeEach(inject(function(_ServerConnectionService_) {
    ServerConnectionService = _ServerConnectionService_;
  }));

  it('should do something', function () {
    expect(!!ServerConnectionService).toBe(true);
  });

});
