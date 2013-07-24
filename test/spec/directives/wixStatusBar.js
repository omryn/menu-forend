'use strict';

describe('Directive: wixStatusBar', function() {
  beforeEach(module('menuForendApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<wix-status-bar></wix-status-bar>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the wixStatusBar directive');
  }));
});
