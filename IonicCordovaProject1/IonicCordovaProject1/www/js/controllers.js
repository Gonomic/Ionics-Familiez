angular.module('starter.controllers', [])

.controller('ToevoegenCtrl', function ($scope) {})

.controller('OverzichtCtrl', function ($scope) {})


 .controller('MenuControl', function($scope, $ionicSideMenuDelegate) {
      $scope.toggleLeft = function () {
          $ionicSideMenuDelegate.toggleLeft();
      };
      $scope.toggleRight = function () {
          $ionicSideMenuDelegate.toggleRight();
      }
});
