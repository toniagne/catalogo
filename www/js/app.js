// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

   


  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.editorial', {
      url: '/editorial',
      views: {
        'menuContent': {
          templateUrl: 'templates/editorial.html',
          controller: 'EditorialCtrl'
        }
      }
    })
    .state('onboarding', {
      url: '/onboarding',
          templateUrl: 'templates/onboarding.html',
          controller: 'LoginCtrl'
    })
    .state('signin', {
      url: '/signin',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
    })
    .state('signup', {
      url: '/signup',
          templateUrl: 'templates/signup.html',
          controller: 'LoginCtrl'
    })
    .state('forgot-password', {
      url: '/forgot-password',
          templateUrl: 'templates/forgot-password.html',
          controller: 'LoginCtrl'
    })
    .state('app.product-list', {
      url: '/product-list',
      views: {
        'menuContent': {
          templateUrl: 'templates/product-list.html',
          controller: 'EditorialCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/single/:productId',
    views: {
      'menuContent': {
        templateUrl: 'templates/single-product.html',
        controller: 'SingleProductCtrl'
      }
    }
  })

  .state('app.payment_step1', {
    url: '/payment_step1',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment_step1.html',
        controller: 'PaymentCtrl'
      }
    }
  })

  .state('app.payment_step2', {
    url: '/payment_step2',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment_step2.html',
        controller: 'PaymentCtrl'
      }
    }
  })
  .state('app.payment_step3', {
    url: '/payment_step3',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment_step3.html',
        controller: 'PaymentCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/onboarding');
$ionicConfigProvider.backButton.previousTitleText(false).text('');
});
