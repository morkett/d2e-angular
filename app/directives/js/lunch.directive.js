
angular
  .module('d2eApp')
  .directive('lunch', lunch);

function lunch () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/html/lunch.directive.html'
  };
}
