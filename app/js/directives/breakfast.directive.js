
angular
  .module('d2eApp')
  .directive('breakfast', breakfast);

function breakfast () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/breakfast.directive.html'
  };
}
