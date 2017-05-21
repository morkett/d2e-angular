
angular
  .module('d2eApp')
  .directive('bus', bus);

function bus () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/html/bus.directive.html'
  };
}
