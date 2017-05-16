function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '': {templateUrl: '/states/template.html'},
        'main-content@home': {templateUrl: '/states/partials/home/main.html'}
      }
    })
    .state('menu', {
      url: '/menu',
      views: {
        '': {templateUrl: '/states/template.html'},
        'main-content@menu': {templateUrl: '/states/partials/menu/main.html'}
      }
    });








  // $locationProvider.html5Mode(true);
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  $urlRouterProvider.otherwise('/home');
}


angular
.module('d2eApp', ['ui.router','ngMaterial'])
.config(MainRouter);
