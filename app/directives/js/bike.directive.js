
angular
  .module('d2eApp')
  .directive('bike', bike);

function bike () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/html/bike.directive.html'
  };
}
