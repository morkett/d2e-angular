
angular
  .module('d2eApp')
  .directive('map', map);

function map () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/html/map.directive.html'
  };
}
