function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {templateUrl: '/states/template.html'},
        'main-content@home': {templateUrl: '/states/partials/home/main.html'}
      }
    })
    .state('about', {
      url: '/about',
      views: {
        '': {templateUrl: '/states/template.html'},
        'main-content@about': {templateUrl: '/states/partials/about/main.html'}
      }
    })
    .state('team', {
      url: '/the-team',
      views: {
        '': {templateUrl: '/states/template.html'},
        'main-content@team': {templateUrl: '/states/partials/team/main.html'}
      }
    })
    .state('menu', {
      url: '/menu',
      views: {
        '': {templateUrl: '/states/template.html'},
        'main-content@menu': {templateUrl: '/states/partials/menu/main.html'}
      }
    })
    .state('contact', {
      url: '/contact',
      views: {
        '': {templateUrl: '/states/template.html'},
        'main-content@contact': {templateUrl: '/states/partials/contact/main.html'}
      }
    });








  // $locationProvider.html5Mode(true);
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  $urlRouterProvider.otherwise('/about');
}


angular
.module('d2eApp', ['ui.router','ngMaterial', 'uiGmapgoogle-maps'])
.config(MainRouter);
