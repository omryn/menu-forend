'use strict';

describe('Service: MenuDataService', function () {

  // load the service's module
  beforeEach(module('menuForendApp'));

  // instantiate service
  var MenuDataService;
  beforeEach(inject(function(_MenuDataService_) {
    MenuDataService = _MenuDataService_;
  }));

  it('should do something', function () {
    expect(!!MenuDataService).toBe(true);
  });

});
