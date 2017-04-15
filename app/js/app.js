function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/states/home.html'
    });







  $urlRouterProvider.otherwise('/home');
}


angular
.module('D2eApp', ['ui.router','ngMaterial'])
.config(MainRouter);
