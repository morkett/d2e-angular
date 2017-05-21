
angular
  .module('d2eApp')
  .directive('train', train);

function train () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/html/train.directive.html'
  };
}
