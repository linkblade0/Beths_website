angular.module('bethSite', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl',
      resolve: {
        user: function(authService) {
          return authService.getUser();
        }
      }
    })

    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'contactCtrl'
    })

    .state('profile', {
      url: '/user',
      templateUrl: 'views/profile.html',
      controller: 'profileCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'directives/login.html',
      controller: 'loginCtrl'
    })

    .state('logout', {
      url: '/logout',
      controller: 'logoutCtrl',
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'directives/signup.html',
      controller: 'signupCtrl'
    })


  // .run(function($rootScope, $location, $state, authService) {
  //   $rootScope.$on('$stateChangeStart',
  //     function (event, next, current) {
  //       authService.getUserStatus();
  //       if(next.access.restricted &&
  //         !authService.isLoggedIn()) {
  //         $location.path('/login');
  //         $state.reload();
  //       }
  //     })
  // })

})
