angular.module('starter.directives')

.directive('displayName', [
  function () {
    return {
      restrict: 'EA',
      templateUrl: 'templates/directives/displayName.html',
      scope: {
        value: '@',
      },
      link: function (scope, elem, attrs) {
        
      }
    };
  }
]);