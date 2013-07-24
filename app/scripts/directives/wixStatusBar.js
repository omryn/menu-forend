'use strict';

menuForendApp.directive('wixStatusBar', function() {
  return {
    templateUrl: 'views/status.html',
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
//      element.text('this is the wixStatusBar directive');
    }
  };
});
