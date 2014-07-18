var app = angular.module('productStore', [
  'ngRoute',
  'appControllers'
]);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        controller:'dealsCtrl',
        templateUrl:'partials/home.html'
      })
      .when('/list', {
        controller:'demoCtrl',
        templateUrl:'partials/shoes.html'
      })
      .when('/men-footwear', {
        controller:'demoCtrl',
        templateUrl:'partials/shoes.html'
      })
      .when('/men/:id', {
        templateUrl: 'partials/product-details.html',
        controller: 'productDetailCtrl'
      })
      .otherwise({
        redirectTo: 'home'
      });

      $locationProvider.html5Mode(false);

  }]);
