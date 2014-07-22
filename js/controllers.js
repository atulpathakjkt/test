var appControllers = angular.module('appControllers', []);

  appControllers.controller('listCtrl', ['$scope', '$http',
    function ($scope, $http) {
    $http.get('json/products.json')
        .then(function(res){
          $scope.products = res.data;
        });
  }]);

  appControllers.controller("demoCtrl", ['$scope', '$http',
    function ($scope, $http) {
    $http.get('json/footwears.json')
       .then(function(res){
          $scope.products = res.data;
        });
  }]);

  appControllers.controller("dealsCtrl", ['$scope', '$http',
    function ($scope, $http) {
    $http.get('json/deals.json')
       .then(function(res){
          $scope.deals = res.data;
        });
  }]);

  appControllers.controller('productDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/' + $routeParams.id + '.json')
      .then(function(res) {
        $scope.product = res.data;
      });
  }]);

  appControllers.filter('upperCase', function() {
    //return function(item) {
      //var result = [];
    return function (item) {
      return item.toUpperCase();
    };
      //var now= new Date();
      //return (now.getTime() % item.id)
    //};
  });

