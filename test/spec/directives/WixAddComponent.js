'use strict';

describe('Directive: WixAddComponent', function() {
  beforeEach(module('menuForendApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<-wix-add-component></-wix-add-component>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the WixAddComponent directive');
  }));
});
