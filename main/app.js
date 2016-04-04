angular.module('bethSite', ['ui.router', 'ngCart', 'ngCookies'])

.config(function($stateProvider, $urlRouterProvider, $cookiesProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
      // resolve: {
      //   user: function(authService) {
      //     return authService.getUser();
      //   }
      // }
    })

    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'homeCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'contactCtrl'
    })

    .state('profile', {
      url: '/user',
      templateUrl: 'views/profile.html',
      controller: 'profileCtrl',
      resolve: {
        isAuth: function ( authService ) {
        return authService.isLoggedIn();
        }
      }
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

    .state('cart', {
      url:  '/cart',
      templateUrl: 'views/cart.html',
      controller: 'cartCtrl',
      resolve: {
        isAuth: function ( authService ) {
        return authService.isLoggedIn();
        }
      }
    })

})

// .run(['$state', '$cookies', '$rootScope', function($state, $cookies, $rootScope) {
//     $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
//
//         if (toState.name.indexOf('profile') > -1 && !$cookies.Session) {
//             // If logged out and transitioning to a logged in page:
//             e.preventDefault();
//             $state.go('login');
//         } else if (toState.name.indexOf('cart') > -1 && $cookies.Session) {
//             e.preventDefault();
//             $state.go('home');
//         };
//     });
// }]);

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
