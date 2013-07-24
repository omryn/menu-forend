'use strict';

describe('Service: selectedComponent', function () {

  // load the service's module
  beforeEach(module('menuForendApp'));

  // instantiate service
  var selectedComponent;
  beforeEach(inject(function(_selectedComponent_) {
    selectedComponent = _selectedComponent_;
  }));

  it('should do something', function () {
    expect(!!selectedComponent).toBe(true);
  });

});
