'use strict';
angular.module('menuForendApp').directive('wixAddComponent', function () {
    return {
//        template: '<div></div>',
        templateUrl: 'views/addNewComponent.html',
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            //element.text('this is the WixAddComponent directive');
        }
    };
});
