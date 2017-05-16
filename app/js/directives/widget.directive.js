
angular
  .module('d2eApp')
  .directive('widget', widget);

function widget () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/widget.directive.html'
  };
}
