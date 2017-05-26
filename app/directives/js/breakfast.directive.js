
angular
  .module('d2eApp')
  .directive('breakfast', breakfast);

function breakfast () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/html/breakfast.directive.html'
  };
}
