
angular
  .module('d2eApp')
  .directive('tea', tea);

function tea () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/html/tea.directive.html'
  };
}
