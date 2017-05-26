
angular
  .module('d2eApp')
  .directive('car', car);

function car () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/html/car.directive.html'
  };
}
