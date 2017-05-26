
angular
  .module('d2eApp')
  .directive('juices', juices);

function juices () {
  return {
    restrict: 'E',

    templateUrl: 'js/directives/html/juices.directive.html'
  };
}
